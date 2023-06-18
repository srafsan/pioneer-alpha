import { useEffect, useState } from "react";
// Import Swiper React components
import { A11y, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { AiOutlineArrowRight } from "react-icons/ai";
import Card2 from "../../../components/Card2/Card2";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div className="py-24">
      <div className="flex justify-center items-center relative">
        <h1 className="text-4xl text-center font-bold">
          Featured Products For <br /> Pre-Order
        </h1>
        <button className="mt-10 btn btn-outline absolute right-16">
          Discover our Products <AiOutlineArrowRight />
        </button>
      </div>
      <div className="mt-16">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
