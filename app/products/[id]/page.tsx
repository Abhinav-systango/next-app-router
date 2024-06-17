import { fetchProducts } from "@/actions";
import BackButton from "@/components/backButton";
import Product from "@/components/product";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const all_products: ProductType[] = await fetchProducts();

  console.log("🚀 ~ page ~ all_products:", all_products);

  const productId = parseInt(params.id, 10); // Convert params.id string to a number
  const product = all_products.find((item) => item.id === productId);
  console.log("🚀 ~ page ~ product:", product);

  return (
    <div className="flex h-screen">
      <div className="px-4 overflow-auto">
        {all_products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
      <div className="flex-1 h-full py-10">
        {product ? (
          <div className="px-20">
            <div>
              <BackButton />
            </div>
            <p className="text-2xl font-semibold uppercase leading-8 text-center">
              {product.name}
            </p>
            <div className="flex mt-10 gap-20">
              <Image
                src={product.image_src[0]}
                alt={product.name[0]}
                width={300}
                height={300}
                className=""
              />
              <div className="flex flex-col">
                <p className="text-xl font-semibold leading-5 mt-10">
                  {product.vendor}
                </p>
                <p className="text-sm">{product.tag}</p>

                <div className="flex items-center">
                  <span className="text-xl text-blue-800 ">
                    ${product.price}{" "}
                  </span>
                  <span className="line-through ml-10">
                    ${product.compare_at_price}
                  </span>
                </div>

                <div className="mt-10">
                  Option:
                  {product.options.map((item) => (
                    <div className="ml-10" key={Math.random()}>
                      <div className="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 "
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm"
                        >
                         {item.value}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
