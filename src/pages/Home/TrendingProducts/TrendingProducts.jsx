import { useContext, useState } from "react";
import { ProductsContext } from "../../../Providers/ProductsProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Import Swiper React components
import { A11y, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Card1 from "../../../components/Card1/Card1";

const TrendingProducts = () => {
  const { menShirt, laptops, furniture, watches } = useContext(ProductsContext);
  const [activeTab, setActiveTab] = useState("Interior");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-[70px]">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Shop Our Trending Products</h2>
        <p className="text-lg text-slate-500 mt-6">
          Life is hard enough already. Let us make it a <br /> little easier.
        </p>
      </div>
      <div className="my-14">
        <Tabs>
          <TabList className="tabs tabs-boxed flex justify-center">
            <Tab
              className={`tab ${activeTab === "Interior" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("Interior")}
            >
              Interior
            </Tab>
            <Tab
              className={`tab ${activeTab === "Fashion" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("Fashion")}
            >
              Fashion
            </Tab>
            <Tab
              className={`tab ${
                activeTab === "Technology" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("Technology")}
            >
              Technology
            </Tab>
            <Tab
              className={`tab ${
                activeTab === "Accessories" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("Accessories")}
            >
              Accessories
            </Tab>
          </TabList>
          {/* Tab 1 */}
          <TabPanel>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={100}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="mt-8"
            >
              {furniture?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          {/* Tab 2 */}
          <TabPanel>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="mt-8"
            >
              {menShirt?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          {/* Tab 3 */}
          <TabPanel>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="mt-8"
            >
              {laptops?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          {/* Tab 4 */}
          <TabPanel>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="mt-8"
            >
              {watches?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TrendingProducts;
