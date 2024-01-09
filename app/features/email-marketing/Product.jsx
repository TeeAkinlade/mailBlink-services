import { products } from "@/constants";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <section className="md:mt-28 mt-20 max-width md:px-12 padding-y flex flex-col md:h-[80%] h-fit justify-center">
        <div className="z-[2] mb-16 text-center flex-center flex-col px-8">
          <h2 className=" font-bold text-ui_primary lg:text-[2.5rem] md:text-[2.1rem] text-[34px] md:leading-[3rem] leading-[2.5rem]">
            Our services and products
          </h2>
          <p className=" text-primaryBlack md:text-[16px] text-[14px] mt-5 md:w-[40%] w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            similique fugit.
          </p>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex-center md:flex-row flex-col gap-7 ${product.position} px-8 mb-32 sm:mb-28 md:mb-0 bottom-7`}>
            {product.variations.map((variation, index) => (
              <ProductCard
                key={index}
                bg={variation.bg}
                top={variation.top}
                src={variation.image}
                title={variation.title}
                details={variation.details}
              />
            ))}
          </div>
        ))}
    </section>
  );
};