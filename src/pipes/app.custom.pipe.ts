import {Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:"filter"
})
export class CustomPipe implements PipeTransform{
transform(products:any ,name:any):any{
    console.log("hai");
if(name == undefined) return products
return products.filter(function(obj){
    return obj.productName.toLowerCase().includes(name.toLowerCase());
})

}
}