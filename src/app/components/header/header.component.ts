import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  totalNumber: number = 0;
  constructor(private cartApi:CartapiService){

  }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalNumber = res.length;
    })
  }

}
