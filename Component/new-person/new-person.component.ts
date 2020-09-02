import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../Services/api.service';
import { DepartmentService } from '../Services/department.service';
import { JobService } from '../Services/job.service';
import { IRoom } from '../ViewModel/iroom';
import { IBookingRoom } from '../ViewModel/ibooking-room';
import { BookingRoomService } from '../Services/booking-room.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  InsertForm: FormGroup;
  ListDepartment: IBookingRoom[];
  ListJob: IRoom[];
  constructor(private BookingRoom: BookingRoomService, private PersonService: APIService, private fb: FormBuilder, private DepartmentService: DepartmentService, private JobService: JobService)
  {
    this.newDept = {
      RoomID: '',
      FromDate: '',
      ToDate :''
    }
   }
  newDept: IBookingRoom;

  ngOnInit(): void 
  {
    this.InsertForm = this.fb.group(
      {
        RoomID: ['', [Validators.required]],
        FromDate: ['', [Validators.required]],
        ToDate: ['', [Validators.required]],
      }
    );

    this.JobService.GetAll().subscribe(
      (res) => {
        //console.log(res);
        this.ListJob = res;
        console.log(this.ListJob)
      },
      (err) => { console.log(err) });
    

    this.BookingRoom.GetAll().subscribe(
      (res) => {
        //console.log(res);
        this.ListDepartment = res;
        console.log(this.ListDepartment)
      },
      (err) => { console.log(err) });

  }

  Add() {
    console.log(this.InsertForm.controls['RoomID'].value);
    this.newDept.RoomID = this.InsertForm.controls['RoomID'].value;
    this.newDept.FromDate = this.InsertForm.controls['FromDate'].value;
    this.newDept.ToDate = this.InsertForm.controls['ToDate'].value;

    this.BookingRoom.AddDepartment(this.newDept).subscribe(
      res => { this.newDept = res; this.ListDepartment.push(this.newDept) },
      err => console.log(err)
    )
  }

}
