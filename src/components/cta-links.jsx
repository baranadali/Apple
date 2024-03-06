import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

export default function CtaLinks() {
    return (
        <div>
            <div className="flex gap-10 mobile:gap-6 mt-4">
                <div className="flex items-center gap-1">
                    <Link className="text-science-blue text-[18px] mobile:text-[17px]" to="/">Learn more</Link>
                    <IoIosArrowForward className="text-science-blue flex items-center justify-center"/>
                </div>
                <div className="flex items-center gap-1">
                    <Link className="text-science-blue text-[18px] mobile:text-[17px]" to="/">Buy</Link>
                    <IoIosArrowForward className="text-science-blue flex items-center justify-center"/>
                </div>
            </div>
        </div>
    )
}