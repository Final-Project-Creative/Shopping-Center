
const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://cdn.lookastic.com/brown-wool-hat/brooklyn-hat-co-wood-wide-brim-hat-613504-original.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://mapoesie.fr/4623-medium_default/lalo-blue-beanie.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'baseball cap hat',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61j-nUQuKRL._AC_UX385_.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'sun hat',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71SVnB9pgAL._AC_UL1200_.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'shoes',
    routeName: 'shoes',
    items: [
      {
        id: 10,
        name: 'work boots',
        imageUrl: 'https://spy.com/wp-content/uploads/2020/01/red-wing-work-boots.jpg?w=764',
        price: 220
      },
      {
        id: 11,
        name: 'court shoes',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 280
      },
      {
        id: 12,
        name: 'mens shoes',
        imageUrl: 'https://spy.com/wp-content/uploads/2019/12/best-adidas-sneakers.jpg?w=840',
        price: 110
      },
      {
        id: 13,
        name: 'Nike AirForce',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEY5ONvYZHD1X6Kws8ylU8aKhgTkaS0WRWag&usqp=CAU',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Jean Shearling',
        imageUrl: 'https://www.lulus.com/images/product/xlarge/2843330_547332.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Jean Jacket',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81v1idOA9zL._AC_UL1500_.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://d4zpg1jklewne.cloudfront.net/steak/spree-variant/mo-jkt-dnm-chw-2/mens-charcoal-worn-denim-jacket-product.jpg?1498177357',
        price: 90
      },
      {
        id: 21,
        name: 'Shearling',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbd%2F44%2Fbd44c3569117b3f7a723189c1998b9e36f7c9757.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jacketscoats_coats%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 23,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: "Brown Shirt",
        description: "Brown T-Shirt for Women",
        price: 16.99,
        gender: "women",
        type: "shirt",
        imageUrl: 'https://image.ibb.co/kOhL6k/img1.jpg',

      },
      {
        id: 24,
        name: "Light Brown Shirt",
        description: "Light Brown Shirt for Women",
        price: 4.99,
        gender: "women",
        type: "shirt",
        imageUrl: "https://ae01.alicdn.com/kf/HTB1YkQCc7xz61VjSZFrq6xeLFXaJ/Light-Brown-Ruffles-100-Silk-Blouses-Solid-Basic-Ladies-Tops-White-Women-Tees-Shirt-Summer-Short.jpg_q50.jpg",


      },
      {
        id: 25,
        name: "Warm Shirt Women",
        description: "Woolen Hoodie Women",
        price: 20.00,
        gender: "women",
        type: "shirt",
        imageUrl: "https://image.ibb.co/dVfORk/img4.jpg",
      },
      {
        id: 26,
        name: "No Shoulder Hoodie",
        description: "Hoodie for Women",
        price: 4.99,
        gender: "women",
        type: "shirt",
        imageUrl: "https://cdn.shopify.com/s/files/1/1705/3161/products/1_dbb2fafd-6bb8-44b6-b52d-7071fcc5567c_1200x1200.jpg?v=1605168193",

      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: "Man White Shirt",
        description: "White Shirt for Men",
        price: 20.99,
        gender: "men",
        type: "shirt",
        imageUrl: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
        
      },
      {
        id: 31,
        name: 'Shirt Men',
        imageUrl: 'https://cdn16.nnnow.com/web-images/medium/styles/ECVHFFJ5MJ4/1571902046449/1.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91lVQhVD46L._AC_UL1500_.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwiv0OTqBclhWiZIkwQdloahnaQ8mU7ii4g&usqp=CAU',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;