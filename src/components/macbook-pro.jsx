import CtaLinks from "./cta-links.jsx";
import MacbookProBackground from "../assets/images/macbook-pro.jpg";

export default function MacbookPro () {
    return (
        <div className="">
            <div className="h-[580px] mobile:h-[548px] relative overflow-hidden">
                <div className="absolute top-10 flex items-center justify-center w-full flex-col">
                    <h1 className="text-black font-SfProBold text-[34px] mobile:text-[31px]">MacBook Pro</h1>
                    <h6 className="text-[19px] text-black mobile:text-[17px]">Mind-blowing. Head-turning.</h6>
                    <CtaLinks/>
                </div>
                <div className="h-full flex items-end justify-end ">
                    <img src={MacbookProBackground} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}