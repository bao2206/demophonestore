var services = new Services();

function getListProducts() {
  var promise = services.fetchData();
  //Loading
  document.getElementById("loading").style.display = "block";
  promise
    .then(function (result) {
      document.getElementById("loading").style.display = "none";
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  //   console.log(services.arr);
}

getListProducts();

function renderHTML(arr) {
  console.log(arr);
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var product = arr[i];
    content += `
    <div class="col-12 col-md-6 col-lg-4">
            <div class="card cardPhone">
              <img src="./img/${product.hinhAnh}" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                    <p class="cardPhone__text">${product.moTa}</p>
                  </div>
                  <div>
                    <h3 class="cardPhone__title">${product.gia} $</h3>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div>
                    <button class="btnPhone-shadow">
                      <i class="fa fa-shopping-cart"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  }

  document.getElementById("productList").innerHTML = content;
}
