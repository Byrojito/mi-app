/**
 * ProductDetail - Vista detallada de un producto
 */

'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetail.module.css';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();


  const handleAddToCart = () => {
    addToCart(product);
  };


  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Volver al catálogo
      </Link>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.mainImage}
          />

          {product.images && product.images.length > 0 && (
            <div className={styles.thumbnails}>
              {product.images.slice(0, 3).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  className={styles.thumbnail}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.meta}>
            <span className={styles.category}>{product.category}</span>
            <span className={styles.stock}>
              {product.stock > 0
                ? `${product.stock} en stock`
                : 'Agotado'}
            </span>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.price}>${product.price}</span>
          </div>

          {product.description && (
            <div className={styles.description}>
              <h2>Descripción</h2>
              <p>{product.description}</p>
            </div>
          )}

          <button
            className={styles.addButton}
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? '🛒 Agregar al carrito' : 'Agotado'}
          </button>
        </div>
      </div>

    </div>
  );
}
