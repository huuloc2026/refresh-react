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

const ProductSelected = () => {
  const [selectedProductId, setProduct] = useState<number[]>([]);

  const handleChange = (id: number) => {
    setProduct((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h1>Product Selected with Checkbox</h1>
      <ul>
        {productExample.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                value={item.id}
                onChange={() => handleChange(item.id)}
                checked={selectedProductId.includes(item.id)}
              />
              {item.name} - ${item.price}
            </label>
          </li>
        ))}
      </ul>
      <p>Selected Products: {selectedProductId.join(", ")}</p>
    </div>
  );
};

export default ProductSelected;
