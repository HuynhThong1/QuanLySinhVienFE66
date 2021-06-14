//Khai báo biến
//phân biệt var let const

/*
    Phạm vị hoạt của từ khóa var: toàn bộ scope
    phạm vị hoạt của từ let : trong từ scope khác nhau sẽ phân biệt nhau
    trong 1 scope thì không thể khai báo 2 lần let với cùng 1 tên biến
    đối với khai báo biến = var trong js sẽ hổ trợ cơ chế tự khai báo hosting(ngầm khai báo biến đó ở đầu scope)
    đói vơi let và const thì ko hỗ trợ
*/

// let hoTen = 'Thong1';

// {
//     let hoTen = 'Thong2';
//     console.log(hoTen);
// }

//const sử dụng cho hằng số, là giá trị ko thay đổi.
//const pi = 3.14;

// console.log(hoTen);

// console.log(name);
// console.log(address);
// console.log(city);

// const name = 'Hehe';
// let address = '111 xom chiu';
//var city = 'Ho Chi Minh'


// =================ARROW FUNCTION=====================
//ES6

//ARROW FUNCTION không hỗ trợ cơ chế hosting
//Khai báo rồi mới được sử dụng.
//Đối với hàm có 1 lệnh return thì không cần đóng {} và không cần ghi return
//Đối với hàm có 1 tham số thì không cần (thamso) => () ---> thamSo => {...}
// Lưu ý: Arrow function không thể định nghĩa được prototype (class)
// Arrow function không làm thay đổi ngữ cảnh của con trỏ this.

// var tenHam = () => {
//     console.log('Hello');
// }

// tenHam();

//VD hàm có 1 lệnh return
// var tinhTong = (a, b) => a + b;

//VD hàm có 1 tham số

// var showMess = name => console.log(`Hello ${name}`);

//console.log(tinhTong(5, 10));

// showMess('Thongdepzai');

// Arrow function không làm thay đổi ngữ cảnh của con trỏ this.

/* + context của con trỏ this:
    - Mặc định ngữ cảnh khi sử dụng con trỏ this thì nó là window (var biến hoặc là window.bien)
    - Khi dùng con trỏ this trong object = {} ==> thí this là đối tượng đó.
    - dúng con trỏ this trong function (prototype hoặc class) thì this sẽ đại điện cho prototype hay class đó.
*/

// let hocVien = {
//     id: 1,
//     lop: 'FE66',
//     hoTenHocVien: 'Nguyen Van A',
//     layThongTinHocVien: function () {
//         let hienThiThongTin = () => {
//             console.log(`Họ tên: ${this.hoTenHocVien} - Lớp: ${this.lop}`);
//         }

//         hienThiThongTin();
//     }
// }

// hocVien.layThongTinHocVien();

//Closure function là return về 1 cái hàm khác


//============Default params==================

// + Default params: giúp định nghĩa tham số mặc định cho hàm => nếu ta gọi hàm không truyền tham số thì hàm sẽ lấy tham số mặc định ngược lại nếu ta truyển tham số thì hàm sẽ thấy tham số ta truyền ( không lấy mặc định)

// var getUserInfo = (name = 'Thông' , age = 21) => {
//     console.log('Name ' + name);
//     console.log('Age ' + age);
// }

// getUserInfo();


//==========Rest params==============

// function tinhTong(a, b){
//     console.log(a + b);
// }

// function tinhTong(a, b, c){
//     console.log(a + b + c);
// }

// var tinhTong = (thamSo1, ...restParams) => {//...restParam là mảng []
//     switch (restParams.length) {
//         case 2: {
//             console.log(thamSo1, 'Tổng 2 số = ', restParams[0] + restParams[1]);
//             break;
//         }
//         case 3: {
//             console.log(thamSo1, 'Tổng 3 số = ', restParams[0] + restParams[1] + restParams[2]);
//             break;
//         }
//         default: {
//             console.log('Tham số không hợp lệ');
//         }

//     }
// }

// tinhTong('Bài Toán', 1, 2, 3);

//===================Spread Operator====================

// let sinhVien1 = { maSV: 1, hoTen: 'Nguyen Van 1' };
// let sinhVien2 = { ...sinhVien1, Lop: 'FE66' };

// sinhVien2.maSV = 2;
// sinhVien2.hoTen = 'Nguyen Van 2';

// console.log('sv1', sinhVien1);
// console.log('sv2', sinhVien2);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1, 7];

// console.log('arr1', arr1);
// console.log('arr2', arr2);

//=================Destructuring===========================

// let product = {
//     id: 1,
//     name: 'Iphone',
//     img: 'https://piscum.photos/200/200',
//     productInfo: function () {
//         console.log('Id: ', product.id);
//         console.log('Name: ', product.name);
//         console.log('Img: ', product.img);
//     }
// }

