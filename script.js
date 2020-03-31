let count = parseFloat("32");
document.getElementById("result").textContent = count;
document.getElementById("result-type").textContent = typeof count;

let undefinedValue = undefined;
document.getElementById("undefined").textContent = undefinedValue;
document.getElementById("undefined-type").textContent = typeof undefinedValue;

let nullValue = null;
document.getElementById("null").textContent = nullValue;
document.getElementById("null-type").textContent = typeof nullValue;

let person = {
  firstName: "Tseng",
  lastName: "Shawn"
};
document.getElementById("person").textContent = person;
document.getElementById("person-type").textContent = typeof person;

document.getElementById("boolean").textContent = "boolean";
document.getElementById("boolean-falsy").textContent = false;

document.getElementById("number").textContent = "number";
document.getElementById("number-falsy").textContent = !!0;

document.getElementById("string").textContent = "string";
document.getElementById("string-falsy").textContent = !!"";

document.getElementById("null").textContent = "null";
document.getElementById("null-falsy").textContent = !!null;

document.getElementById("undefined").textContent = "undefined";
document.getElementById("undefined-falsy").textContent = !!undefined;

document.getElementById("NaN").textContent = "NaN";
document.getElementById("NaN-falsy").textContent = !!NaN;

console.log(this);
