interface products{
    id:number,
    name:string
}
let arr:products[] = [{
    id:1,
    name:"Suresh"
},
{
    id:2,
    name:"Ramesh"
}]
 arr.push({
    id:3,
    name:"Rajesh"
 })
console.log(arr)