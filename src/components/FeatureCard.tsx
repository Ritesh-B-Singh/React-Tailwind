type Payload = {
  margin: string
}

const FeatureCard = ({ margin }: Payload) => {
  return (
    <>
      {margin === '5' ? (
        <div
          style={{ border: '1px solid #7A3199' }}
          className={`col-span-1 p-5 shadow-md w-[280px] h-[160px] mt-5 rounded-xl `}
        >
          <h1 className="font-bold text-2xl pb-4 text-black ">
            Interactive Features
          </h1>
          <p className="text-black font-normal text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been
          </p>
        </div>
      ) : (
        <div
          style={{ border: '1px solid #7A3199' }}
          className={`col-span-1 p-5 shadow-md w-[280px] h-[160px] rounded-xl `}
        >
          <h1 className="font-bold text-2xl pb-4 text-black ">
            Interactive Features
          </h1>
          <p className="text-black font-normal text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been
          </p>
        </div>
      )}
    </>
  )
}

export default FeatureCard
