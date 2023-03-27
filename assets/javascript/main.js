const products = JSON.parse(localStorage.getItem("product_list"));

const show_products = JSON.parse(localStorage.getItem("product_ids"));



if(products == null){
    return true
}

else{
    localStorage.setItem("product_list", JSON.stringify([{"product_image":"https://iili.io/HMeJ2uj.jpg","product_name":"Salad","product_type":"Veg","product_quantity":"1 kg","product_price":"22","product_id":"6c21b6e8-27ef-4401-936d-38790f6b7845"},{"product_image":"https://iili.io/HMeJ2uj.jpg","product_name":"Dosaaaaa","product_type":"Veg","product_quantity":"1 plate","product_price":"33","product_id":"2c5d0f02-5449-4e65-ad3e-c719ebfab4c5"},{"product_image":"https://iili.io/HMeJ2uj.jpg","product_name":"Pongal","product_type":"Veg","product_quantity":"1 kg","product_price":"44","product_id":"8f308f4f-daa9-420d-82fb-bfc2d3cf0d06"}]));
}

if(show_products == null){
    return true
}

else{
    localStorage.setItem("product_ids", JSON.stringify([{"product_id":"2c5d0f02-5449-4e65-ad3e-c719ebfab4c5"},{"product_id":"8f308f4f-daa9-420d-82fb-bfc2d3cf0d06"},{"product_id":"6c21b6e8-27ef-4401-936d-38790f6b7845"}]));
}