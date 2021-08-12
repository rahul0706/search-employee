import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moment } from "moment";

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {
    
    private baseUrl = 'http://localhost:8080/api/employees';

    constructor(private http: HttpClient) { }

    searchEmployees(name: string, startDate: Moment, endDate: Moment): Observable<Employee[]> { 
        let params = new HttpParams();
        params = params.set('name', name);
        if(startDate){
            params =params.set('startDate', startDate.toString());
        }
        if(endDate){
            params =params.set('endDate', endDate.toString());
        }
        return this.http.get<Employee[]>(`${this.baseUrl}`+`/search`,{params});
    }
}