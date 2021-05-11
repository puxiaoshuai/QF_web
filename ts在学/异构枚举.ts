enum PH{
    A,
    B,
    C="XXX"
}
console.log(PH.A);
console.log(PH.C);
interface IPerson{
    name:string,
    age:number
}
const person1:IPerson={"name":"111",age:23}
type newp=typeof person1




