import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
ngOnInit(): void {
  this.api.getProduct().subscribe((data:any)=>{
    console.log(data.products);
    this.product=data.products
    
  })
}
product:any=[]
constructor (private api:ApiService) {
  
}
searchKey:string=''
search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value
  
}
}
