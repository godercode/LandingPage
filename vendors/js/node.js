// Let là biến cục bộ
// Var là biến toàn cục
// js có phân biệt hoa thường
/*&AND trả về 1 nếu cả 2 bit đều là 1 
|OR trả về 1 nếu 1 trong 2 bit là 1
^XOR trả về 1 nếu 2 bit lệch nhau
~NOT tác dụng trược tiếp lên dãy bit chuyển 1 thành 0 và 0 thành 1
<< dịch chuỗi
đặt dấu + trước một biến nào đó để nó biến thành số 

Number.isIntenger(<value>) xác định giá trị truyền vào có phải một số nguyên hay không
<Number>to.Exponential(<fractionDigits>) sẽ lấy số số chữ số sau dấu phẩy của số thập phân với fractionDigits là số lượng chữ số được lấy sau dấu phẩy
    VD var a=123.1236574
    a.toExponential();
    1.231236574e+2
    a.toExponential(3);
    1.231e+2
<Number>.toFixed(<digits>) làm tròn và lấy <digits> số ở phần thập phân, giá trị trả về cugx là một chuỗi. Theo mặc định, nếu không được người dùng xác dịn, d=thì <digits> bằng 0;
    vd var a=123.1236574;
    a.toFixed(5);
    123.12366
    a.toFixed();
    123
Number.parseFloat(<string>) 
    Number.parseFloat("12.123tf")
    123.12
    Number.parserFloat(".12.123tf")
    0.12
Number.parseInt(<string>,<radix>)  
    Numer.parseInt("55.55123") 
    55
    Number.parseInt("55e12312312")
    55
    Number.parseInt("1001",2)
    9
    Number.parseInt("15ff",16)
    5631
Math object trong JS
    math.cbrt() trả về căn bậc 3
    math.max() trả về số lớn nhất
*/
// Template literals trong string cho phép cho nhay đơn nháy kép vào trong chuỗi cho phép thêm biểu thức vào trong chuỗi cho phép xuống dòng trong chuỗi
// cách dùng var a=`hiiiii $sum{1+2}`;
// var str = "Chuối, Cam, Táo, Xoài";
// var str2 = str.split(",");
// for (let x in str2) {
//   str2[x] = str2[x].trim();
//   console.log(`Bạn đã lựa chọn: ${str2[x]}`);
// }
// Mối liên hệ giữa String và Number
// chỉ có phép cộng là phép nối chuỗi còn các phép còn lại sử dụng như các phép tính toán bình thường
/*Cca phương thức với chuỗi trong JS
vả s='Kteam';
s.charAt(0);
console.log(s);
    K
s.includes('t',3) xem thử từ vị trí thứ bao nhiêu có chữ nào đó xuất hiện không?
nếu không truyền vào position thì mặc định là 0;
s.startsWith('t',0) từ vị trí tứ ? có bắt đầu bằng chữ ? không.
s.endsWith('m',) same
s.indexOf('t',2) trả về vị trí đầu tiên mà chữ đó xuất hiện từ ví trí chỉ định
s.lastIndexOf('t',2); kiếm ngược lại từ đầu lên vị trí chỉ định.
s.toUpperCase() viết hoa chuỗi
s.repeat(5); lặp lại chuỗi
s.padStart(10,'How') chén chuỗi mới đẻ sao cho độ dài chuỗi mới đạt độ dài chỉ định
padEnd tương tự
s.trim() cắt khoảng trắng
s.split('t', 1) cắt chuỗi theo chỉ định, số luọng chuỗi lấy
s.replace('t', 'T') tháy thế từ hoặc cụm từ trong chuỗi  
s.slice(1,3) cắt chuỗi lấy từ vị trí chỉ định đến chỉ định 
s.substring(1,4) giống slice nhưng không chấp nhận số âm
s.substr(1,2); lấy từ vị trí chỉ định thêm ? phần tử 

ternary operator là câu lệnh điều kiện gồm cấu trúc if else đơn giản ví dụ
var f=0;
f<0 ? console.log('f nhỏ hơn 0'):console.log('f lớn hơn 0')
*/

