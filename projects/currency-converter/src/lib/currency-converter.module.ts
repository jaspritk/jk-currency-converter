import { NgModule } from '@angular/core';
import { CurrencyConverterComponent } from './currency-converter.component';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  exports: [CurrencyConverterComponent],
})
export class CurrencyConverterModule {}
