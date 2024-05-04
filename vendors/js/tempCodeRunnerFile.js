var str = "we ARE hKteam";
str = str.toLowerCase();
console.log(`Chuỗi ban đầu là: ${str}`);
for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] == " ") {
    str = str.replace(str[i], str[i].toUpperCase());
  }
  if (i == str.length) {
    if (str[i] != ".") {
      str += ".";
    }
  }
}
console.log(`Chuỗi sau khi xử lý là: ${str}`);
