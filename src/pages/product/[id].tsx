import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product";
import { useRouter } from "next/router";
import { GetStaticProps } from "next"
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>camiseta x</h1>
        <span>R$ 19,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam facilis quisquam dolore id dolores sapiente explicabo, eius odio, sequi deserunt delectus ducimus optio dolorem quidem vitae nulla accusamus natus!</p>
        
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
   );
 }
 

 export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}