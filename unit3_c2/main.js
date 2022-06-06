let data = document.getElementsByTagName("form");

let arr =[];
function storedata(){
    
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
    let user1 = new user(name,email,address,amount);
    arr.push(user1);
    localStorage.setItem("user",JSON.stringify(arr));
    document.getElementById("name").value =null
    document.getElementById("email").value =null
    document.getElementById("address").value =null
    document.getElementById("amount").value =null
}

function user(n,e,a,p){
    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = p;
}