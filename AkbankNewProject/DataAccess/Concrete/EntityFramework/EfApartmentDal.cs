using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfApartmentDal : EfEntityRepositoryBase<Apartment, SiteContext>, IApartmentDal
    {
        public List<ApartmentDetailDto> GetApartmentDetail()
        {
            using (SiteContext context=new SiteContext())
            {
                var result = from a in context.Apartments
                             join u in context.Users
                             on a.id equals u.apartment_Id
                             join i in context.Invoices
                             on a.id equals i.apartment_Id

                             select new ApartmentDetailDto
                             {
                                 Id = u.id,
                                 FlatOwnerName = u.first_Name + u.last_Name,
                                 VehicleInformation = u.vehicle_information,
                                 Price = i.price,
                                 InvoicesType = i.invoice_type

                             };
                return result.ToList();
            }
        }
    }
}
