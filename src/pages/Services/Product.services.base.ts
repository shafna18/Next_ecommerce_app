export  abstract class  servicebase {
    static   api_url = 'https://fakestoreapi.com';
 
 
     static geturl(path:string) {
         return `${this.api_url}${path}`;
     }
 }