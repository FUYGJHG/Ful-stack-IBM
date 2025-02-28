//foreach
let arr=[1,2,3,4,5,6,7,8,9,"priti",10,11,12,"soumay",13,14,15,16]
let output=arr.forEach((el,index)=>{
    console.log(el,index)
    return el


})
console.log(output)

//map
let ouptput2=arr.map((el,index)=>{
    return el*2;
})
console.log(ouptput2)

//filter

let output3=arr.filter((el,index)=>{//filter can find any el over statement
    // return el%2===0
    return typeof el !=="string"&& el%2==0;
}).map((el,index)=>{
     return el**2;
})
console.log(output3)

//reduce
let arrs=[1,2,3,4,5,6,7,8,9,,10,11,12,,13,14,15,16]

let output4=arrs.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
},0)//acc o ko 0+1 karega amd so on.. and acc kuch bhi ho sakta ha
console.log(output4)

 let arr2=[1,2,3,4,5,6,7,8,9,,10,11,12,,13,14,15,16,17,"prit",18,19,"sudarsan",20]
 let output5=arr2.filter((el,index)=>{//phele reduce higher order funtion nhi laga sakta ha 
    return el%3==0 && el%5!=0;
 }).map((el,index)=>{
     return el+3;
 })
 console.log(output5)

 let ans=arr2.sort((a,b)=>{ return b-a});//agar brsae nhi lagta ha to srif b-a karne p sort ho jayga
 console.log(ans)
 let data=[
    {name:"phone",price:2000,rating:2},
    {name:"watch",price:2500,rating:4},
    {name:"car",price:3000,rating:3},
    {name:"earphone",price:1500,rating:5},
    
 ]
 let ans1=data.sort((a,b)=>{ return b.rating-a.rating});
 console.log(ans1);
 
 let ans2=data.sort((a,b)=>{
    if(a.name>b.name){
        return -1;
    }
    if(a.name<b.name){
        return 1;
    }
 });
 console.log(ans2);
 data.sort((a,b)=>a.name.localeCompare(b.name) );
 console.log(data);



