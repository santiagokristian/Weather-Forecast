import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpClientBase {

    constructor(private http: HttpClient,) {

    }

    createAuthorizationHeader(headers: HttpHeaders, withToken: boolean) {
        headers.append('Content-Type', 'application/json');
        if (withToken)
            headers.append('Authorization', 'Bearer ');
    }

    getBase(url: string, withToken: boolean) {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers, withToken);
        return this.http.get(url, {
            headers: headers
        });
    }

}