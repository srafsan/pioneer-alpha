import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsGlobe2, BsInstagram, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#0e4b80] text-white px-[170px] pt-[64px]">
        <div>
          <span className="footer-title text-xl mb-8">Shop</span>
          <a className="link link-hover">Gift Cards</a>
          <a className="link link-hover">SnipShop Blog</a>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">Sell</span>
          <a className="link link-hover">Sell on SnipShop</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Forums</a>
          <a className="link link-hover">Affiliates</a>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">About</span>
          <a className="link link-hover">SnipShop, Inc.</a>
          <a className="link link-hover">Policies</a>
          <a className="link link-hover">Investors</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Impact</a>
        </div>
        <div>
          <span className="footer-title text-xl mb-8">Help</span>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Trust & Safety</a>
          <a className="link link-hover">Privacy Settings</a>
          <a className="link link-hover">
            <button className="flex gap-1 mt-7 btn btn-outline btn-sm rounded-full text-white">
              <img src="https://i.ibb.co/xMvMtFd/Group-3.png" alt="" />
              Download the SnipShop App
            </button>
          </a>
          <a className="link link-hover mt-5">
            <div className="grid grid-flow-col gap-4">
              <a>
                <BsInstagram size="2em" />
              </a>
              <a>
                <BsFacebook size="2em" />
              </a>
              <a>
                <AiFillTwitterCircle size="2em" />
              </a>
              <a>
                <BsGlobe2 size="2em" />
              </a>
              <a>
                <BsPinterest size="2em" />
              </a>
            </div>
          </a>
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
