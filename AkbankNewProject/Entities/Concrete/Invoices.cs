using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.Concrete
{
    public class Invoices:IEntity
    {
        public int id { get; set; }
        public int apartment_Id { get; set; }
        public DateTime date { get; set; }
        public string? invoice_type { get; set; }
        public int price { get; set; }
        public bool status { get; set; }
    }
}
