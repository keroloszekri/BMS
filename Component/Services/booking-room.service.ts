import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBookingRoom } from '../ViewModel/ibooking-room';

@Injectable({
  providedIn: 'root'
})
export class BookingRoomService {

  constructor(private HttpClientService: HttpClient) { }

  GetAll(): Observable<IBookingRoom[]> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IBookingRoom[]>(`${environment.API_URL}/api/BookingRooms`));
    return this.HttpClientService.get<IBookingRoom[]>(`${environment.API_URL}/api/BookingRooms`, httpOption);
  }

  AddDepartment(Prd: IBookingRoom): Observable<IBookingRoom> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.post<IBookingRoom>(`${environment.API_URL}/api/BookingRooms`, Prd, httpOption)
  }

  getOneProduct(id: any): Observable<IBookingRoom> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IBookingRoom>(`${environment.API_URL}/api/BookingRooms/${id}`, httpOption));
    return (this.HttpClientService.get<IBookingRoom>(`${environment.API_URL}/api/BookingRooms/${id}`, httpOption));
  }

  Edit(ID: number, Dept: IBookingRoom): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.put(`${environment.API_URL}/api/BookingRooms/${ID}`, Dept, httpOption).pipe();
  }

  Delete(ID: number): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.delete(`${environment.API_URL}/api/BookingRooms/${ID}`, httpOption);
  }
}
