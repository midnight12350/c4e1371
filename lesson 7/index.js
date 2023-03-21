// let a ="hello"
// let b =10;
//nhập dữ liệu từ bàn phím và gán trị vừa nhập vào trong 1 biên
// let input = prompt("hãy nhập vào đây  để gán giá trị  cho biên 'input'");//dữ liệu kiểu string
// let x = Number(prompt("nhập số x")*1);
// let y = Number(prompt("nhập số y")*1);
// let z = x + y;
// console.log(z);
// console.log(input);

// let name = "chinh do";
// {
//     //bên trong 1 khối lệnh
//     let name = "someone else";
//     let age = 28;
//     {
//         let address ="thai binh";
//         //dung được ở chỗ này
//         //address chỉ tồn tại ở trong này
//     }
//     console.log(age);
    
// }
// console.log(age);//không tồn tai ở đây
// let age = prompt("nhập vào tuổi của bạn");
//nếu age <18 thì =))  k cho vào
//nếu age>=18 =>> vào thoải mái
// if (age<18){
//     console.log("không cho vào");
// }else{
//     console.log("vào thoải mái");
// }


//nhập vào phân loại của 1 thg hs :1.2.2
//nếu phân loại là 1 =>> thg này xứng đáng có 10 ny
//nếu phân loại là 2 =>>9,5đ
//nếu phân loại là 3 =>> cần cố gắng hơn
// let rank = prompt("nhập vào phân loại");
// if(rank == 1){
//     console.log('xứng đáng có 10 ny')
// } else if(rank ==2){
//     console.log('9,5d')
// }else if(rank==3){
//     console.log('cần cố gắng hơn')
// }else {
//     console.log('nhập đúng rank của bạn')
// }

// let text = prompt('nhập vào chuỗi');
// if(text.length <8){
//     console.log('chuỗi ngăn quá')  
// }else{
//     console.log('chuỗi này đc')
// }

//in ra dòng 'i love you' 500 lần,mỗi dòng có đánh số thư tự
// let sum=0;
// for (let count = 1; count <= 50; count++) {
//     sum += count;
// }
// console.log(sum)

// let num = 10;
// while(num >=6) {
//     console.log(num);
//     num = Math.floor(Math.random()*10);
// }

// let index = 1;
// while (index <= 200){
//     console.log(index);
//     index++
// }

// let s =prompt('chuỗi s');
// let l = prompt('số l');
// while(s.length<l){
//     s += 'a';
// }
// console.log(s);

// let x =prompt('nhập số x');
// let y = prompt('nhập só y');
// if(
//     x >= 0
//     && x < y
//     && y <=100
// )while(x<y){
//     x++;
//     y--;

//bài 1 in 1 dãy số nguyên từ 1 đến 500
// for(let num=1;num<=500;num++){
//     console.log(num)
// }
//bài 2 in ra các sô chia hết cho 2 và 3 từ 1 đến 300
// for(let i =1;i<=300;i++){
//     if(i%2 == 0 && i%3 ==0){
//         console.log(i)
//     }
// }
//bài 3 tính tổng  các số chẵn trong đoạn [-30,50]
// let x = 0
// for (let count= -30;count<=50;count++){
//     if(count %2==0){
//         x=x+count;
//     }
// }
// console.log(x)
//bài 4 nhập vào số n,tính giai thừa của số n
// let gt=1;
// let bai4 = prompt('nhap vào n');
// let tong =1 ;
// while(gt <=bai4){
//     tong = tong*gt
//     gt++
// }
// console.log(tong)
// //cách 2
// let res = 1;
// let n = Number(prompt('nhap vao n'));
// for(let i=1;i <=n;i++){
// res=res*i
// }
// console.log(res);
//bai 5 nhập vào 3 sô a,b,x(a<b).tìm trong khoảng  a,b số nhỏ nhât mà chia hết cho x
    // let a = Number(prompt('a'));
    // let b = Number(prompt('b'));
    // let x = Number(prompt('x'));
    // let res =null
    // for(let i =a;i<=b;i++){
    //     if(i%x ==0){
    //         res=i;
    //         break;
    //     }
    // }
    // console.log(res);
    //cách 2
    // let a = Number(prompt('a'));
    // let b = Number(prompt('b'));
    // let x = Number(prompt('x'));
    // let res =NaN;
    // let count=a;
    // while(count <=b && res%x !=0){
    //     if(count% x==0)res=count;
    //     count++;
    // }
    // console.log(res)
//bài 6 nhập vào số n(n>=2).hãy tính giá trị biểu thức sau:
// s=1/1.2+1/2.3+...+1/n.(n+1)
// let s = 0;
// let n =prompt('nhap n=');
// for(let i=1;i<=n;i++){
//     s+=1/(i*(i+1));
// }
// console.log(s)
//bài 7
// let n=prompt('nhâp số n')

// for(let x=1; x<=n; x++){
//     if(n % x ==0){
//         console.log(x)
//     }
// }
//bài 10
// let m =Number(prompt("Nhập số m"));
// let n =Number(prompt("Nhập số n"));
// if(
//     m > 0
//     && n > 0
// ) {
//     for(let x=1; x<=n && x<=m; x++)
//         if(n % x ==0 && m % x==0){
//           console.log(x)
//         }
        
// }   
//bài 8  
// let n=prompt('Nhập số n')
// if (n==1) {
//   console.log('n không phải là số nguyên tố')
// } else if (n==2) {
//   console.log('n là số nguyên tố')
// } else{
// for( let x =2 ;x<n; x++) {
//   if(n % x==0) {
//   console.log('n không phải là số nguyên tố')
//   }else if (n %3==0) {
//     console.log('n không phải là số nguyên tố')
//   }else {
//     console.log('n là số nguyên tố')
//   }
//   break;
// }
// } 

















































