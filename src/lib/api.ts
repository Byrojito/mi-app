/**
 * Funciones para consumir la API de DummyJSON
 */

import { Product } from '@/types';

const BASE_URL = 'https://dummyjson.com';

/**
 * Obtiene la lista de productos del catálogo
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/products?limit=8&select=id,title,price,category,thumbnail,stock`
    );
    
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error en getProducts:', error);
    return [];
  }
}

/**
 * Obtiene los detalles completos de un producto por ID
 */
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener producto ${id}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error en getProductById(${id}):`, error);
    return null;
  }
}
