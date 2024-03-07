import CtaLinks from "./cta-links.jsx";
import TradeBackground from "../assets/images/trade.jpeg";

export default function Trade () {
    return (
        <div className="">
            <div className="h-[580px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-10 flex items-center justify-center w-full flex-col">
                    <h1 className="text-black font-SfProBold text-[34px] mobile:text-[31px]">Trade In</h1>
                    <h6 className="text-[19px] text-black mobile:text-[17px] w-1/3 mobile:w-[60%] text-center">Get $180-$620 in credit when you trade in iPhone 11 or heigher.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={TradeBackground} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}