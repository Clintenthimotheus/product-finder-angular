import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  constructor(private activeroute:ActivatedRoute, private api:ApiService){}
  productId:string=''
  product:any=[]
  ngOnInit(): void {
    this.activeroute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.productId=data.id

      this.api.viewProductDetails(this.productId).subscribe((result:any)=>{
        console.log(result);

        this.product=result
      })

      
    })
  }

}
