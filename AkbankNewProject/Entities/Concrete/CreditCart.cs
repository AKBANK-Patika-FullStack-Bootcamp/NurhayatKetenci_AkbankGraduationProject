using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
     public  class CreditCart:IEntity
    {
        public int Id { get; set; }
        public string? first_Name { get; set; }
        public string? last_Name { get; set; }
        public string? account_Number { get; set; }
        public int cvv_Code { get; set; }
    }
}
