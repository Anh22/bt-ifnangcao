// Bài 6: Giải phương trình bậc 1
// let n = prompt('Nhập vào một so');
// let m= prompt('Nập vaào một so')
// if(n!=0){
//     if (m!=0){
//         alert('Phương trình có nghiệm là'+ -n/m)}
// }
// else{
//     alert('Phương trình vô nghệm')
// }
//
// if(n==0){
//     if(m==0){
//         alert('Phương trình có vô số nghiệm')
//     }
//     else {
//         alert('Phường trình vô nghiệm')
//     }
//
// }

// Bài 7: Giải phương trình bậc 2.
// let a = prompt('Nhập vào a');
// let b = prompt('Nhập vào b');
// let c = prompt('Nhập vào c');
// let denta = b*b-4*a*c
//     let x1,x2;
// if (denta>0){
//     x1 = (-b + Math.sqrt(denta)) / (2 * a);
//     x2 = (-b - Math.sqrt(denta)) / (2 * a);
//     alert('Phường trình có 2 nghiệm phân biệt'+x1 + x2);
// }
// else if (denta===0){
//     x1= -b/2*a
//     alert('Phương trình có nghiệm kép la'+x1)
// }
// else {
//     alert('Phưog trình không có nghiệm thực');
// }
// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.

// let a = prompt('Nhập vào tuổi')
// if(a<120){
//     alert('Tuoi của bạn là'+ a);
// }
// else{
//     alert('Bạn là một con quỷ')
// }

// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
//
//     a,b,c > 0
// a + b > c
// b + c > a
// a + c > b

// let a = prompt('Nhập a: ')
// let b = prompt('Nhập b: ')
// let c = prompt('Nhập c: ')
// if (a + b > c && a + c > b && b + c > a && a,b,c > 0) {
//     alert("a, b, và c là cạnh của một tam giác.");
// } else {
//     alert("a, b, và c không thể tạo thành một tam giác.");
// }

// var soDienTieuThu = parseFloat(prompt("Nhập số điện tiêu thụ (kWh): "));

// Khai báo biến giá điện theo từng mức
// var giaDienMuc1 = 1000; // Giá điện mức 1 (dưới 50 kWh)
// var giaDienMuc2 = 1200; // Giá điện mức 2 (từ 51 kWh đến 100 kWh)
// var giaDienMuc3 = 1500; // Giá điện mức 3 (trên 100 kWh)
//
// // Khai báo biến tổng giá điện
// var tongGiaDien = 0;
//
// // Tính giá điện dựa trên số điện tiêu thụ
// if (soDienTieuThu <= 50) {
//     tongGiaDien = soDienTieuThu * giaDienMuc1;
// } else if (soDienTieuThu <= 100) {
//     tongGiaDien = 50 * giaDienMuc1 + (soDienTieuThu - 50) * giaDienMuc2;
// } else {
//     tongGiaDien = 50 * giaDienMuc1 + 50 * giaDienMuc2 + (soDienTieuThu - 100) * giaDienMuc3;
// }
//
// // In ra kết quả
// console.log("Tổng giá điện là: " + tongGiaDien + " đơn vị tiền tệ");

// Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
a = +prompt('Thu nhap hàng năm của bạn là ');
let tyLrthue;
let thue = 0 ;
if (a<5000){
    tyLrthue = 0.05;
}
else if(a<=10000){
    tyLrthue = 0.1;
}
else {
    tyLrthue  = 0.15;
}
thue = tyLrthue*a
alert(thue)

