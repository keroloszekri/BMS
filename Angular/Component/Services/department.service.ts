import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDepartment } from '../ViewModel/idepartment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBranch } from '../ViewModel/ibranch';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private HttpClientService: HttpClient) { }

  GetAll(): Observable<IBranch[]> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IBranch[]>(`${environment.API_URL}/api/Branches`));
    return this.HttpClientService.get<IBranch[]>(`${environment.API_URL}/api/Branches`, httpOption);
  }

  AddDepartment(Prd: IBranch): Observable<IBranch> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.post<IBranch>(`${environment.API_URL}/api/Branches`, Prd, httpOption)
  }

  getOneProduct(id: any): Observable<IBranch> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    console.log(this.HttpClientService.get<IBranch>(`${environment.API_URL}/api/Branches/${id}`, httpOption));
    return (this.HttpClientService.get<IBranch>(`${environment.API_URL}/api/Branches/${id}`, httpOption));
  }

  Edit(ID :number, Dept:IBranch): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.put(`${environment.API_URL}/api/Branches/${ID}`, Dept, httpOption).pipe();
  }

  Delete(ID :number): Observable<{}> {
    const httpOption =
    {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.HttpClientService.delete(`${environment.API_URL}/api/Branches/${ID}`, httpOption);
  }
}
