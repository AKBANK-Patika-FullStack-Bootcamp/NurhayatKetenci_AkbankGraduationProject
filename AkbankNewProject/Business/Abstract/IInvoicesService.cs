using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IInvoicesService
    {
        IResult Add(Invoices invoices);
        IResult Update(Invoices invoices);
        IResult Delete(Invoices invoices);
        IDataResult<List<Invoices>> GetAll();
        IDataResult<Invoices> GetById(int id);
        IDataResult<List<Invoices>> GetByApartmentId(int apartmentId);
    }
}
