const itemData =[
    {
        "id":"12321341", 
        "title":'The lean startup: How Constant Innovation Creates Radically Successful Business Paperback', 
        "price":11.96 ,
        "image":"https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg", 
        "rating":5
    },{
        "id":"24233423",
        "title":'Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey', 
        "price":599.9, 
        "image":"https://images-na.ssl-images-amazon.com/images/I/71VoLjTu8OL._AC_SL1500_.jpg", 
        "rating":4
                
    },{
        "id":4903850,
        "title":"Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor", 
        "price":199.99, 
        "image":"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466_.jpg", 
        "rating":3
                
    }
]
const itemData2=[
    {
        "id":"32543545",
        "title":"[2 Pack] Proud Bird Wall Mount Outlet Holder Hanger for Echo Dot 3rd Gen Sound Enhanced for Your Smart Home Speaker with Wire Saving Function", 
        "price":9.99 ,
        "image":"data:image/webp;base64,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", 
        "rating":5
    },{
        "id":"19781", 
        "title":'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)', 
        "price":374.95 ,
        "image":"https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg", 
        "rating":5
    }
    
]
export {itemData,itemData2};