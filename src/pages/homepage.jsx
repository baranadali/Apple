import Header from "../components/header.jsx";
import Video from "../assets/images/vision.mp4"
import VisualImage from '../assets/images/vision-logo.png'

import {Link} from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Iphone15Pro from "../components/iphone-15-pro.jsx";
import Iphone15 from "../components/iphone-15.jsx";
import CtaLinks from "../components/cta-links.jsx";


export default function Homepage() {
    return (
        <div>
            <Header bgcolor="rgba(22, 22, 23, .8)"/>
            <div className="relative h-[748px] mobile:h-auto">
                    <video className="object-cover mobile:h-[500px] h-full" width='100%' height='100%' loop autoPlay muted playsInline>
                        <source src={Video}/>
                    </video>
                    <div className="absolute bottom-16 mobile:bottom-8 flex flex-col items-center justify-center w-full gap-2">
                        <div className="h-[36px] mobile:h-[28px] mobile:w-full">
                            <img className="w-full h-full mx-auto object-cover" src={VisualImage}/>
                        </div>
                        <div className="w-1/2 mx-auto">
                            <h3 className="text-shark text-[24px] mobile:text-[19px] text-center leading-[23px]">Welcome to the era of spatial computing.</h3>
                        </div>
                        <CtaLinks/>
                    <div/>
                </div>
            </div>
            <Iphone15Pro/>
            <Iphone15/>
        </div>
    )
}