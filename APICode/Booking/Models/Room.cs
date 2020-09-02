using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AddressBook.Models
{
    public class Room
    {
        public int ID { get; set; }

        public int Number { get; set; }

        public string Description { get; set; }

        public int Floor { get; set; }

        public int RoomTypeID { get; set; }
        [ForeignKey("RoomTypeID")]
        public virtual RoomType Type { get; set; }

        public int BranchID { get; set; }
        [ForeignKey("BranchID")]
        public virtual Branch Branch { get; set; }

    }
}