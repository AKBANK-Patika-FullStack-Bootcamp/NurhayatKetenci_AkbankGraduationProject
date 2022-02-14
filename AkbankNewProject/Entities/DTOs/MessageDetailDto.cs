using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class MessageDetailDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MessageDetail { get; set; }
        public DateTime Date { get; set; }
        public int ApartmentNumber { get; set; }
    }
}
