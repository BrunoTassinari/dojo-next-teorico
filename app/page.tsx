"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/usehttp";
import type { Product } from "@/types/product.types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-2xl">
        {/* skeleton */}
        <div className="bg-gray-300 animate-pulse h-6 w-full mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-4 w-full mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between bg-amber-200">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow mb-4 w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
