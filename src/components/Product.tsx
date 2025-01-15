
import { useState } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}
const productExample: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "Powerful laptop for work and play",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "Latest flagship smartphone",
    category: "Electronics",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 20,
    description: "Comfortable cotton t-shirt",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Headphones",
    price: 150,
    description: "Noise-canceling headphones",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Book",
    price: 15,
    description: "Bestselling novel",
    category: "Books",
  },
];

const Product = () => {
  const [selectedProductId, setProduct] = useState<number>(1);
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setProduct(e.target.value);
  };
 return (
   <div>
     <ul>
       {productExample.map((item) => (
         <li key={item.id}>
           <label>
             <input
               type="radio"
               value={item.id.toString()} // Ensure value is a string
               onChange={handleChange}
               checked={+selectedProductId === item.id}
             />
             {item.name} - ${item.price}
           </label>
         </li>
       ))}
     </ul>
     <p>
       Selected Product:{" "}
       {productExample.find((p) => p.id === +selectedProductId)?.name || "None"}
     </p>
   </div>
 );
};

export default Product;
