import CtaLinks from "./cta-links.jsx";
import AirpodsProBackground from "../assets/images/airpods-pro.jpeg";

export default function AirpodsProComp () {
    return (
        <div className="">
            <div className="h-[580px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-10 flex items-center justify-center w-full flex-col">
                    <h1 className="text-white font-SfProBold text-[34px] mobile:text-[31px]">Airpods Pro</h1>
                    <h6 className="text-[19px] text-white mobile:text-[17px]">Adaptive Audio. Now playing.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={AirpodsProBackground} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}