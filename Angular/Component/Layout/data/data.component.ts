import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';
import { environment } from 'src/environments/environment';
import { PassingService } from '../../Services/passing.service';
import { IBookingRoom } from '../../ViewModel/ibooking-room';
import { BookingRoomService } from '../../Services/booking-room.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  ListPeople: IBookingRoom[];
  person : IBookingRoom={ID:0 , ToDate:'' ,FromDate:'' ,RoomID:'',UserID:''};
  URL : string = `${environment.API_URL}`;
  TextSearch : string;
  constructor( private APIPerson : APIService ,private BookingService: BookingRoomService, private CartService : PassingService) 
  { 

  }

  ngOnInit(): void 
  {
    this.BookingService.GetAll().subscribe(
      (res) => {
        //console.log(res);
        this.ListPeople = res;
        console.log(this.ListPeople)
        
      },
      (err) => { console.log(err) });
  }

  GitOneProduct(ID : number) {
    this.BookingService.getOneProduct(ID).subscribe(
      (res) => { console.log(res); this.person=res },
      (err) => { console.log(err) }
    );
  }

}
