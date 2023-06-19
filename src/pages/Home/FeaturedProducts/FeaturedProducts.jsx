import { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsProvider";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card2 from "../../../components/Card2/Card2";
import { A11y, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="py-24">
      <div className="flex justify-center items-center relative">
        <h1 className="mb-10 text-3xl lg:text-4xl text-center font-bold">
          Featured Products For <br /> Pre-Order
        </h1>
        <Link
          to="/all-products"
          className="mb-[-140px] lg:mb-0 lg:mt-10 btn btn-outline absolute right-16"
        >
          Discover our Products <AiOutlineArrowRight />
        </Link>
      </div>
      <div className="mt-16">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card2 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
