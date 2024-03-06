import Header from "../components/header.jsx";
import Video from "../assets/images/vision.mp4"
import VisualImage from '../assets/images/vision-logo.png'

import {Link} from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


export default function Homepage() {
    return (
        <div>
            <Header bgcolor="rgba(22, 22, 23, .8)"/>
                <div className="relative bg-red-300">
                    <video className="object-cover mobile:h-[500px]" width='100%' height='100%' loop autoPlay muted playsInline>
                        <source src={Video}/>
                    </video>
                    <div className="absolute bottom-16 flex flex-col items-center justify-center w-full gap-2">
                        <div>
                            <img className="w-1/2 mobile:w-[550px] mobile:h-[100%] mx-auto h-auto" src={VisualImage}/>
                        </div>
                        <div className="w-1/2 mx-auto">
                            <h3 className="text-shark text-[28px] mobile:text-[19px] text-center leading-[23px]">Welcome to the era of spatial computing.</h3>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex items-center gap-1">
                                <Link className="text-science-blue text-[21px] mobile:text-[17px]" to="/">Learn more</Link>
                                <IoIosArrowForward className="text-science-blue flex items-center justify-center" />
                            </div>
                            <div className="flex items-center gap-1">
                                <Link className="text-science-blue text-[21px] mobile:text-[17px]" to="/">Buy</Link>
                                <IoIosArrowForward className="text-science-blue flex items-center justify-center" />
                            </div>
                        </div>
                    <div/>
                </div>
            </div>
        </div>
    )
}