// let {id, name, img, productInfo} = product;

// productInfo();

// let {id, name, ...restParams} = product;

// console.log('restParams', restParams);

//===================Object Literal==================
//Từ tên biến tạo ra tên thuộc tính
// 
// let fName = 'Mị';
// let myObj = {
//     fName,
//     sayHi: function () {
//         console.log(`Hello ${this.fName}`);
//     }
// }

// console.log('obj', myObj);


// let tenThuocTinh = 'Mã Học Viên';

// let hocVien = {
//     [tenThuocTinh]: '001',
//     tenHocVien: 'Huynh Minh Thong'
// }

// console.log(hocVien);

// console.log('Học Viên', hocVien[tenThuocTinh]);

//=======================FOR IN - FOR Of=====================

//(1) For in
//cHUYÊN DUYỆT OBJECT ĐỂ LẤY GIÁ TRỊ CỦA THUỘC TÍNH

// let mangSanPham = [
//     {maSP: 1, tenSP: 'IphoneX', gia: 1000, hinhAnh: 'https://piscum.photos/200/200'},
//     { maSP: 2, tenSP: 'IphoneXS', gia: 1000, hinhAnh: 'https://piscum.photos/200/200' },
//     { maSP: 3, tenSP: 'IphoneXS Max', gia: 1000, hinhAnh: 'https://piscum.photos/200/200' },
// ]

// //For in: mỗi lần duyện lấy ra index của mảng
// for(let i in mangSanPham){
//     sanPham = mangSanPham[i];
//     console.log('index', i);
//     console.log('mangSanPham', sanPham);
// }

// var nguoiDung = {
//     taiKhoan: 'nguyenVanA',
//     matKhau: '123456',
//     email: 'nguyenvana@gmail.com',
//     soDienThoai: '090909090'
// }

// for(let tenThuocTinh in nguoiDung){
//     console.log(nguoiDung[tenThuocTinh]);;
// }

//(2) For of: mỗi lần duyệt lấy ra 1 object trong mảng 
//CHUYÊN DUYỆT MẢNG

// for(let sanPham of mangSanPham){
//     console.log('mangSanPham', sanPham);
// }

//========================Bài tập====================


document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();

    //DOM tới all thẻ input trong thẻ form
    let arrInput = document.querySelectorAll('form input');
    let hocVien = {};
    //Duyệt các thẻ input
    for (let input of arrInput) {

        //Lấy name và value
        // let name = input.name;
        // let value = input.value;

        //Destructuring
        let { name, value } = input;

        //obj literal 
        //...hocVien Spread Operator
        hocVien = { ...hocVien, [name]: value }
    }

    //tạo table từ obj hocVien
    var trHocVien = `<tr>`
    for (let tenThuocTinh in hocVien) {
        trHocVien += `
        <td>${hocVien[tenThuocTinh]}</td>`
    }
    trHocVien += `</tr>`
    document.querySelector('#tableHocVien').innerHTML = trHocVien;
}

//====================CLASS========================

//es5

// function HocVien (){
//     this.maHocVien = '';
//     this.tenHocVien = '';
//     this.hienThiThongTinHocVien = function (){
//         console.log('Mã Học Viên', this.maHocVien);
//         console.log('Tên Học Viên', this.tenHocVien);
//     }
// }

//es6 

// class HocVien{
//     ma = '';
//     ten = '';

//     constructor(ma, ten){
//         this.maSinhVien = ma;
//         this.tenSinhVien = ten;
//     }

//     //2 cách khai báo phương thức
//     //Cách 1
//     hienThiThongTinHocVien(){
//         console.log('Mã Học Viên', this.maHocVien);
//         console.log('Tên Học Viên', this.tenHocVien);
//     }
//     //Cách 2
//     hienThiThongTinHocVien = () => {
//         console.log('Mã Học Viên', this.maHocVien);
//         console.log('Tên Học Viên', this.tenHocVien);
//     }
// }


// let hv = new HocVien(1, 'Huynh Minh Thong');
// hv.hienThiThongTinHocVien();


// import { LaoCong } from './models/LaoCong.js';

// let laoCong = new LaoCong();
// laoCong.tenNhanVien = 'Thông';
// laoCong.maNhanVien = 1;
// console.log('laoCong', laoCong);


// import NhanVienLaoCong from './models/LaoCong.js';

// let nhanVien = new NhanVienLaoCong();
// nhanVien.tenNhanVien = 'Thong1';
// nhanVien.tinhLuong();
// nhanVien.maNhanVien = 2;

// console.log({nhanVien});




