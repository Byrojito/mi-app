This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Decisiones de Arquitectura y Cambios del Parcialexplicando técnicamente lo implementado:

1. Evolución del contexto:
Se cambio el hecho de que se agregaron distintas y nuevas funciones a la parte del carrito, dado que antes solo tenia el contador, ahora tiene una pagina en si, donde se maneja tanto el borrado del carrito el calculo de los productos, entre otras mas como el formulario. En este caso, para asegurar la inmutabulidad de la información al manipular las cantidades y productos de memoria dentro de CartContext se evaluo por medio de que funciona por Index lo que hace que se persista y a su vez se maneja logicamente cada producto.

2. Cálculo de Totales:
Se hizo los calculos sabiendo que si ya hay un producto se acumule si se va a comprar o se agrege si no esta, del mismo modo, pues se almacena directamente y se actualiza los valores tanto para restar y sumar.

3. Arquitectura del formulario
Desde react se crearon las constantes para el nombre, el email, el metodo de pago y el checkout, del mismo modo, se pusieron los type de estos, se puso logicamente que para continuar con la compra deben estar llenos los campos y cada vez que esto funcione se borra el carrito y empieza desde 0 gracias a que ya se completo el formulario.
