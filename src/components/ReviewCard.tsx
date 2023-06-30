import Lolla from '../assets/Lolla.png'
import Vector1 from '../assets/Vector1.png'

type Payload = {
    elevation: string
}

const ReviewCard = ({ elevation } : Payload ) => {
    return (
        <>
            <div style={{ border: '1px solid rgba(225, 166, 255, 0.4)' }} className={`border border-purple-200 h-[220px] w-[465px] pl-[48px] pr-[48px] pt-[36px] pb-[36px] gap-[10px] rounded-[10px] shadow-${elevation}`}>
                <div className="h-[166px] w-[370px]" >
                    <div className="h-[70px] w-[225px] gap-[24px] text-black flex flex-row mb-2">
                        <img src={Lolla} className="h-[70px] w-[70px] rounded-[57px]" />
                        <div className="w-[132px] h-[68px]">
                            <div className="h-[40px] w-[88px] mb-2 ">
                                <h1 className="font-bold text-base " >Lolla Smith</h1>
                                <p className="font-normal text-sm " >Microsoft</p>
                            </div>
                            <div className="w-[100%] flex flex-row gap-2" >
                                <img src={Vector1} className="w-[17px] h-[16px]" />
                                <img src={Vector1} className="w-[17px] h-[16px]" />
                                <img src={Vector1} className="w-[17px] h-[16px]" />
                                <img src={Vector1} className="w-[17px] h-[16px]" />
                                <img src={Vector1} className="w-[17px] h-[16px]" />
                            </div>
                        </div>
                    </div>
                    <p className="font-normal text-xs text-black " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard