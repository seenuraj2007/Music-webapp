import Image from "next/image";
import { IoMdPlay } from "react-icons/io";


export default function Allsong() {
    return (
        <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
            <h2 className="text-2xl text-white mb-3 font-semibold">New Songs</h2>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                    <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover relative group">
                <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-po">
                        <IoMdPlay/>
                    </button>
                    <Image src="/cover-1.jpeg" alt="cover-image" width={500} height={500} className="w-full h-50 object-cover rounded-md " />
                    <p className="text-primary-text font-semibold">Rain On Marbel Streets</p>
                    <p className="text-secondary-text text-sm font-semibold">By the lanterns</p>
                </div>
            </div>
        </div>
    )
}
