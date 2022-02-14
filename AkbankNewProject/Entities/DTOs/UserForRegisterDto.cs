using Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DTOs
{
    public class UserForRegisterDto : IDto
    {
        public string? email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? identity_Number { get; set; }
        public string? phone_Number { get; set; }
        public bool vehicle_information { get; set; }
        public int apartment_Id { get; set; }
        public string? apartment_Information { get; set; }
    }
}
