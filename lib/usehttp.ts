//criar a funcao que faz o fethc (recebendo por parametro a url da api, METODO, BODY, HEADERS)
//http://localhost:3000/prodicts

import type { Product } from "@/types/product.types";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3001/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
