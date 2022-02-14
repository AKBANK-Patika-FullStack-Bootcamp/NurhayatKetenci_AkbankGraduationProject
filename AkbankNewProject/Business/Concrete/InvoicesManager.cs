using Business.Abstract;
using Business.BusinessAspect.Autofac;
using Business.Constants;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class InvoicesManager : IInvoicesService
    {

        IInvoicesDal _InvoicesDal;
        public InvoicesManager(IInvoicesDal InvoicesDal)
        {
            _InvoicesDal = InvoicesDal;
        }

        //[SecuredOperation("Invoices.add,admin")]
        public IResult Add(Entities.Concrete.Invoices invoices)
        {
            _InvoicesDal.Add(invoices);
            return new SuccessResult(Messages.ProductAdded);
        }


        //[SecuredOperation("Invoices.delete,admin")]
        public IResult Delete(Entities.Concrete.Invoices invoices)
        {
            _InvoicesDal.Delete(invoices);
            return new SuccessResult(Messages.ProductDelete);
        }

        public IDataResult<List<Entities.Concrete.Invoices>> GetAll()
        {
           
            return new SuccessDataResult<List<Invoices>>(_InvoicesDal.GetAll(), Messages.ProductListed);

        }

        public IDataResult<List<Invoices>> GetByApartmentId(int apartmentId)
        {
            return new SuccessDataResult<List<Invoices>>(_InvoicesDal.GetAll(p => (p.apartment_Id) == apartmentId));
        }

        public IDataResult<Invoices> GetById(int Id)
        {
            var getById = _InvoicesDal.Get(p => p.id == Id);
            return new SuccessDataResult<Invoices>(getById);
        }

        //[SecuredOperation("Invoices.update,admin")]
        public IResult Update(Entities.Concrete.Invoices invoices)
        {
            _InvoicesDal.Update(invoices);
            return new SuccessResult(Messages.ProductUpdate);
        }

        IDataResult<Entities.Concrete.Invoices> IInvoicesService.GetById(int id)
        {
            var getById = _InvoicesDal.Get(p => p.id == id);
            return new SuccessDataResult<Invoices>(getById);
        }
    }
}
