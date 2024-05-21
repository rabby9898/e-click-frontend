const backendDomain = "http://localhost:9090";

const SummaryApi = {
  signUP: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  user_logout: {
    url: `${backendDomain}/api/logout`,
    method: "get",
  },
  allUsers: {
    url: `${backendDomain}/api/all-users`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  allProducts: {
    url: `${backendDomain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post",
  },
  getCategory: {
    url: `${backendDomain}/api/get-category`,
    method: "get",
  },
  getCategoryProduct: {
    url: `${backendDomain}/api/get-categoryProduct`,
    method: "post",
  },
  ProductDetails: {
    url: `${backendDomain}/api/product-details`,
    method: "post",
  },
  addToCart: {
    url: `${backendDomain}/api/addToCart`,
    method: "post",
  },
  countAddToCartProduct: {
    url: `${backendDomain}/api/countAddToCartProduct`,
    method: "get",
  },
};

export default SummaryApi;
