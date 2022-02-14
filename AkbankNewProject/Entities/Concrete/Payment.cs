using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Payment:IEntity
    {
        public int id { get; set; }
        public int invoice_Id { get; set; }
        public DateTime date { get; set; }
        public int credit_Card_Id { get; set; }
    }
}
