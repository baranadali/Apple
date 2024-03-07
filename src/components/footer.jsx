import {FooterItem} from '../datas/footer.js'

import {Link} from "react-router-dom";
export default function Footer () {
    return (
        <div className="bg-athens">
            <div className=" w-full h-full max-w-[980px] mx-auto py-8">
                    <div className="flex grid-cols-5 mobile:grid-cols-1 gap-y-8 justify-between w-full">
                        {FooterItem.map((item, index) => (
                            <div key={index} className="">
                                <h3 className="text-sm text-black mb-3">{item.title}</h3>
                                    {item.items.map((subItem, index) => (
                                        <li key={index} className="">
                                            <Link
                                                className="text-[12px] text-appleblack-72 transition-all hover:underline"
                                                to={subItem.href}>{subItem.name}</Link>
                                        </li>
                                    ))}
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}