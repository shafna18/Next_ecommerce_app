import { servicebase } from "./Product.services.base";

  export class productservices extends servicebase {
    static getproduct = async () => {
        const productres = await fetch(this.geturl('/products'),{
          cache:'no-store'
        });
         const responec = await productres.json();
        return responec;
     
    }

    static getproductbyid = async ( id:number) => {
        const productres = await fetch(this.geturl('/products/' + id));
        const responenc = await productres.json();
       return responenc;
    
    }
}