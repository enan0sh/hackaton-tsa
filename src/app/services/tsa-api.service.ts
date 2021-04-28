import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TsaAPIService {

  // API_KEY = '1';

  constructor(private httpClient: HttpClient) { }

  public getTSACheckpoint() {
    return this.httpClient.get('http://localhost:8080/parser');
  }

}
