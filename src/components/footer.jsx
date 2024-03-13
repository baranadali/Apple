import {FooterItem} from '../datas/footer.js'
import React, { useState } from 'react';


import {Link} from "react-router-dom";
export default function Footer () {
    const [submenuVisibility, setSubmenuVisibility] = useState({});
    const toggleSubMenu = (index) => {
        setSubmenuVisibility({
            ...submenuVisibility,
            [index]: !submenuVisibility[index]
        });
    };

    return (
        <div className="bg-athens mobile:px-4">
            <div className=" w-full h-full max-w-[980px] mx-auto py-8 flex flex-col gap-14">
                <div className="flex mobile:flex-col justify-between gap-y-8 mobile:gap-y-4 w-full">
                    {FooterItem.map((item, index) => (
                        <div key={index} className="pb-2 mobile:border-b mobile:border-[#cececf]">
                            <h3 onClick={() => toggleSubMenu(index)}
                                className="text-[12px] text-black mb-1 font-SfProSemiBold ">{item.title}</h3>
                            {(submenuVisibility[index] || window.innerWidth >= 768) && <>
                                {item.items.map((subItem, index) => (
                                    <li key={index} className="">
                                        <Link
                                            className="text-[12px] text-[#444445] transition-all hover:underline"
                                            to={subItem.href}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </>}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between border-t border-[#cececf] pt-6 mobile:flex-col mobile:items-start mobile:gap-1">
                    <div className="copyright">
                        <p className="text-[12px] text-appleblack-72">Copyright © 2024 Apple Inc. All rights reserved.</p>
                    </div>
                    <div className="menu">
                        <ul className="flex">
                            <Link className="text-[12px] text-appleblack-72 border-r border-[#cececf] pr-3 mobile:pr-1 transition-all hover:underline" to="/privacy-policy">Privacy Policy</Link>
                            <Link className="text-[12px] text-appleblack-72 border-r border-[#cececf] px-3 mobile:px-2 transition-all hover:underline" to="/terms-of-use">Terms of Use</Link>
                            <Link className="text-[12px] text-appleblack-72 border-r border-[#cececf] px-3 mobile:px-2 transition-all hover:underline" to="/salens-and-refuns">Salens and Refuns</Link>
                            <Link className="text-[12px] text-appleblack-72 border-r border-[#cececf] px-3 mobile:px-2 transition-all hover:underline" to="/legal">Legal</Link>
                            <Link className="text-[12px] text-appleblack-72 border-r border-[#cececf] px-3 mobile:px-2 transition-all hover:underline" to="/sitemap">Site Map</Link>
                        </ul>
                    </div>
                    <div className="location">
                        <p className="text-[12px] text-appleblack-72">United States</p>
                    </div>
                </div>
            </div>
        </div>
    )
}