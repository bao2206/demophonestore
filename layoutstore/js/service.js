function Services() {
  this.arr = [];
  this.fetchData = function () {
    return axios({
      //Axios trả về đối tượng Promise
      // Pending(chờ), Resolve(thành công), reject(thất bại)
      //key : value
      url: "https://6255692752d8738c6921725e.mockapi.io/api/products",
      method: "GET",
    });
  };
}
