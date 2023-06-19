import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SellEasilyBanner = () => {
  return (
    <div className="mb-[418px] lg:mb-0 lg:py-[130px] bg-[#f3fcff]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="mx-auto">
          <h2 className="text-4xl font-bold">Sell Easily on Socialmedia</h2>
          <p className="text-lg mt-6">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <Link to="/all-products" className="mt-16 btn btn-outline">
            See all <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/pzBCsRz/Mask-Group.png" alt="" />
          <img
            className="absolute top-0 lg:top-32 lg:left-28"
            src="https://i.ibb.co/34t4sq5/Rectangle-17.png"
            alt=""
          />
          <img
            className="absolute lg:top-24 lg:right-36"
            src="https://i.ibb.co/98466HC/image-49-1.png"
            alt=""
          />
          <div className="flex gap-5 absolute bottom-24 left-9 lg:bottom-36 lg:left-[120px]">
            <img src="https://i.ibb.co/bHW9D8s/image-50.png" alt="" />
            <img src="https://i.ibb.co/yq17Zk5/image-51-1.png" alt="" />
            <img
              className="hidden lg:block"
              src="https://i.ibb.co/4213rCg/image-52.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellEasilyBanner;
