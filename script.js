let count = parseFloat("32");
document.getElementById("result").textContent = count;
document.getElementById("result-type").textContent = typeof count;

let undefinedValue = undefined;
document.getElementById("undefined").textContent = undefinedValue;
document.getElementById("undefined-type").textContent = typeof undefinedValue;

let nullValue = null;
document.getElementById("null").textContent = nullValue;
document.getElementById("null-type").textContent = typeof nullValue;

console.log(this);
