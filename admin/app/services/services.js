function Services() {
  this.arr = [];

  this.fetchData = function () {
    return axios({
      url: "https://6255692752d8738c6921725e.mockapi.io/api/products",
      method: "GET",
    });
  };

  this.deleteProduct = function (id) {
    return axios({
      url: "https://6255692752d8738c6921725e.mockapi.io/api/products/" + id,
      // or url: `https://6255692752d8738c6921725e.mockapi.io/api/products/{id}` ,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://6255692752d8738c6921725e.mockapi.io/api/products/",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: "https://6255692752d8738c6921725e.mockapi.io/api/products/" + id,
      method: "GET",
    });
  };
  this.putProductApi = function (product) {
    return axios({
      url:
        "https://6255692752d8738c6921725e.mockapi.io/api/products/" +
        product.id,
      method: "PUT",
      data: product,
    });
  };
}
