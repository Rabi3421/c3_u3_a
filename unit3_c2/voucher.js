let data = JSON.parse(localStorage.getItem("user")) || [];
// console.log(data[0].amount)
data.map(function(elem){
    let wallet = document.getElementById("wallet_balance");
    wallet.innerText = elem.wallet;
})
const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    // console.log(res);
    appendvoucher(res[0].vouchers)
})
.catch(function(err){
    console.log(err);
})

let voucher_list = document.getElementById("voucher_list");
function appendvoucher(data){
    data.map(function(el){
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");
        
        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.setAttribute("class","buy_voucher")
        btn.textContent = "Buy";
        btn.addEventListener("click",function(){
            addtopurchase(el);
        })
        div.append(img,name,price,btn)
        voucher_list.append(div)
    })
}
function addtopurchase(el){
    // alert(data.amount)
    if(data[0].wallet > el.price){
        let arr2 =  JSON.parse(localStorage.getItem("purchase")) || [];
        alert("Hurray! purchase successful");
        data[0].wallet = data[0].wallet - el.price;
        localStorage.setItem("user",JSON.stringify(data));
        function voucher(i,n,p){
            this.img = i;
            this.name = n;
            this.amount = p;
        }
        let p1 = new voucher(el.image,el.name,el.price)
        arr2.push(p1);
        localStorage.setItem("purchase",JSON.stringify(arr2));
        window.location.reload();
    }
    else{
        alert("Sorry! insufficient balance")
    }
}