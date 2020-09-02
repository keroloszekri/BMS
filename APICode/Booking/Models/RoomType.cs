using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AddressBook.Models
{
    public class RoomType
    {
        [Key]
        [Required]
        public int ID { get; set; }
        public string Name { get; set; }
        
    }
}