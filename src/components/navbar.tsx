import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";

export default function Navbar() {
    return (
        <nav className="h-15 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
            <div className="flex items-center gap-6">
                <img src="/logo.png" alt="logo-image" width={500} height={500} className="w-9 h-9"></img>
                <Link href="/" className="bg-background grid w-11 h-11 place-items-center text-white text-3xl rounded-full">
                    <MdHomeFilled/>
                </Link>
                <div className="bg-background hidden lg:flex items-center h-11 w-90 rounded-3xl px-3 gap-3 text-primary-text">
                    <GoSearch className="text-white shrink-0" size={22}/>
                    <input className="h-full w-full outline-none placeholder:text-primary-text" type="text" placeholder="What song in your mind" />
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="lg:flex hidden gap-2 text-secondary-text font-bold border-r-2 border-primary-text pr-6">
                    <a href="#" className="hover:text-primary-text">
                        Primary
                    </a>
                    <a href="#" className="hover:text-primary-text">
                        Support
                    </a>
                    <a href="#" className="hover:text-primary-text">
                        Download
                    </a>
                </div>
                <div>
                    <Link href="/Login" className="h-11 bg-white text-gray-950 hover:bg-secondary-text rounded-full font-bold grid px-6 place-items-center" >login</Link>
                </div>
            </div>
        </nav>
    )
}

