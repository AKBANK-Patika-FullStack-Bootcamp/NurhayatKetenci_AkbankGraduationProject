using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.Concrete
{
    public class Apartment : IEntity
    {
        [Key]
        public int id { get; set; }
        public string? block { get; set; }
        public string? type { get; set; }
        public bool status { get; set; }
        public int floor { get; set; }
        public int apartment_Number { get; set; }
    }
}
