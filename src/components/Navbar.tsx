const menu = ['About', 'Pricing', 'Review']

const Navbar = () => {
    return (
        <>
            <div className="z-50 absolute flex flex-row justify-between w-[100%] h-[91px] pl-[175px] pr-[175px] pt-[39px] ">
                <a className="text-16 font-bold leading-19 my-auto" >Logo</a>
                <div className="p-2 w-[357px] flex flex-row justify-between">
                    {menu.map((item, index) => <button className="text-16" key={index}>{item}</button>)}
                </div>
            </div>
        </>
    )
}

export default Navbar