import { IOrderItems } from "./interfaceOrderItems";

export class OrderItemInternet implements IOrderItems{
    private type : string;
    private quantity : number;
    private price : number;
}