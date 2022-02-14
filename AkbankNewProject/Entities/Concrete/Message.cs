using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.Concrete
{
    public class Message : IEntity
    {
        public int id { get; set; }
        public int user_Id { get; set; }
        public string messsage { get; set; }
        public bool status { get; set; }
        public DateTime date  { get; set; }

    }
}
