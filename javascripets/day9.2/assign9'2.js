//p1
{
    let arr =[1,2,3,4,5,6,7,8,9,10];
    let sumOfEvens = arr.reduce((total, num)=>{
        return num % 2 === 0 ? total + num : total;
    },0);    
    console.log("Sum of even numbers:", sumOfEvens);
}
//p2
{
    let arrOfProducts =[
        {name:"laptop",price:45000},
        {name:"phone",price:25000},
        {name:"tablet",price:15000},
        {name:"monitor",price:100000}
    ];
    let mostExpensiveone = arrOfProducts.reduce((prev, curre) =>{
        if (prev.price > curre.price){
            return prev;
        }
        return curre;
    });
    console.log("most expensive product:", mostExpensiveone);
}
//p3
{
    ``
}
