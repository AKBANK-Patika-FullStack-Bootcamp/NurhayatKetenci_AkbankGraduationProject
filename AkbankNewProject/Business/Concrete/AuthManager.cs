using Business.Abstract;
using Business.Constants;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using Core.Utilities.Security.Hashing;
using Core.Utilities.Security.JWT;
using DataAccess.Abstract;
using Entities.DTOs;

namespace Business.Concrete
{
    public class AuthManager : IAuthService
    {
        private IUserDal _userDal;
        private ITokenHelper _tokenHelper;

        public AuthManager(IUserDal userDal, ITokenHelper tokenHelper)
        {
            _userDal = userDal;
            _tokenHelper = tokenHelper;
        }

        public IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password)
        {
            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
            var user = new User
            {
                email = userForRegisterDto.email,
                first_Name = userForRegisterDto.FirstName,
                last_Name = userForRegisterDto.LastName,
                identity_Number=userForRegisterDto.identity_Number,
                phone_Number=userForRegisterDto.phone_Number,
                vehicle_information=userForRegisterDto.vehicle_information,
                apartment_Id=userForRegisterDto.apartment_Id,
                apartment_Information=userForRegisterDto.apartment_Information,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Status = true
            };
            _userDal.Add(user);
            return new SuccessDataResult<User>(user, Messages.UserRegistered);
        }

        public IDataResult<User> Login(UserForLoginDto userForLoginDto)
        {
            var userToCheck = _userDal.Get(user => user.email == userForLoginDto.Email);
            if (userToCheck == null)
            {
                return new ErrorDataResult<User>(Messages.UserNotFound);
            }

            if (!HashingHelper.VerifyPasswordHash(userForLoginDto.Password, userToCheck.PasswordHash, userToCheck.PasswordSalt))
            {
                return new ErrorDataResult<User>(Messages.PasswordError);
            }

            return new SuccessDataResult<User>(userToCheck, Messages.SuccessfulLogin);
        }

        public IResult UserExists(string email)
        {
            if (_userDal.Get(user => user.email == email) != null)
            {
                return new ErrorResult(Messages.UserAlreadyExists);
            }

            return new SuccessResult();
        }

        public IDataResult<AccessToken> CreateAccessToken(User user)
        {
            var claims = _userDal.GetClaims(user);
            var accessToken = _tokenHelper.CreateToken(user, claims);
            return new SuccessDataResult<AccessToken>(accessToken, Messages.AccessTokenCreated);
        }
        public IDataResult<UserForUpdateDto> Update(UserForUpdateDto userForUpdate)
        {
            var currentUser = _userDal.Get(u => u.id == userForUpdate.UserId);

            var user = new User
            {
                id = userForUpdate.UserId,
                email = userForUpdate.Email,
                first_Name = userForUpdate.FirstName,
                last_Name = userForUpdate.LastName,
                identity_Number = userForUpdate.identity_Number,
                phone_Number = userForUpdate.phone_Number,
                vehicle_information = userForUpdate.vehicle_information,
                apartment_Id = userForUpdate.apartment_Id,
                apartment_Information = userForUpdate.apartment_Information,     
                Status = true
            };

            byte[] passwordHash, passwordSalt;

            if (userForUpdate.Password != "")
            {
                HashingHelper.CreatePasswordHash(userForUpdate.Password, out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
            }
            _userDal.Update(user);
            return new SuccessDataResult<UserForUpdateDto>(userForUpdate, Messages.CustomerUpdated);
        }
    }
}
