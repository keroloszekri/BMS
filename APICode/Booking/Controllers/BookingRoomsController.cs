using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AddressBook.Models;
using Microsoft.AspNet.Identity;

namespace AddressBook.Controllers
{
    [Authorize]
    public class BookingRoomsController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/BookingRooms
        [AllowAnonymous]
        public List<BookingRoomdto> GetBookingRoom()
        {
            List<BookingRoomdto> personlistdto = new List<BookingRoomdto>();
            foreach (var item in db.BookingRoom)
            {
                BookingRoomdto dto = new BookingRoomdto();
                dto.ID = item.ID;
                dto.ToDate = item.ToDate;
                dto.FromDate = item.FromDate;

                if (item.UserID != null)
                {
                    dto.UserID = item.UserID;
                }
                personlistdto.Add(dto);
            }
            return personlistdto;
        }

        // GET: api/BookingRooms/5
        [ResponseType(typeof(BookingRoom))]
        public IHttpActionResult GetBookingRoom(int id)
        {
            BookingRoom bookingRoom = db.BookingRoom.Find(id);
            if (bookingRoom == null)
            {
                return NotFound();
            }
            BookingRoomdto dto = new BookingRoomdto();
            dto.ID = bookingRoom.ID;
            dto.ToDate = bookingRoom.ToDate;
            dto.FromDate = bookingRoom.FromDate;

            if (bookingRoom.UserID != null)
            {
                dto.UserID = bookingRoom.UserID;
            }
            return Ok(dto);
        }

        // PUT: api/BookingRooms/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookingRoom(int id, BookingRoom bookingRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookingRoom.ID)
            {
                return BadRequest();
            }

            bookingRoom.UserID = User.Identity.GetUserId();
            db.Entry(bookingRoom).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingRoomExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BookingRooms
        [ResponseType(typeof(BookingRoom))]
        public IHttpActionResult PostBookingRoom(BookingRoom bookingRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            bookingRoom.UserID = User.Identity.GetUserId();
            db.BookingRoom.Add(bookingRoom);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bookingRoom.ID }, bookingRoom);
        }

        // DELETE: api/BookingRooms/5
        [ResponseType(typeof(BookingRoom))]
        public IHttpActionResult DeleteBookingRoom(int id)
        {
            BookingRoom bookingRoom = db.BookingRoom.Find(id);
            if (bookingRoom == null)
            {
                return NotFound();
            }

            db.BookingRoom.Remove(bookingRoom);
            db.SaveChanges();

            return Ok(bookingRoom);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingRoomExists(int id)
        {
            return db.BookingRoom.Count(e => e.ID == id) > 0;
        }
    }
}