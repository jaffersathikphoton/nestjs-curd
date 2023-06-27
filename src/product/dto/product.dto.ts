
import { Document } from 'mongoose';


export interface ProductDTO{
    product_id: number;
    name: string;
    description:string;
    price:number;
    manufacture:string;
    category:string; 
    expired:Date;
    status:boolean;
}