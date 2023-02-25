import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter(); 

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
 