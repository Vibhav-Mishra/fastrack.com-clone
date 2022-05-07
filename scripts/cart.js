var mensData = JSON.parse(localStorage.getItem("mensData"));
var cartArr = JSON.parse(localStorage.getItem("CartItems"));
console.log(cartArr);

cartArr.map(function (data) {
    //console.log(data);
    var div = document.createElement("div");
    //img,name,price,strikedoffprice

    // image creation
    var image = document.createElement("img");
    image.setAttribute("src", data.image_url);

    // name creation

    var name = document.createElement("p");
    name.textContent = data.name;

    // price creation

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.textContent = data.price;

    div2.append(p1);

    div.append(image, name, div2);
      document.querySelector("#container").append(div);
    });

    var total = cartArr.reduce(function(acc,cv) {
        return acc+Number(cv.price)
    },0);

    document.querySelector("h2").textContent= `Total Amount is ₹ ${total}`
    
    console.log(total);