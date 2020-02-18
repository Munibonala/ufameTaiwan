import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  contactUs(data):Observable<any>{
    return this.http.post("https://ufamepcb.com/enquireus.php",data)
  }
  subscribe(email):Observable<any>{
    return this.http.post("https://ufamepcb.com/addsubscriber.php",email)
  }
}
