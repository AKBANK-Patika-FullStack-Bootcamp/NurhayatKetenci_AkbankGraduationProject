using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities.Concrete
{
    public class User:IEntity
    {
        public int id { get; set; }
        public string? first_Name { get; set; }
        public string? last_Name { get; set; }
        public string? identity_Number { get; set; }
        public string? email { get; set; }
        public string? phone_Number { get; set; }
        public bool vehicle_information { get; set; }
        public int apartment_Id { get; set; }
        public string? apartment_Information { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public bool Status { get; set; }

    }
}
