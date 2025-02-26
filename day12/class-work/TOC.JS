let form= document.getElementById("userform");
form.addEventListener("submit",(e)=>{
    // console.log(e)
    e.preventDefault();
   let FullNAme=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    // console.log(FullNAme,email)
    let obj={
    FullNAme,email 
    }
    console.log(obj);
})