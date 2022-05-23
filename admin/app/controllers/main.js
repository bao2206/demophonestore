var services = new Services();

function getListProducts() {
  var promise = services.fetchData();

  promise
    .then(function (result) {
      console.log(result.data);
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProducts();

function renderHTML(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += `
    <tr>
      <td>${i + 1}</td>
      <td>${product.tenSP}</td>
      <td>${product.gia}</td>
      <td><img src="./../../assets/img/${product.hinhAnh} " width="50px"/></td>
      <td>${product.moTa}</td>
      <td>
        <button class="btn btn-info" data-toggle="modal"
        data-target="#myModal" onclick="fixInfo(${product.id})">Sửa</button>
        <button class="btn btn-danger" onclick="xoa(${
          product.id
        })" >Xóa</button>
      </td>
    </tr>
    `;
  }
  document.getElementById("tblDanhSachSP").innerHTML = content;
  // console.log(data);
}

function xoa(id) {
  services
    .deleteProduct(id)
    .then(function (result) {
      //Xóa thành công thì fetch lại data mới
      getListProducts();
      // console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getEle(id) {
  return document.getElementById(id);
}
getEle("btnThemSP").addEventListener("click", function () {
  // Sửa lại tiêu đề modal
  getEle("modal_title").innerHTML = "Thêm sản phẩm";
  //document.getElementByClass("modal-title").innerHTML[0] = ""
  // add vô button Thêm dưới footer của modal

  var footer = `<button class="btn btn-success" onclick="add()" data-toggle="modal"
                data-target="#myModal">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

//add product
function add() {
  //Dom tới các thẻ input lấy value
  var nameProduct = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var picture = getEle("HinhSP").value;
  var accessory = getEle("moTa").value;
  //Tạo đối tượng product từ lớp đối tượng trong product
  var product = new Products("", nameProduct, price, picture, accessory);
  services
    .addProductApi(product)
    .then(function (result) {
      getListProducts();

      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(product);

  //Gọi tới phương thức services để gửi product lên sever
}
//200 là lấy
//201 là tạo thành công

//Fix
function fixInfo(id) {
  // console.log(id);

  //Sửa lại tiêu đề modal
  getEle("modal_title").innerHTML = "Sửa thông tin";

  // add vô button Cap Nhat dưới footer của modal
  var footer = `<button class="btn btn-success" onclick="update(${id})" data-toggle="modal"
                data-target="#myModal">Sửa</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  //Gọi tới phương thức services
  services
    .getProductById(id)
    .then(function (result) {
      console.log(result.data);

      //Show các thông tin
      // var product = result.data;
      getEle("TenSP").value = result.data.tenSP;
      getEle("GiaSP").value = result.data.gia;
      getEle("HinhSP").value = result.data.hinhAnh;
      getEle("moTa").value = result.data.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function update(id) {
  //Dom tới các thẻ input lấy value

  var nameProduct = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var picture = getEle("HinhSP").value;
  var accessory = getEle("moTa").value;
  //Tạo đối tượng product từ lớp đối tượng product

  var product = new Products(id, nameProduct, price, picture, accessory);
  //gọi tới phương thức services để gửi product lên sever

  services
    .putProductApi(product)
    .then(function () {
      getListProducts();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
