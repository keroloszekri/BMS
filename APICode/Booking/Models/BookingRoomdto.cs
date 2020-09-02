using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddressBook.Models
{
    public class BookingRoomdto
    {
        public int ID { get; set; }
        public string UserID { get; set; }
        public int RoomID { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
    }
}