/**
 * Tipos TypeScript para ShopHub
 * Centraliza todas las interfaces y tipos del proyecto
 */

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  stock: number;
  description?: string;
  images?: string[];
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}