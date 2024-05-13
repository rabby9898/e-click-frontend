const url = `https://api.cloudinary.com/v1_1/${process.env.UPLOAD_IMG_CLOUDINARY}/image/upload`;
const UploadProduct = async (image) => {
  const formData = new formData();
  formData.append("file", image);
  formData.append("upload_preset", " eclick-product");

  const dataResponse = await fetch(url, {
    method: "post",
    body: formData,
  });
  return dataResponse.json();
};

export default UploadProduct;
