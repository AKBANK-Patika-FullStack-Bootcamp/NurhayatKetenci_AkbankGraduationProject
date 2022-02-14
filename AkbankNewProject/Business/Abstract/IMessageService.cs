using Core.Utilities.Results;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IMessageService
    {
        IResult Add(Message message);
        IResult Update(Message message);
        IResult Delete(Message message);
        IDataResult<List<Message>> GetAll();
        IDataResult<List<MessageDetailDto>> GetMessageDetails();


    }
}
