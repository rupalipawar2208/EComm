// import { useState } from "react";
// export default function ProductList() {
//   let pList = [
//     {
//       id: "1",
//       name: "Grapes",
//       image: "grapes.jpg",
//       unit: "kg",
//       mrp: 120,
//       discount: 10,
//       inStock: false,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "2",
//       name: "Mango",
//       image: "mango.jpg",
//       unit: "doz",
//       mrp: 500,
//       discount: 8,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "3",
//       name: "Banana",
//       image: "banana.jpg",
//       unit: "doz",
//       mrp: 60,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "4",
//       name: "Apple",
//       image: "apple.jpg",
//       unit: "kg",
//       mrp: 180,
//       discount: 7,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "5",
//       name: "Anjeer",
//       image: "anjeer.jpg",
//       unit: "kg",
//       mrp: 100,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "6",
//       name: "Strawberry",
//       image: "strawberry.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 20,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "7",
//       name: "Papaya",
//       image: "papaya.jpg",
//       unit: "kg",
//       mrp: 50,
//       discount: 15,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "8",
//       name: "Cherry",
//       image: "cherry.jpg",
//       unit: "kg",
//       mrp: 300,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "9",
//       name: "Chikoo",
//       image: "Chikoo.jpg",
//       unit: "kg",
//       mrp: 60,
//       discount: 5,
//       inStock: false,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "10",
//       name: "Kiwi",
//       image: "Kiwi.jpg",
//       unit: "piece",
//       mrp: 20,
//       discount: 0,
//       inStock: false,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "11",
//       name: "Orange",
//       image: "orange.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 10,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "12",
//       name: "Pear",
//       image: "pear.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 7,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "13",
//       name: "Pineapple",
//       image: "pineapple.jpg",
//       unit: "piece",
//       mrp: 100,
//       discount: 50,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "14",
//       name: "Pomegranete",
//       image: "pomegranete.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "15",
//       name: "Sitaphal",
//       image: "sitaphal.jpg",
//       unit: "kg",
//       mrp: 100,
//       discount: 10,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "16",
//       name: "Watermelon",
//       image: "watermelon.jpg",
//       unit: "piece",
//       mrp: 80,
//       discount: 50,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       id: "17",
//       name: "Sweetlime",
//       image: "sweetlime.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "18",
//       name: "Peach",
//       image: "peach.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 10,
//       inStock: false,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       id: "19",
//       name: "Dragon",
//       image: "dragon.jpg",
//       unit: "piece",
//       mrp: 60,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//   ];
//   let [fruitList, setFruitList] = useState(pList);
//   return (
//     <div className="product-list mx-auto w-50 justify-content-center">
//       {pList.map((e, index) => (
//         <>
//           <div key={product.id} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               width="100"
//               class="img-fluid"
//             />
//             <h3>{product.name}</h3>
//             <p>Price: ₹{product.mrp}</p>
//             <p>Discount: {product.discount}%</p>
//             <p>Unit: {product.unit}</p>
//             <p>Type: {product.type}</p>
//             <p style={{ color: product.inStock ? "green" : "red" }}>
//               {product.inStock ? "In Stock" : "Out of Stock"}
//             </p>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";
import Product from "./Product";

export default function ProductsPage(props) {
  let { productList } = props;
  return (
    <div className="container product-list mx-auto">
      <div className="row">
        {productList.map((e, index) => (
          <div key={e.id} className="col-3 mb-4">
            <Product product={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
