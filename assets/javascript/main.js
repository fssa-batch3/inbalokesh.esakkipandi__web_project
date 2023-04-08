const products = JSON.parse(localStorage.getItem("product_list"));

const show_products = JSON.parse(localStorage.getItem("product_ids"));

const user_list = JSON.parse(localStorage.getItem("user_list"));

if (!products) {
    localStorage.setItem("product_list", JSON.stringify(
        [
            {
                "product_image": "https://iili.io/HN4V3MX.webp",
                "product_name": "Sambar Rice",
                "product_type": "Veg",
                "product_quantity": "1 plate",
                "product_price": "25",
                "product_id": "6c21b6e8-27ef-4401-936d-38790f6b7845"
            },
            {
                "product_image": "https://iili.io/HMe272t.webp",
                "product_name": "Chicken 65",
                "product_type": "Non-Veg",
                "product_quantity": "1 plate",
                "product_price": "63",
                "product_id": "2c5d0f02-5449-4e65-ad3e-c719ebfab4c5"
            },
            {
                "product_image": "https://iili.io/HMeJ2uj.jpg",
                "product_name": "Pongal",
                "product_type": "Veg",
                "product_quantity": "1 plate",
                "product_price": "30",
                "product_id": "8f308f4f-daa9-420d-82fb-bfc2d3cf0d06"
            }
        ]
    ));
}

if (!show_products) {
    localStorage.setItem("product_ids", JSON.stringify(
        [
            { "product_id": "2c5d0f02-5449-4e65-ad3e-c719ebfab4c5" },
            { "product_id": "8f308f4f-daa9-420d-82fb-bfc2d3cf0d06" },
            { "product_id": "6c21b6e8-27ef-4401-936d-38790f6b7845" }
        ]
    ));
}

if (!user_list) {
    localStorage.setItem("user_list", JSON.stringify(
        [
            {
                "user_name": "Admin",
                "user_phonenumber": "8888888888",
                "user_email": "admin@gmail.com",
                "user_address": "Chennai",
                "user_password": "Admin123",
                "confirm_password": "Admin123"
            },
            {
                "user_name": "Loki",
                "user_phonenumber": "1234567898",
                "user_email": "loki@gmail.com",
                "user_address": "Chennai",
                "user_password": "Inba1234",
                "confirm_password": "Inba1234"
            },
            {
                "user_name": "Surya",
                "user_phonenumber": "9876543211",
                "user_email": "surya@gmail.com",
                "user_address": "Chennai",
                "user_password": "Surya1234",
                "confirm_password": "Surya1234"
            }
        ]
    ));
}