let mangSanPham = [
    { maSP: 1, tenSP: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
    { maSP: 2, tenSP: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
    { maSP: 3, tenSP: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
    { maSP: 4, tenSP: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
    { maSP: 5, tenSP: 'Iphone X', gia: 2500, hangSX: 'Apple' },
    { maSP: 6, tenSP: 'Iphone XS', gia: 1500, hangSX: 'Apple' },
    { maSP: 7, tenSP: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
    { maSP: 8, tenSP: 'Samsung galaxy Note 10 plus', gia: 1500, hangSX: 'Samsung' },
    { maSP: 9, tenSP: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
    { maSP: 10, tenSP: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
]


//Yêu cầu: lấy ra các sản phẩm có hangSX = sony

// let arrSony = [];

// for(let i of mangSanPham){
//     if(i.hangSX === 'Sony'){
//         arrSony.push(i);
//     }
// }
// console.log(arrSony);


//Sử dụng FILtER: là hàm lọc ra các sản phẩm thỏa điều khiện của arrowFunction

let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony by Filter', arrSony);


// FIND: là hàm tìm ra phần tử thỏa điều kiện arrowFunction. Lấy ra sản phẩm đàu tiên tìm thấy. Tìm không thấy thì trả về undefined

let sp5 = mangSanPham.find(sanPham => sanPham.maSP === 5);

if (sp5) {
    console.log('sp5', sp5);
} else {
    console.log('Not found!');
}

//Bài tập 1 lấy ra các sản phẩm có giá trên 2000
//Bài tập 2 thay đổi tên sản phẩm thứ 10 thành xiaomi mi mix 3

//BT1
let arrProduct = mangSanPham.filter(products => products.gia > 2000);
console.log('List products have price higher than 2000:', arrProduct);

//BT2
let name10 = mangSanPham.find(product => product.maSP === 10);
if (name10) {
    name10.tenSP = 'xiaomi mi mix 3';
}
console.log(mangSanPham);


//FindIndex: tương tự find nhưng tìm vị trí phần tử trong mảng nếu khong tìm thấy thì trả về -1(Chỉnh sửa hoặc xóa dữ liệu dựa trên index)

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if (index !== -1) {
    mangSanPham[index].tenSP = 'Điện thoại hehe';
    console.log('MangSP', mangSanPham);
    mangSanPham.splice(index, 1);

} else {
    console.log('Hok tìm thấy!', index);
}

//Foreach: Dùng để duyệt qua các phần tử của mảng để làm thao tác gì đó

mangSanPham.forEach((sanPham, index) => {
    sanPham.gia += 1000;
    console.log('sanPham', sanPham);
})

//map: là fucntion dùng để thực hiện biến đổi từ mảng này thành mảng khác. Mảng => mảng khác

let htmlCard = mangSanPham.map((sanPham, index) => {
    return `
    <div class="col-4 mt-3">
        <div class="card text-left">
            <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/200/200" alt="">
            <div class="card-body">
            <h4 class="card-title">${sanPham.tenSP}</h4>
            <p class="card-text">${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `
});

htmlCard.forEach((htmlSanPham, index) => {
    document.querySelector('#danhSachSanPham').innerHTML += htmlSanPham;
})

//reduce: hàm reduce tương tự hàm map tuy nhiên kết quả trả vè 1 giá trị, từ mảng => 1 giá trị

let tongTienSanPham = mangSanPham.reduce((tongTien, sanPham, index) => {
    return tongTien += sanPham.gia;
}, 0)

console.log('Tổng tiền ', tongTienSanPham);

//Sử dụng reduce để tạo từ 1 mảng obj => 1 chuỗi html card

let stringHTML = mangSanPham.reduce((content, sanPham, index) => {
    return content += `
    <tr>
        <td>${sanPham.maSP}</td>
        <td>${sanPham.tenSP}</td>
        <td><img class="w-50" src="https://picsum.photos/id/${sanPham.maSP}/200/200" alt=""></td>
        <td>${sanPham.gia}</td>
        <td>${sanPham.hangSX}</td>
    </tr>
    `
}, '')

document.querySelector('#tblSanPham').innerHTML = stringHTML;

//SORT:
//Sắp xếp theo chuỗi a => z và sắp xếp theo số

let arrTen = mangSanPham.sort((sp, spTruocDo) => {
    let tenSP = sp.tenSP.toLowerCase().trim();

    let tenSPTruoc = spTruocDo.tenSP.toLowerCase().trim();

    if(tenSP > tenSPTruoc){
        return 1;
    }

    return -1;
})


// console.log('mangSanPhamSorted', mangSanPham);
// mangSanPham.reverse();
// console.log('mangSanPhamSorted', mangSanPham);


//sắp xếp theo số

let arrGia = mangSanPham.sort((sp, spTruocDo) => {
    return sp.gia - spTruocDo.gia;
})

console.log('mangSanPham theo giá tăng dần', arrGia);
console.log('mangSanPham theo giá giảm dần', arrGia.reverse());