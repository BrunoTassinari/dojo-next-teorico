'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

type ProductType = {
    id: string;
    name: string;
    price: number;
}

export default function EditProduct() {
    const params = useParams()
    const id = params?.id as string

    const fetchProduct = (id: string) => {
        // Simulate fetching product data based on the ID from params
        setProduct({ id, name: `Product ${id}`, price: parseInt(id) * 10 })
    }

    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        console.log('Fetching product with ID:', id)
        fetchProduct(id);
    }, []);

    return (
        <div>
        <h1>Edit Product {params.id}</h1>
        <h2>{product?.name} - {product?.price}</h2>
        </div>
  );
}