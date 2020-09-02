using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddressBook.Models
{
    public class Roomdto
    {
        public int ID { get; set; }

        public int Number { get; set; }

        public string Description { get; set; }

        public int Floor { get; set; }

        public int RoomTypeID { get; set; }
       
        public int BranchID { get; set; }
        
    }
}