



//Lấy giá trị người dùng nhập vào từ giao diện
document.querySelector('#btnXacNhan').onclick = function () {
    var nv = new NhanVien();
    nv.maNhanVien = document.querySelector('#maNhanVien').value;
    nv.soGioLam = document.querySelector('#soGioLam').value;
    nv.heSoChucVu = document.querySelector('#chucVu').value;
    nv.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nv.luongCanBan = document.querySelector('#luongCanBan').value;


    //Hiển thị thông tin qua tab bên phải
    // document.querySelector('#txtTenNhanvien').innerHTML = nv.tenNhanVien;
    // document.querySelector('#txtMaNhanvien').innerHTML = nv.maNhanVien;

    // document.querySelector('#txtTongLuong').innerHTML = nv.tinhLuongNhanVien();
    // document.querySelector('#txtXepLoai').innerHTML = nv.xepLoaiNhanVien();


    //lấy danh sách option trong thẻ select
    // var arrOption = document.querySelectorAll('#chucVu option');
    // console.log('arrOption',arrOption)


    var arrOption = document.querySelector('#chucVu').options;
    // console.log('option', arrOption)
    // //Lấy vị trí của option được chọn từ select 
    var slChucVu = document.querySelector('#chucVu');
    // console.log('indexOptionSelected', slChucVu.selectedIndex); // Chỉ ra vị trí của option được chọn
    nv.tenChucVu = arrOption[slChucVu.selectedIndex].innerHTML;
    // document.querySelector('#chucVu').innerHTML = nv.tenChucVu;

    //tạo thẻ js
    var trNhanVien = document.createElement('tr');
    var tdMaNhanVien = document.createElement('td');
    tdMaNhanVien.innerHTML = nv.maNhanVien;

    var tdTenNV = document.createElement('td');
    tdTenNV.innerHTML = nv.tenNhanVien;

    var tdChucVu = document.createElement('td');
    tdChucVu.innerHTML = nv.tenChucVu;

    var tdLuongCB = document.createElement('td');
    tdLuongCB.innerHTML = nv.luongCanBan;

    var tdTongLuong = document.createElement('td');
    tdTongLuong.innerHTML = nv.tinhLuongNhanVien();

    var tdGioLam = document.createElement('td');
    tdGioLam.innerHTML = nv.soGioLam;

    var tdXepLoaiNV = document.createElement('td');
    tdXepLoaiNV.innerHTML = nv.xepLoaiNhanVien();

    var btnXoa = document.createElement("BUTTON");
    var t = document.createTextNode("Xóa");
    btnXoa.appendChild(t);
    btnXoa.style.backgroundColor = "red";
    btnXoa.style.color = "white";
    btnXoa.style.marginTop = "10px";
    btnXoa.style.border = "red";
    btnXoa.style.textAlign = "center";

    //đưa thẻ td vào thẻ tr
    trNhanVien.appendChild(tdMaNhanVien);
    trNhanVien.appendChild(tdTenNV);
    trNhanVien.appendChild(tdChucVu);
    trNhanVien.appendChild(tdLuongCB);
    trNhanVien.appendChild(tdTongLuong);
    trNhanVien.appendChild(tdGioLam);
    trNhanVien.appendChild(tdXepLoaiNV);
    trNhanVien.appendChild(btnXoa);

    btnXoa.onclick = function () {
        var row = btnXoa.parentNode;
        row.parentNode.removeChild(row);
    }

    //đưa thẻ tr vào tbody
    document.querySelector('#tblNhanVien').appendChild(trNhanVien);
}