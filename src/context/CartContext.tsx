'use client';

/**
 * CartContext - Gestiona el estado global del carrito
 * Proporciona acceso a los items del carrito y funciones para manipularlo
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, CartContextType } from '@/types';

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Provider del carrito - envuelve la aplicación
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /**
   * Agregar un producto al carrito o incrementar cantidad si ya existe
   */
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // Buscar si el producto ya está en el carrito
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Si existe, aumentar la cantidad
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, agregar nuevo item
      return [
        ...prevItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        },
      ];
    });
  };

  /**
   * Eliminar un producto del carrito
   */
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  /**
   * Limpiar el carrito completamente
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Obtener el total de items en el carrito
   */
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook para usar el CartContext
 * Lanza error si se intenta usar fuera del CartProvider
 */
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}