// var f = -16;
// f < 0 ? console.log("f nhỏ hơn 0") : console.log("f lớn hơn 0");
// Constructor Function

// Print = Function("a", "b", "console.log(`tong la: ${a+b}`)");
// Print(5, 8);
// var str = "we ARE hKteam";
// str = str.toLowerCase();
// console.log(`Chuỗi ban đầu là: ${str}`);
// for (let i = 0; i < str.length; i++) {
//   if (i == 0 || str[i - 1] == " ") {
//     str = str.replace(str[i], str[i].toUpperCase());
//   }
//   if (i == str.length - 1) {
//     if (str[i] != ".") {
//       str += ".";
//     }
//   }
// }
// console.log(`Chuỗi sau khi xử lý là: ${str}`);
// interable là các kiểu dữ liệu có thể xé nhỏ
//     string có thể xé nhỏ thành các charater
// array function là cách rút gọn của 1 function
//     print=()=>{
//         console.log("Hello world!");
//     }
// generator là function
//  function* g(){
//     yield '1';
//     yield 2;
//     yield '3';
//  }
// Recursion đệ quy là một hàm gọi lại chính nó
// ví dụ
//     tính tổng các số trong đoạn[1..n] bằng đệ quy
//     sửa dụng vòng lặp
//     n=10;
//     sum=0;
//         for(let i=1; i<n; i++ ){
//             sum+=i;
//         }
//     sử dụng đệ quy
// var n = 10;
// function sumN(n) {
//   if (n <= 0) return 0;
//   return sumN(n - 1) + n;

// }

// console.log(sumN(n));
// n = 2
// k = 3;
// function mul(n, k) {
//   if (k == 0) {
//     return 1;
//   }
//   return mul(n, k - 1) * n;
// }
// console.log(mul(n, k));
// function checkSo(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       console.log(`${n} không phái số nguyên tố`);
//       break;
//     } else {
//       console.log(`${n} là số nguyên tố`);
//       break;
//     }
//   }
// }
// checkSo = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       console.log(`${n} không phái số nguyên tố`);
//       break;
//     } else {
//       console.log(`${n} là số nguyên tố`);
//       break;
//     }
//   }
// };
// checkSo(13);
//Array.forEach(<func>,<thisArg>):Tác dụng duyệt qua các phần tử của array và đưa nó vào hàm
// arr = [12, 3, 5];
// sum = 0;
// arr.forEach((num) => (sum += num));
// console.log(sum);
//Array.every(<func>,<thisArg>): tác dụng kiểm tra các phần tử của array khi đưa vào func có trả về giá trị đúng hay không
// func = (number) => number >= 12;
// arr = [12, 13, 14];
// console.log(arr.every(func));
//Array.filter(<func>,<thisArg>): Tác dụng lấy ra các phần tử đạt yêu cầu của func
// names = ["An", "Hoa", "Teo", "Tun", "Le", "Thanh"];
// console.log(names.filter((name) => name.length >= 3));
// console.log(names.filter((name) => name > "Phong"));
// Array.find(<func>,<thisArg>): Tác dụng trả về giá trị đầu tiên được tìm thấy thỏa mãn func
arr = [24, 10, 6];
s = arr.find((n) => n < 10);
console.log(s);
//Array.findIndex giống find nhưng giá trị trả về là chỉ số của phần từ đầu tiên thoar mãn yêu cầu của func
// Array.some(func, thisArg): tác dụng trả về true nếu bất kỳ ptu nào của array thỏa mãn func
// arr = [1, 2, 3]
// // [ 1, 2, 3 ]
// arr.some((n) => n % 2 == 0)
// // true
// arr.some((n) => n % 4 == 0)
// // false
// arr.some((n) => 0)
//Array.map(func,thisArg): Tác dụng thực hiện thêm tất cả các phần tử thỏa mãn điều kiện của func vào một array mới
arr = [2, 4, 6];

console.log(arr.map((a) => a % 2 == 0));

console.log(arr.map((a) => a ** 2));
