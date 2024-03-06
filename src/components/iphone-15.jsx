import Iphone15Background from '../assets/images/iphone-15.jpg'
import CtaLinks from "./cta-links.jsx";

export default function Iphone15 () {
    return (
        <div>
            <div className="h-[736px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-20 flex items-center justify-center w-full flex-col">
                    <h1 className="black font-SfProBold text-[42px] mobile:text-[31px]">iPhone 15</h1>
                    <h6 className="text-[24px] black mobile:text-[19px]">New camera. New design. Newphoria.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={Iphone15Background} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}