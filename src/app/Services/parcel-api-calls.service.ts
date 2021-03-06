import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../Models/parcel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ParcelApiCallsService {
  private apiUrl = 'https://post-service-app.herokuapp.com/api/parcels';

  constructor(private http: HttpClient) {}

  getParcels(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(this.apiUrl, httpOptions);
  }

  getFilteredParcels(value: string): Observable<Parcel[]> {
    let url = `${this.apiUrl}/?ParcelMachineId=${value}`;
    return this.http.get<Parcel[]>(url, httpOptions);
  }

  getParcelById(id: string): Observable<Parcel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Parcel>(url, httpOptions);
  }

  addParcel(newParcel: Parcel): Observable<any> {
    return this.http.post<any>(this.apiUrl, newParcel, httpOptions);
  }

  updateParcel(parcel: Parcel): Observable<any> {
    return this.http.put<any>(this.apiUrl, parcel, httpOptions);
  }

  deleteParcel(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
