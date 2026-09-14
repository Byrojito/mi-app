import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-8">Producto no encontrado</p>
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}
