import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  baseUrl = 'http://dev-items.subdineapis.com/items' ;

    headers = new HttpHeaders({
      users_id: '23',
      // tslint:disable-next-line: max-line-length
      token: '1quOzEtlGvcORSv8esLtcVM6kmcRKGhcMrNgmwEUTeNoSn0ETJW5l7iGsUyYNGZ2GFgIFl8t3Yvs8p4nF0Yx8ceIASxIN8SbrGxKOtCv2Oa1uWPbxIb6qF2C8HpSKXqI1D9HyPyPDztIISnXuG4yeVNfFs2LPrCe34j9E6t7Lo5kCFXLNLi0UcW1WaUI0Rqs3OFvHpyn',

    });


  constructor(private http: HttpClient) { }

  test(testForm: any) {
    return this.http.post<any>(this.baseUrl, testForm, {headers: this.headers});
  }

}
