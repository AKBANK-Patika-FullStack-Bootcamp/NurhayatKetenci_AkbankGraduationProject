using Business.Abstract;
using Business.BusinessAspect.Autofac;
using Business.Constants;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class ApartmentManager : IApartmentService
    {

        IApartmentDal _ApartmentDal;
        public ApartmentManager(IApartmentDal ApartmentDal)
        {
            _ApartmentDal = ApartmentDal;
        }
        //[SecuredOperation("apartment.add,admin")]
        public IResult Add(Apartment Apartment)
        {
            _ApartmentDal.Add(Apartment);
            return new SuccessResult(Messages.ProductAdded);
        }
        //[SecuredOperation("apartment.delete,admin")]
        public IResult Delete(Apartment Apartment)
        {
            _ApartmentDal.Delete(Apartment);
            return new SuccessResult(Messages.ProductDelete);
        }

        public IDataResult<List<Apartment>> GetAll()
        {
            return new SuccessDataResult<List<Apartment>>(_ApartmentDal.GetAll(), Messages.ProductListed);

        }

        public IDataResult<List<ApartmentDetailDto>> GetApartmentDetails()
        {
            return new SuccessDataResult<List<ApartmentDetailDto>>(_ApartmentDal.GetApartmentDetail(), Messages.ProductListed);
        }

        public IDataResult<Apartment> GetByApartmentNumber(int apartmentNumber)
        {
            var getByApartmentId = _ApartmentDal.Get(p => p.apartment_Number==apartmentNumber);
            return new SuccessDataResult<Apartment>(getByApartmentId);
        }

        public IDataResult<Apartment> GetById(int Id)
        {
            var getById = _ApartmentDal.Get(p => p.id == Id);
            return new SuccessDataResult<Apartment>(getById);
        }
        //[SecuredOperation("apartment.update,admin")]
        public IResult Update(Apartment Apartment)
        {
            _ApartmentDal.Update(Apartment);
            return new SuccessResult(Messages.ProductUpdate);
        }


    }
}
