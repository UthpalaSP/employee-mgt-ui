import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  //TODO
  baseApiUrl = "http://localhost:5000/api/employee/create";

  constructor(private http: HttpClient) {}

  upload(file): Observable<any> {
    const formData = new FormData();

    formData.append("file", file, file.name);

    let headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");

    const options = { headers: headers };

    return this.http.post(this.baseApiUrl, formData, options);
  }
}
