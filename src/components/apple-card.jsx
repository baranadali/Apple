import CtaLinks from "./cta-links.jsx";
import AppleCardBackground from "../assets/images/apple-card.jpeg";

export default function AppleCard () {
    return (
        <div className="">
            <div className="h-[580px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-10 flex items-center justify-center w-full flex-col">
                    <h1 className="text-black font-SfProBold text-[34px] mobile:text-[31px]">Apple Card</h1>
                    <h6 className="text-[19px] text-black mobile:text-[17px] w-1/3 mobile:w-1/2 text-center">Get up to 3% Daily Cash Back with every purchase.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={AppleCardBackground} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}