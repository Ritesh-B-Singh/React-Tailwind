import Polygon3 from '../assets/Polygon3.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
      <div className="relative h-[490px] flex justify-center">
        <img src={Polygon3} className="z-0 absolute top-1 w-[1520px] " />
        <div className="flex flex-col justify-between absolute z-20 items-center w-[100%] h-[100%]">
          <div className="w-[520px] h-[320px] text-black flex flex-col justify-between items-center text-center ">
            <div>
              <h1 className="font-bold text-4xl pt-10 pb-6">
                We have what you’re looking for
              </h1>
              <p className="font-medium text-xs text-[#8e54e9] pb-6 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type a
              </p>
            </div>
            <button className="bg-gradient-to-r mt-2 to-[#8e54e9] from-[#4776e6] w-[237px] text-white line-clamp-[30px] h-[60px] rounded-[10px] font-bold text-2xl">
              Get Started Now
            </button>
          </div>
          <div
            style={{ borderTop: '1px solid #FFFFFF' }}
            className="h-[74px] w-[1000px] pt-5 flex flex-row justify-between"
          >
            <p className="font-normal text-sm ">
              All Right Reserved @Copyright 2023
            </p>
            <div className="flex flex-row gap-9">
              <div className="flex flex-row gap-6">
                <p className="font-normal text-sm ">Terms of Service</p>
                <p className="font-normal text-sm ">Privacy Policy</p>
                <p className="font-normal text-sm ">Product</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src={facebook} className="w-[20px] h-[20px] " />
                <img src={youtube} className="w-[20px] h-[20px] " />
                <img src={insta} className="w-[20px] h-[20px] " />
                <img src={twitter} className="w-[20px] h-[20px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
