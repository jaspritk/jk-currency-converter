import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  readonly apikey = '8DtAD25SG0MDbwYfaCETYHDheAWBZz39';
  headers = new HttpHeaders({ apikey: this.apikey });

  constructor(private http: HttpClient) {}

  ConvertCurrency(to: any, from: any, amount: any) {
    return this.http.get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      { headers: this.headers }
    );
  }

  CurrencySymbols() {
    return this.http.get(
      `https://api.apilayer.com/exchangerates_data/symbols`,
      { headers: this.headers }
    );
  }
}
