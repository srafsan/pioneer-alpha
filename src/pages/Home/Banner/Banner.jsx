import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-300 to-teal-200 flex flex-col items-center text-gray-500">
        <div className="lg:flex gap-8 max-w-screen-xl hidden">
          <p>Jewelry & Accessories</p>
          <p>Cloths & Shoes</p>
          <p>Home & Living</p>
          <p>Wedding & Party</p>
          <p>Toys & Entertainment</p>
          <p>Art & Collectables</p>
          <p>Craft Supplies and Tools</p>
          <p>Vintage</p>
        </div>
      </div>

      <div
        className="hero lg:h-[80vh]"
        style={{ backgroundImage: `url("https://i.ibb.co/XsLvGhw/base.png")` }}
      >
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <span className="text-xs uppercase">
              100% Quality, 100% Satisfaction
            </span>
            <h3 className="text-6xl font-extrabold mt-4">
              Where the world comes to shop
            </h3>
            <p className="mt-7 text-lg">
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </p>
            <div className="flex justify-between items-center mt-[70px]">
              <Link
                to="all-products"
                className="btn btn-neutral rounded-[42px] w-[145px]"
              >
                Shop Now
              </Link>
              <p className="text-gray-600">
                Starting from <br />{" "}
                <span className="font-bold text-3xl text-black">$110.0</span>
              </p>
            </div>
          </div>

          {/* 2nd COLUMN */}
          <div className="lg:grid grid-cols-4 gap-4 hidden">
            {/* First Column  */}
            <div className="col-span-3">
              <img
                className="border-[15px] border-blue-400 rounded-full"
                src="https://i.ibb.co/71HgKZN/image-removebg-preview-49-2.png"
                alt=""
              />
            </div>
            {/* <!-- Second Column --> */}
            <div className="col-span-1">
              <img src="https://i.ibb.co/zJMNTJp/Product-02.png" alt="" />
              <img
                className="mt-6"
                src="https://i.ibb.co/LZpKnyG/Product-01.png"
                alt=""
              />
              <button className="btn btn-neutral btn-circle ml-10 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
