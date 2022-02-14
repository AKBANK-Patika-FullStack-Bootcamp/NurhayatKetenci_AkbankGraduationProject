using Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class ApartmentDetailDto:IDto
    {
        public int Id { get; set; }
        public string FlatOwnerName { get; set; }
        public string InvoicesType { get; set; }
        public int Price { get; set; }
        public bool VehicleInformation { get; set; }

    }
}
