let data = JSON.parse(localStorage.getItem("user")) || [];
let data2 = JSON.parse(localStorage.getItem("purchase")) || [];
data.map(function(elem){
    let wallet = document.getElementById("wallet_balance");
    wallet.innerText = elem.wallet;
    let wallet2 = document.getElementById("balance");
    wallet2.innerText = elem.wallet;
})
let purchased_vouchers = document.getElementById("purchased_vouchers");
data2.map(function(el){
    let div = document.createElement("div");
    div.setAttribute("class", "voucher");

    let img = document.createElement("img");
    img.src = el.img;

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.amount;

    div.append(img,name,price)
    purchased_vouchers.append(div)
})
