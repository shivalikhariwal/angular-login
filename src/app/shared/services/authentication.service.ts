import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  readonly rootUrl = "/users/login";
  constructor(private http: HttpClient) {}

  userAuthentication(username, password) {
    var data = { username, password };
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-urlencoded",
      "No-Auth": "True",
    });

    return this.http.post(this.rootUrl, data, {
      headers: reqHeader,
    });
  }
}
