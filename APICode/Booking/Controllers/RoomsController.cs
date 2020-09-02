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

namespace AddressBook.Controllers
{
    public class RoomsController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Rooms
        public List<Roomdto> GetRoom()
        {
            List<Roomdto> RoomListdto = new List<Roomdto>();
            foreach (var item in db.Room)
            {
                Roomdto dto = new Roomdto();
                dto.ID = item.ID;
                dto.Number = item.Number;
                dto.Description = item.Description;
                dto.Floor = item.Floor;
                dto.RoomTypeID = item.RoomTypeID;
                dto.Number = item.BranchID;

                RoomListdto.Add(dto);
            }
            return RoomListdto;
        }

        // GET: api/Rooms/5
        [ResponseType(typeof(Room))]
        public IHttpActionResult GetRoom(int id)
        {
            Room room = db.Room.Find(id);
            if (room == null)
            {
                return NotFound();
            }

            Roomdto dto = new Roomdto();
            dto.ID = room.ID;
            dto.Number = room.Number;
            dto.Description = room.Description;
            dto.Floor = room.Floor;
            dto.RoomTypeID = room.Type.ID;
            dto.Number = room.Branch.ID;

            return Ok(dto);
        }

        // PUT: api/Rooms/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoom(int id, Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != room.ID)
            {
                return BadRequest();
            }

            db.Entry(room).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomExists(id))
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

        // POST: api/Rooms
        [ResponseType(typeof(Room))]
        public IHttpActionResult PostRoom(Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Room.Add(room);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = room.ID }, room);
        }

        // DELETE: api/Rooms/5
        [ResponseType(typeof(Room))]
        public IHttpActionResult DeleteRoom(int id)
        {
            Room room = db.Room.Find(id);
            if (room == null)
            {
                return NotFound();
            }

            db.Room.Remove(room);
            db.SaveChanges();

            return Ok(room);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomExists(int id)
        {
            return db.Room.Count(e => e.ID == id) > 0;
        }
    }
}