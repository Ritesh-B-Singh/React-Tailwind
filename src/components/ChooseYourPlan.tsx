import PlansCards from "./PlansCards"
import Podcast from '../assets/Podcast.png'

const ChooseYourPlan = () => {
  return (
    <>
          <div className="bg-cover bg-center h-[690px] flex justify-center items-center" style={{ backgroundImage: `url(${Podcast})` }}>
              <div className="h-[570px] w-[1100px] flex flex-col justify-between items-center text-center">
                  <div >
                      <div className="flex flex-col justify-between items-center w-[455px] h-[166px] pl-4 pr-4">
                          <div className="pb-2">
                              <h1 className="font-bold text-3xl pb-4 text-black">Choose your plan</h1>
                              <p className="text-black font-normal text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                          </div>
                          <div className="mb-1 pl-1 pr-1 rounded-[10px] shadow-md">
                              <button className="rounded-[10px] custom-opacity text-black font-normal pl-2 pr-2 pt-1 pb-1 text-sm">monthly</button>
                              <button className="rounded-[10px] text-black font-normal p-2 text-sm">yearly</button>
                          </div>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center w-[100%] h-[360px] ">
                      <PlansCards />
                  </div>
              </div>
          </div>
    </>
  )
}

export default ChooseYourPlan