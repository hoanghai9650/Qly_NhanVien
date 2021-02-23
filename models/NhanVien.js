//Lưu ý để phân biệt class (lớp đối tượng hay gọi là prototype) thì Dev thường hay viết tên hàm này in hoa các chữ cái đầu tiên của hàm
var NhanVien = function () {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.heSoChucVu = '';
    this.tenChucVu = '';
    this.luongCanBan = '';
    this.soGioLam = '';
    //Các giá trị tính toán được thì không đưa vào lưu trữ 
    this.tinhLuongNhanVien = function () {
        
        var tongLuong = this.luongCanBan * this.heSoChucVu;
        return tongLuong;
    }

    this.xepLoaiNhanVien = function () {
        var ketQua = '';
        //if else
        if(this.soGioLam > 120) {
            ketQua = 'Nhân viên xuất sắc';
        } else if (this.soGioLam > 100 && this.soGioLam<=120) {
            ketQua = 'Nhân viên giỏi';
        } else if ( this.soGioLam > 80 && this.soGioLam <=100)
        {
            ketQua = 'Nhân viên khá';
        } else if ( this.soGioLam > 50 && this.soGioLam <=80) {
            ketQua = 'Nhân viên trung bình';
        } else {
            ketQua = 'Nhân viên yếu kém'
        }
        return ketQua;
    }
}