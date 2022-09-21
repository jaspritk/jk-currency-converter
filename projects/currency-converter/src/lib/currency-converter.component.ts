import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyConverterService } from './currency-converter.service';

@Component({
  selector: 'jk-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  currencies: any = [];
  currencyArray: any = [];
  symbol: any = [];
  symbolName: any = [];
  convertedCurrency: any;

  currencyForm = new FormGroup({
    fromUnit: new FormControl(1, Validators.required),
    fromCurrency: new FormControl(0, Validators.required),
    toUnit: new FormControl({ value: '', disabled: true }),
    toCurrency: new FormControl(0, Validators.required),
  });

  constructor(private _cs: CurrencyConverterService) {}

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  convert() {
    this._cs
      .ConvertCurrency(
        this.currencyForm.value.toCurrency,
        this.currencyForm.value.fromCurrency,
        this.currencyForm.value.fromUnit
      )
      .subscribe((response: any) => {
        console.log(response);
        this.convertedCurrency = response.result;
      });

    this.currencyForm.patchValue({
      toUnit: this.convertedCurrency,
    });
  }

  getAllCurrencies() {
    this._cs.CurrencySymbols().subscribe((response: any) => {
      this.currencies = response.symbols;
      this.symbol = Object.keys(this.currencies);
    });
  }
}
