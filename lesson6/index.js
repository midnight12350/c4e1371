// console.log("welcome the javascript");
// console.log("hello");
// console.log("this is test text ");
// console.error("đây là 1 lỗi");
// console.warn("đây là cảnh báo"); 
// //tên biến chỉ bắt đầu bằng chữ cái hoặc"_", hoặc "$""
// //trong đặt tên biến có thể dùng số
// let name;  // khai báo biến
// name = "giá trị mới của name"; //gán giá trị cho biến
// name = "hello this is something";
// console.log(name);//hiển thị giá trị của biến name lên màn hình console
// let age = 10; //khai báo và gán giá trị cho biến
// const hello ="cần lao vi tiên thủ";// hăng số:k thể thay đôi giá trị

// console.log(hello);
// let something ="a";// 2 biến trùng nhau thì báo lỗi
//kiểu số (thực hiện các phép toán số học)
// let age = 28;
// let weight = 71;
// let height = 170;
// let breast1 = 90;
// //kiểu chuỗi (string)(thực hiện với thao tác cơ bản)
// let slogan = "cần lao vi tiên thủ,vô vi thực..";
// let name ="chinh dỗ";
// let address = "thai binh";
// let phone = "+84 4250148";
//kiểu boolean  
let hasGirlfriend = false;
let isHandsome = true;
let isRich = false;
//kiểu null
let girlfriend = null;
let money = null;
//kiểu underfined 
// x
let x =true;
let y =true;
let z =false;
console.log(x && y && z) //t+t+f=false
console.log(x && y && !z)//t+t+t=true
console.log((x &&y) || z)//(t+T)||false=true
console.log((x && y) || !z)
console.log(x && (y|| z))
console.log(x && !(y || z))
console.log(x && (y || !z))
console.log(x && (!y || z))

let name ='aaa';
let age = 20;
let isGood = true;
console.log(age + 10);//30
console.log(age % 3);//2    
console.log(name + 'bbb')//aaabbb
console.log(!isGood);//false
console.log(name == 'aaa' && age >=20)//fale
console.log(name != 'aaa'&& isGood)//true
console.log(!(age < 10) && !isGood)//false

// let a = 10;
// let b = 20;
// let c =30;
// let d ='40';
// console.log(a + b + c)//10+20+30=60
// console.log(a - b / c)//10-20/30=9.33
// console.log(a - (b * c))//10-(20+30)=-590
// console.log(d - (a * b) - c )//'40'-(10+20)=40-200-30=-190
// console.log(a + b + c + d)//10+20+30+'40'=60='40'=6040
// console.log(d + a + b + c)//'40'+10+20+30='4010"+20+30=40102030
// console.log(d + a - b + c )//'40+10-20+30='4010'-20+30=4020
// console.log(a - b + d - c )//10-20+'40'-30=-10+'40'-30='-1040'-30=-1070
// console.log(d - c + a - b )//'40'-30-10-20=0
// console.log(a * b + d * c)//1400
let a =1;
let b= '2';
let c= 3;
let d = "4";
console.log(b+d)//24
console.log(a+b+c+d )//1234
console.log(a-b+c-d)//-2
console.log(a-b-c+d)//-44
console.log((b+d)-(a+c))//20
console.log((a+b)-(c+d))//12-34=-22
console.log(a*c+b*d)//3+8=11
console.log(-b+d)//-24
console.log(-b-d)//-6
console.log(-(b+d))//-24
