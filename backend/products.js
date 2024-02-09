const products = [
  {
    id: 1,
    name: "Biotin",
    brand: "",
    desc: "อาหารเสริม",
    price: 320,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00474/v/27.jpg",
  },
  {
    id: 2,
    name: "Benefit",
    brand: "",
    desc: "อาหารเสริม",
    price: 199,
    image:
      "https://www.tvdirect.tv/goodsimg/0000/125/812/125812_B.jpg",
  },
  {
    id: 3,
    name: "Vitamin C",
    brand: "",
    desc: "อาหารเสริม",
    price: 299,
    image:
      "https://static.thairath.co.th/media/Dtbezn3nNUxytg04N1L7XPq7G9OXAnfU9uPTAzhnP02Pi7.webp",
  },
  {
    id: 4,
    name: "Fish oli",
    brand: "",
    desc: "อาหารเสริม",
    price: 299,
    image:
      "https://inwfile.com/s-cv/icy8yq.png",
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    brand: "",
    desc: "อาหารเสริม",
    price: 199,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01652/v/68.jpg",
  },
  {
    id: 6,
    name: "สเปรย์แก้ไอ",
    brand: "",
    desc: "ยา",
    price: 150,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 7,
    name: "ยาดมสมุนไพร",
    brand: "",
    desc: "ยา",
    price: 29,
    image:
      "https://backend.tops.co.th/media/catalog/product/8/8/8855073002336.jpg",
  },
  {
    id: 8,
    name: "น้ำมันเขียว",
    brand: "",
    desc: "ยา",
    price: 50,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVj-IOxgHw6ywUBKOEsMVyHYLXsuylPd8J4pAZTmCevdwn9jsY2igVeyi1CMqlySLDgek&usqp=CAU",
  },
  {
    id: 9,
    name: "ยาลดไข้",
    brand: "",
    desc: "ยา",
    price:  12.00,
    image:
      "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lopclye68a4d40_tn",
  },
  {
    id: 10,
    name: "แก้ท้องเสีย",
    brand: "",
    desc: "ยา",
    price: 29,
    image:
      "https://pim-cdn0.ofm.co.th/products/zoom/0001514.jpg",
  },

];

module.exports = products;
