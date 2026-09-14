/**
 * ProductCard - Tarjeta para mostrar un producto en el catálogo
 */

'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/productos/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>

        <div className={styles.footer}>
          <div className={styles.priceStock}>
            <span className={styles.price}>${product.price}</span>
            <span className={styles.stock}>
              Stock: {product.stock}
            </span>
          </div>

          <button
            className={styles.button}
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? '➕ Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </Link>
  );
}
