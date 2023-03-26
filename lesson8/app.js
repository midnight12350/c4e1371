//mảng
//cachs khai báo
let names = [
    "chinh do",
    "ngoc trinh",
    "chi pu",
    "ngoc trinh",
    "dam vinh hung",
    "ngoc trinh",
    "chi pu",
];
// console.log(names);

// let numbers = [1,100,40,3,20];
// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;
// let features =[isRich,isHandsome,hasGirlfriend];
// isRich = true;
// truy xuất giá trị 1 phần từ bất kì trong mảng?
// console.log(names[1]);//lấy giá trị phần từ thứ 2 trong mảng
// console.log(names[0]);//lấy giá trị phần từ thứ 1 trong mảng
//thay đổi giá trị phần tử bất kì trong mảng?
// names[0]="hello world";
// names[4]="goodbye everyone"
// console.log(names);
// // console.log(features);
// let array1 =['a','b','c'];
// let array2 =['a','b','c'];
// let array3 = array1;
// //kiểm tra kiểu dữ liệu của mảng
// console.log(typeof(array1));
// console.log(array1 + array2);//ctrinh tự động ép kiểu mảng về string khi thực hiện phép cộng
// console.log(array1 == array2);
// console.log(array1 == array3);
// array1[0]="hello";
// console.log(array1,array2);

//hoán đổi giá trị 2 phần tử trong mảng
// let tmp = names[0];
// names[3] = names[0] ;
// names[3] = tmp;
// console.log(names);

//duyệt mảng 
//c1:for ... let i = 0 ...
// for(let i =0;i<names.length;i++){
//     let stt=i+1;
//     // console.log(stt +1+"." +names[i]);

//     let name = names[i];
//     if(name == 'ngoc trinh' || name == 'chi pu'){
//         console.log(stt + "." + name);
//     }
// }
// //c2:for...of
// let i =0;
// for (const name of names) {
//     // làm việc với name ở trong này  
//     i++
// // }

// const numbers = [1,7,8,-3,6,10,9];
// // //in ra số chẵn trong numbers
// for(let i =0;i<numbers.length;i++){
//     const number = numbers[i];
//     if(numbers[i]%2 == 0)console.log(numbers[i])
// }
// //tính tổng phần tử
// let sum =0;
// for(let i =0;i< numbers.length;i++){
//     const number = numbers[i];
//     sum += number;
//     //sum = sum + number;
//     // console.log(sum);
// }
// // tìm phẩn tử nhỏ nhất
// let min = numbers[0];
// for(let i =0;i< numbers.length;i++){
//     const number = numbers[i]; 
//     if(min> number) min = number;
// }
// // console.log(min);

// //thêm 3 số vào đầu mảng 
// numbers.unshift(100,1000,-4);
// // console.log(numbers);
// //thêm 3 số vào cuối mảng
// numbers.push(-9,10,50);
// console.log(numbers);
// //xóa 1 phần từ đầu tiên trong mảng
// let deletedFirstnumbers= numbers.shift();
// console.log("giá trị phần tử đầu tiên bị xóa:"+deletedFirstnumbers);
// //xóa 1 phần từ cuối mảng 
// let deletedLastnumbers = numbers.pop();
// console.log("giá trị phần tử cuối bị xóa:"+ deletedLastnumbers);
// //tìm hiểu phương thức splice()?

//quizz1:khai báo 1 mảng rỗng.nhập vào số n(n>0).hãy điền n số có gtri ngẫu nhiên vào trong mảng đó
// let arr = [];
// let n = Number(prompt('Nhap vao so n(n>0)'));
// for(let i =0;i<n;i++){
//     let randomNumber = Math.floor(Math.random()*n);
//     arr[i]= randomNumber;
// }
// console.log(arr);

//quizz2:2. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// let arr =[1,2];
// let n = Number(prompt('nhap vào n'));
// while(arr.length<n){    
// arr.unshift(0);
// }
// console.log(arr);
//quizz3:3. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// let arr = [1,2,6,9];
// while(arr.length>1){
//     arr.pop();
// }
// console.log(arr);

//bài 1:1. Khai báo 1 mảng gồm các số bất kỳ. 
// Tính tích của các phần tử trong mảng đó.
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
// Lọc ra các số nguyên tố trong mảng.
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
// https://www.geeksforgeeks.org/bubble-sort/

// //1.let myArray =  [1,2,3,4,5];
// let tich = 1;
// for(let i =0;i< myArray.length;i++){
//     tich=tich*myArray[i]
// }
// console.log(tich);
//2
// const numbers =[1,7,9,10,2,-10,8,4,-3];
// //tìm tất cả giá trị trong mảng chia hết cho 2
// //push tất cả số tìm được vào mảng numbersDivideBy2
// const numbersDivideBy2 = [];
// for(let i =0;i<numbers.length;i++);{
//     if (numbers[i] % 2 == 0) numbersDivideBy2.push(numbers[i]);
// }
// if(numbersDivideBy2.length == 0){
//     console.log('không có số nào trong numbers chia hết cho 2');
// }else{
//     //tìm gtri nhỏ nhất trong mảng numbersDivideBy2
//     let min = numbersDivideBy2[0];
//     for(let i=0;i<numbersDivideBy2.length;i++){
//         if(min>numbersDivideBy2[i]){
//             min = numbersDivideBy2[i];
//     }
// }
// console.log('giá trị nhỏ nhất chia hết cho 2 là:'+min);
// }

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
const numberssDivideBy3 = [];
for( let i= 0; i<numberss.length; i++) {
    if(numberss[i] %3==0) numberssDivideBy3.push(numberss[i])

}if(numberssDivideBy3.length==0) {
    console.log("không có số nào trong numbers chia hết cho 2")
}else  {
    let max = numberssDivideBy3[0];
    for (let i =0; i <numberssDivideBy3.length; i++) {
        if (max <numberssDivideBy3[i]) {
            max = numberssDivideBy3[i];
        }
        
    }
    console.log("Giá trị lớn nhất chia hết cho 3 là: " + max);
}

// Tính giá trị trung bình của mảng.

let length = numberss.length ; // tính độ dài mảng
//  console.log(length)

 let tong = 0;   // tính tổng của mảng

for (let i = 0; i <numberss.length ; i++) {
    tong = tong + numberss[i];
}
// console.log(tong)
let GTTB = tong / length
console.log("GIá trị trung bình của mảng là: " +GTTB)

//// Lọc ra các số nguyên tố trong mảng.




// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
const soNhohon10 = numberss.filter(element => element <10);
console.log(soNhohon10)


// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
const soLonhon20 = numberss.filter(element => element >20);
console.log(soLonhon20)

//Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
for(let i= length-1; i>0 ; i--) {
    for(let j=0; j<i ; j++) {
        if(numberss[j] > numberss[j +1]) {
            let tmp = numberss[j]
            numberss[j] = numberss[j +1] ;
            numberss[j +1] = tmp;

        }
    }
}

for( let i=0; i<length; i++) {
    console.log(numberss[i] )
}



