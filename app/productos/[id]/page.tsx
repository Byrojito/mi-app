/**
 * Página de Detalle de Producto
 * Server Component que obtiene un producto específico por ID
 */

import { getProductById } from '@/lib/api';
import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <ProductDetail product={product} />
    </div>
  );
}
