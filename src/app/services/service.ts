import {Injectable} from "@angular/core"
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Order} from "../models/order"
import {Observable} from 'rxjs';

@Injectable()
export class Service{
    public url : string = "http://localhost:7000/api/order";

    constructor(private http : HttpClient){}

    saveProject(order:Order): Observable<any>{
        let params= JSON.stringify(order);
        let header= new HttpHeaders().set('Content-Type','application/json');
        return this.http.post(this.url,params,{headers:header});
    }
}