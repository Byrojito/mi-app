/**
 * Página Principal - Catálogo de Productos
 * Server Component que obtiene los productos de la API
 */

import { getProducts } from '@/lib/api';
import ProductGrid from '@/components/ProductGrid';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">ShopHub</h1>
        <p className="text-gray-600">
          Descubre nuestro catálogo de productos de calidad
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
