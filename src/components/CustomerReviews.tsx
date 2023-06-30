import ReviewCard from "./ReviewCard";
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Arrow from '../assets/Arrow.png'

const CustomerReviews = () => {
    return (
        <>
            <div className="h-[512px]" >
                <div className="h-[378px] mt-[57px] ml-[175px] " >
                    <div className="w-[460px] h-[110px] mb-8 ">
                        <h1 className="font-bold text-[40px] text-black">Review for customers</h1>
                        <p className="font-medium text-sm text-black" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>
                    <div className="relative flex flex-row gap-8 overflow-hidden ">
                        <div className="absolute w-[45px] h-[45px] shadow-lg top-[80px] custom-opacity rounded-[100px] flex justify-center items-center left-[994px] z-10 " >
                            <img src={Arrow} className="w-[40px] h-[40px] rounded-[80px] " />
                        </div>
                        <ReviewCard elevation="2xl" />
                        <ReviewCard elevation="" />
                        <ReviewCard elevation="" />
                    </div>
                </div>
                <div className="h-[15px] gap-4 flex flex-row justify-center w-[100%] mt-6" >
                    <img src={Vector2} className="w-[15px] h-[15px] " />
                    <img src={Vector3} className="w-[15px] h-[15px] " />
                    <img src={Vector3} className="w-[15px] h-[15px] " />
                    <img src={Vector3} className="w-[15px] h-[15px] " />
                    <img src={Vector3} className="w-[15px] h-[15px] " />
                </div>
            </div>
        </>
    )
}

export default CustomerReviews