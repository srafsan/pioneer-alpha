import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsGlobe2, BsInstagram, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#0e4b80] text-white px-[170px] pt-[64px]">
        <div>
          <span className="footer-title text-xl mb-8">Shop</span>
          <Link className="link link-hover">Gift Cards</Link>
          <Link className="link link-hover">SnipShop Blog</Link>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">Sell</span>
          <Link className="link link-hover">Sell on SnipShop</Link>
          <Link className="link link-hover">Terms</Link>
          <Link className="link link-hover">Forums</Link>
          <Link className="link link-hover">Affiliates</Link>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">About</span>
          <Link className="link link-hover">SnipShop, Inc.</Link>
          <Link className="link link-hover">Policies</Link>
          <Link className="link link-hover">Investors</Link>
          <Link className="link link-hover">Careers</Link>
          <Link className="link link-hover">Press</Link>
          <Link className="link link-hover">Impact</Link>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">Help</span>
          <Link className="link link-hover">Help Center</Link>
          <Link className="link link-hover">Trust & Safety</Link>
          <Link className="link link-hover">Privacy Settings</Link>
          <Link className="link link-hover">
            <button className="flex gap-1 mt-7 btn btn-outline btn-sm rounded-full text-white">
              <img src="https://i.ibb.co/xMvMtFd/Group-3.png" alt="" />
              Download the SnipShop App
            </button>
          </Link>
          <Link className="link link-hover mt-5">
            <div className="grid grid-flow-col gap-4">
              <Link>
                <BsInstagram size="2em" />
              </Link>
              <Link>
                <BsFacebook size="2em" />
              </Link>
              <Link>
                <AiFillTwitterCircle size="2em" />
              </Link>
              <Link>
                <BsGlobe2 size="2em" />
              </Link>
              <Link>
                <BsPinterest size="2em" />
              </Link>
            </div>
          </Link>
        </div>
      </footer>
      <footer className="footer px-[170px] py-4 bg-[#232347] text-white border-base-300">
        <div className="items-center grid-flow-col">
          <p>© 2021-2023 SnipShop.com</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Terms of Services</p>
            <p>Privacy</p>
            <p>Interest based Ads</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
