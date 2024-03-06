import Iphone15ProBackground from '../assets/images/iphone-15-pro.png'
import Iphone15ProBackgroundMobile from '../assets/images/iphone-15-pro-mobile.jpg'
import CtaLinks from "./cta-links.jsx";

export default function Iphone15Pro () {
    return (
        <div>
            <div className="h-[736px] mobile:h-[548px] bg-black relative overflow-hidden">
                <div className="absolute top-20 flex items-center justify-center w-full flex-col">
                    <h1 className="text-white font-SfProBold text-[42px] mobile:text-[31px]">iPhone 15 Pro</h1>
                    <h6 className="text-[24px] text-white mobile:text-[19px]">Titanium. So strong. So Light. So Pro.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={Iphone15ProBackground} className="mobile:hidden" />
                    <img src={Iphone15ProBackgroundMobile} className="hidden mobile:block" />
                </div>
            </div>
        </div>
    )
}