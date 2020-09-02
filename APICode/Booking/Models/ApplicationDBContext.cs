using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AddressBook.Models
{
    public class ApplicationDBContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDBContext() : base("CS")
        {

        }
        public virtual DbSet<RoomType> RoomType { get; set; }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<Branch> Branch { get; set; }
        public virtual DbSet<BookingRoom> BookingRoom { get; set; }

        public System.Data.Entity.DbSet<AddressBook.Models.Roomdto> Roomdtoes { get; set; }
    }
}