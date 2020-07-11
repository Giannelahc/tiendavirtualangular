import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Service} from "../../services/service"
import { OrderItemInternet } from 'src/app/models/orderItemInternet';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  private title = "Crear orden";
  public status : boolean;
  public order : Order;
  public orderitem : OrderItemInternet;

  constructor(private orderService : Service) {
    this.order = new Order();
    this.orderitem = new OrderItemInternet();
    this.orderitem.type = "orderiteminternet";
    this.orderitem.idProduct = "P001";
    this.orderitem.quantity = 1;
    this.orderitem.price = 150;
   }
  
  ngOnInit(): void {
  }

  onSubmit(formu){
    this.order.orderItems = this.orderitem;
    this.orderService.saveProject(this.order).subscribe(
      response => {
        console.log(response);
        formu.reset();
        this.status = true;
        /*if(response.order){
          console.log(response);
          formu.reset();
          this.status = true;
        }*/

      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
