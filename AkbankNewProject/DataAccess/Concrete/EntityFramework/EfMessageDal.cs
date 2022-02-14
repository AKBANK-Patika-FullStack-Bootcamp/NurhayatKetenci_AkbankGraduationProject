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
    public class EfMessageDal : EfEntityRepositoryBase<Message, SiteContext>, IMessageDal
    {
        public List<MessageDetailDto> GetMessageDetail()
        {
            using (SiteContext context = new SiteContext())
                {
                var result = from m in context.Messages
                             join u in context.Users
                             on m.id equals u.id
                             join a in context.Apartments
                             on m.id equals a.id
                             select new MessageDetailDto
                             {
                                 Id = u.id,
                                 MessageDetail = m.messsage,
                                 Date = m.date,
                                 ApartmentNumber = a.apartment_Number
                             };
                  return result.ToList();   
                }
        } 
        
    }
}
