import CtaLinks from "./cta-links.jsx";
import IpadBackground from "../assets/images/ipad.jpeg";

export default function Ipad () {
    return (
        <div className="">
            <div className="h-[580px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-10 flex items-center justify-center w-full flex-col">
                    <h1 className="text-black font-SfProBold text-[34px] mobile:text-[31px]">iPad</h1>
                    <h6 className="text-[19px] text-black mobile:text-[17px]">Lovable. Drawable. Magical.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={IpadBackground} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}