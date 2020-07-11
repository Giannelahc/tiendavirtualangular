import { OrderItemInternet } from "./orderItemInternet";

export class Order {
    id : string;
    address : string;
    amount : number;
    courier : string;
    discount : number;c
    orderItems : Array<OrderItemInternet>;
}