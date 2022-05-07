
var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];


displayData(mensData);

  function filterCat() {
    var selected = document.querySelector("#brandFilter").value;
    console.log(selected);

    var filteredList = mensData.filter(function (elem) {
      return elem.brandName == selected;
    });

    console.log(filteredList);
    displayData(filteredList);
  }

  function handlePriceSort() {
    var selected = document.querySelector("#priceSort").value;
    //console.log(selected);
    if (selected == "high") {
      //descending
      mensData.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (selected == "low") {
      //ascending
      mensData.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }

    console.log(mensData);
    displayData(mensData);
  }

  function displayData(mensData) {
    document.querySelector("#container").innerHTML = "";









mensData.map(function (data) {
  
  var div = document.createElement("div");
  //img,name,price,

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

  // add to cart button creation

  var btn = document.createElement("button");
  btn.textContent = "Add To Cart";
  btn.style.color='green';
  btn.style.border='0';
  
  btn.addEventListener("click", function () {
    addToCart(data);
  });

  //append
  div.append(image, name, div2, btn);
  document.querySelector("#container").append(div);

});
  }
  function addToCart(data) {
    console.log(data, "data");
    cartArr.push(data);
    localStorage.setItem("CartItems", JSON.stringify(cartArr));
    alert("added successfully");
  }
