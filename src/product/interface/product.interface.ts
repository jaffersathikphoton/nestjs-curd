import { Document } from 'mongoose';

export interface Product extends Document{
    product_id: number;
    name: string;
    description:string;
    price:number;
    manufacture:string;
    category:string; 
    expired:Date;
    status:boolean;
}