import FeatureCard from "./FeatureCard"

const CourseDetails = () => {
    return (
      <>
        <div className="absolute top-[750px] w-[100%] h-[530px] flex flex-row justify-center">
          <div style={{ flex: '1' }} className="pl-[175px] pt-[80px] h-[100%]">
            <div className="h-[400px] w-[550px] grid grid-cols-2 gap-12">
              <FeatureCard margin="0" />
              <FeatureCard margin="5" />
              <FeatureCard margin="0" />
              <FeatureCard margin="5" />
            </div>
          </div>
          <div style={{ flex: '1' }} className="pl-[75px] pt-[125px] h-[100%]">
            <div className="h-[274px] w-[416px] z-50 flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-5xl pb-8 text-black ">
                  About the course
                </h1>
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting in ustry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <button className="bg-gradient-to-r to-[#8e54e9] from-[#4776e6] w-[237px] line-clamp-[30px] h-[74px] rounded-[10px] font-bold text-2xl">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default CourseDetails