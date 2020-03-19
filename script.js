let welcome = "Hello World!!!",
  price = 49.99,
  discounted = false;

document.getElementById("title").textContent = welcome;
document.getElementById("price").textContent = price;
document.getElementById("discount").textContent = discounted;

var result = typeof price;
// result = typeof welcome;

document.getElementById("result").textContent = price++;
console.log(price);
