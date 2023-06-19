import { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsProvider";

// Import Swiper React components
import { A11y, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Card3 from "../../../components/Card3/Card3";

const ShopByCategory = () => {
  const {
    menShirt,
    laptops,
    furniture,
    watches,
    smartPhones,
    fragrance,
    skincare,
    groceries,
    homeDecoration,
    tops,
    womenDresses,
    womenShoes,
    womenWatches,
    womenBags,
    jewellery,
    sunglasses,
    motorcycle,
    lighting,
  } = useContext(ProductsContext);

  return (
    <div className="py-[90px]">
      <div>
        <div>
          <h1 className="text-4xl font-bold">Shop By Category</h1>
          <p className="text-lg text-gray-500 mt-6 mb-16">
            Life is hard enough already. Let us make it a little easier.
          </p>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mt-8 lg:w-[90%]"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menShirt.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {laptops.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {furniture.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {motorcycle.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {smartPhones.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fragrance.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skincare.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {groceries.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {homeDecoration.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tops.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {womenDresses.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {womenShoes.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {womenWatches.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {womenBags.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jewellery.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sunglasses.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {lighting.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {watches.slice(0, 9).map((laptop) => (
              <Card3 key={laptop.id} product={laptop} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopByCategory;
