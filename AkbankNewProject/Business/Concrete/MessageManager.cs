using Business.Abstract;
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
    public class MessageManager : IMessageService
    {

        IMessageDal _MessageDal;
        public MessageManager(IMessageDal MessageDal)
        {
            _MessageDal = MessageDal;
        }

        public IResult Add(Entities.Concrete.Message message)
        {
            _MessageDal.Add(message);
            return new SuccessResult(Messages.ProductAdded);
        }


        public IResult Delete(Entities.Concrete.Message message)
        {
            _MessageDal.Delete(message);
            return new SuccessResult(Messages.ProductDelete);
        }

        public IDataResult<List<Entities.Concrete.Message>> GetAll()
        {
            return new SuccessDataResult<List<Message>>(_MessageDal.GetAll(), Messages.ProductListed);
        }

        public IDataResult<Message> GetById(int Id)
        {
            var getById = _MessageDal.Get(p => p.id == Id);
            return new SuccessDataResult<Message>(Messages.ProductDelete);//düzelt
        }

        public IDataResult<List<MessageDetailDto>> GetMessageDetails()
        {
            return new SuccessDataResult<List<MessageDetailDto>>( _MessageDal.GetMessageDetail(), Messages.ProductListed);

        }

        public IResult Update(Entities.Concrete.Message message)
        {

            _MessageDal.Update(message);
            return new SuccessResult(Messages.ProductUpdate);
        }
    }
}
