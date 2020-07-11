import { IOrderItems } from "./interfaceOrderItems";

export class OrderItemInternet implements IOrderItems{
    public type : string;
    public idProduct : String;
    public quantity : number;
    public price : number;
}