document.body.innerHTML = "<h1>Homework 22_9</h1>";
//Bai1
console.warn("Bai1");
let age = "18";
console.log("Tôi năm nay", age, "tuổi");

//Bai2
console.warn("Bai2");
let PI = 3.14159;
let r = 5;
let circleAcreage = PI * r ** 2;
console.log("Diện tích hình tròn bán kính", r, "là", circleAcreage);

//Bai3
console.warn("Bai3");
let a = 7;
let b = 3;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;

console.log("a =", a);
console.log("b =", b);
console.log("Tổng =", addition);
console.log("Hiệu =", subtraction);
console.log("Tích =", multiplication);
console.log("Thương =", division);
console.log("Dư =", remainder);

//Bai4
console.warn("Bai4");
let name = "";
let defaultName = "Khách";
let displayName = name || defaultName;
console.log(displayName);

//Bai5
console.warn("Bai5");
let Age = 18;
let hasLicense = (Age >= 18 && "Đủ điều kiện") || "Không đủ điều kiện";
console.log(hasLicense);

//Bai6
console.warn("Bai6");
let username = "";
let password = "";
let checkInput = !username && !password;
console.log(checkInput);

//Bai7
console.warn("Bai7");
let salePrice = 14000;
let discountRate = 1 - 30 / 100;
let price = salePrice / discountRate;
console.log("salePrice:", salePrice);
console.log("discountRate:", discountRate);
console.log("price:", price);

//Bai8
console.warn("Bai8");
let c;
let d;
c = 10;
d = 20;
console.log("c =", c);
console.log("d =", d);
