'use client';

/**
 * Header - Barra de navegación persistente
 */

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1> ShopHub</h1>
        </Link>

        <nav className={styles.nav}>
          <span className={styles.cartLink}>
            🛒 Carrito ({totalItems})
          </span>
        </nav>
      </div>
    </header>
  );
}
