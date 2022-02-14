using Core.Utilities.Results;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public  interface IApartmentService
    {
        IDataResult<List<Apartment>> GetAll();
        IDataResult<Apartment> GetById(int apartmentId);
        IResult Add(Apartment apartment);
        IResult Update(Apartment apartment);
        IResult Delete(Apartment apartment);
        IDataResult<List<ApartmentDetailDto>> GetApartmentDetails();
        IDataResult<Apartment> GetByApartmentNumber(int apartmentNumber);

    }
}
