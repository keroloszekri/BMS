import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IJob } from '../ViewModel/ijob';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRoom } from '../ViewModel/iroom';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private HttpClientService: HttpClient) { }

  GetAll(): Observable<IRoom[]> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IRoom[]>(`${environment.API_URL}/api/Rooms`));
    return this.HttpClientService.get<IRoom[]>(`${environment.API_URL}/api/Rooms`, httpOption);
  }

  AddJob(Prd: IRoom): Observable<IRoom> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.post<IRoom>(`${environment.API_URL}/api/Rooms`, Prd, httpOption)
  }

  getOneProduct(id: any): Observable<IRoom> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IRoom>(`${environment.API_URL}/api/Rooms/${id}`, httpOption));
    return (this.HttpClientService.get<IRoom>(`${environment.API_URL}/api/Rooms/${id}`, httpOption));
  }

  Edit(ID: number, Dept: IRoom): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.put(`${environment.API_URL}/api/Rooms/${ID}`, Dept, httpOption).pipe();
  }

  Delete(ID: number): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.delete(`${environment.API_URL}/api/Rooms/${ID}`, httpOption);
  }
}
