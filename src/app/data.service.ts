import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "http://localhost:3000";
  
  constructor(private httpClient : HttpClient) { }

  public get_products(){
    return this.httpClient.get<Product[]>(this.baseUrl + '/products');
  }

  get_families(){
      return this.httpClient.get<Family[]>(this.baseUrl + '/families');
  }

  get_locations(){
      return this.httpClient.get<Location[]>(this.baseUrl + '/locations');
  }

  get_transactions(){
      return this.httpClient.get<Transaction[]>(this.baseUrl + '/transactions');
  }

}
