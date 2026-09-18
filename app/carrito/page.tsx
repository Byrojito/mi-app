'use client';

/**
Página del Carrito
y contiene el formulario de checkout.
 * 1
 */

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { register } from 'module';
import { error } from 'console';

export default function CarritoPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart} =
    useCart();

  const [nombre, setNombre] = useState('');
  const [Correo, setCorreo] = useState('');
  const [mpago, setmpago] = useState('');
  const [mcondiciones, setcondicones] = useState('false');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [buyerName, setBuyerName] = useState('');


  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !Correo.trim() || !mpago.trim() || !mcondiciones.trim()) {
      return;
    }

    setBuyerName(nombre);
    setOrderPlaced(true);
    clearCart();

    
  };



  // Confirmación después de "comprar"
  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ¡Gracias, {buyerName} 
        </h1>
        <p className="text-gray-600 mb-8">
          Tu pedido fue confirmado correctamente.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  // Carrito vacío
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tu carrito está vacío
        </h1>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Tu carrito ({cartItems.length})
      </h1>

      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-gray-200 rounded-lg p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />

            <div className="flex-1">
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 border rounded hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <p className="w-20 text-right font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="text-right text-xl font-bold text-gray-900 mb-8">
        Total: ${getTotalPrice().toFixed(2)}
      </div>
      
      
      
      <button
        onClick={() => clearCart()}
        className="mb-6 text-sm text-gray-500 hover:text-red-600 underline"
      >
        Vaciar carrito
      </button>

      <form
        onSubmit={handleCheckout}
        className="border-t border-gray-200 pt-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-900">
          Datos de entrega
        </h2>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Correo de facturación
          </label>
          <input
            type="email"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Método de pago
          </label>
          <input
            type="select"
            value={mpago}
            onChange={(e) => setmpago(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Acepta los teminos y condiciones y la politica de tratamiento de datos
          </label>
          <input
            type="checkbox"
            value={mcondiciones}
            onChange={(e) => setcondicones(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded py-2 font-semibold hover:bg-blue-600 transition"
        >
          Confirmar compra
        </button>
      </form>
      

    </div>
  );
}