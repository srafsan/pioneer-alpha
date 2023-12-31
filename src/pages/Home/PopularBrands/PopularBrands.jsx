import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopularBrands = () => {
  return (
    <div className="py-[130px] bg-[#f3fcff]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="relative">
          <img src="https://i.ibb.co/5WRKb5b/Mask-Group.png" alt="" />
          <img
            className="absolute top-0 lg:top-[120px] lg:right-36"
            src="https://i.ibb.co/zfz5Z0h/base.png"
            alt=""
          />
          <div className="grid grid-cols-3 gap-5 absolute bottom-14 left-0 lg:top-36 lg:left-6">
            <img src="https://i.ibb.co/5xgnf1G/Logo.png" alt="" />
            <img src="https://i.ibb.co/h7tBLyj/Logo-1.png" alt="" />
            <img src="https://i.ibb.co/sssCFg0/Logo-2.png" alt="" />
            <img src="https://i.ibb.co/W01fZ5n/Logo-3.png" alt="" />
            <img src="https://i.ibb.co/r4XZwGf/Logo-4.png" alt="" />
            <img src="https://i.ibb.co/q12ndQw/Logo-5.png" alt="" />
          </div>
        </div>
        <div className="mx-auto max-w-md">
          <h2 className="text-4xl font-bold">Explore Most Popular Brands</h2>
          <p className="text-lg mt-6">
            Life is hard enough already. Let us <br /> make it a little easier.
          </p>
          <Link to="/all-products" className="mt-16 btn btn-outline">
            See all <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
