// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Reviews = () => {
  return (
    <div className="my-[103px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[82px] justify-center items-center">
            <img
              className="rounded-r-3xl"
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80"
              alt=""
            />
            <div className="w-2/3">
              <h2 className="text-lg font-bold">Justin Pierre</h2>
              <p className="text-gray-500">Product Seller</p>
              <h4 className="text-xl font-bold mt-10 italic">
                “In 2 years, my business went from just me and my Shop site to
                40 employees, my own fulfillment center and over 22 million
                dollars in revenue.”
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[82px] justify-center items-center">
            <img
              className="rounded-r-3xl"
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
            <div className="w-2/3">
              <h2 className="text-lg font-bold">Justin Pierre</h2>
              <p className="text-gray-500">Product Seller</p>
              <h4 className="text-xl font-bold mt-10 italic">
                “In 2 years, my business went from just me and my Shop site to
                40 employees, my own fulfillment center and over 22 million
                dollars in revenue.”
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[82px] justify-center items-center">
            <img
              className="rounded-r-3xl"
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80"
              alt=""
            />
            <div className="w-2/3">
              <h2 className="text-lg font-bold">Alexander Lee</h2>
              <p className="text-gray-500">Customer Support</p>
              <h4 className="text-xl font-bold mt-10 italic">
                “Working in customer support, I can confidently say that this
                platform provides exceptional assistance to users. The team is
                always prompt, friendly, and goes above and beyond to resolve
                any queries or issues customers may have.”
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[82px] justify-center items-center">
            <img
              className="rounded-r-3xl"
              src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="w-2/3">
              <h2 className="text-lg font-bold">Emily Smith</h2>
              <p className="text-gray-500">Fashion Blogger</p>
              <h4 className="text-xl font-bold mt-10 italic">
                “As a fashion blogger, I rely on this platform to discover and
                showcase the latest trends. The vast collection of products and
                the seamless browsing experience make it a go-to platform for
                fashion enthusiasts like me.”
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
