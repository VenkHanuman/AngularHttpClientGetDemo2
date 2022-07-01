import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products :  Product[]  = []; 
  families : Family[] = [];
  locations :  Location[] = [];
  transactions : Transaction[] = [];

  title = 'AngularHttpClientGetDemo2';

  productsObservable : Observable<Product[]>; 

  constructor(private dataService: DataService) {

    // this.productsObservable = [];
    this.productsObservable = dataService.get_products();

    this.dataService.get_families().subscribe((res : Family[])=>{
        this.families = res;
    });
    this.dataService.get_locations().subscribe((res : Location[])=>{
        console.log(res);
        this.locations = res;
    });
    this.dataService.get_transactions().subscribe((res : Transaction[])=>{
        console.log(res);
        this.transactions = res;
    });    
  }

  public get_products(){
    return this.productsObservable;
  }

  public get_families() {
    return this.families;
  }

  get_locations(){
    return this.locations;
  }

  get_transactions(){
    return this.transactions
  }
}

