// "use client"
import Image from "next/image";
import { useContext } from "react";
import { PlayerContext } from "../../layouts/Frontendlayout";


export default function Queue() {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("Player context must be within a provider");
    }

    const { isQueueModelOpen } = context; 

    if (!isQueueModelOpen) return null;
    return (
        <div className="fixed top-18 right-15 max-w-[300px] w-full h-[75vh] bg-black border-1 p-4 overflow-y-auto rounded-md z-50">
            <h2>Queue</h2>
            <div className="mt-8">
                <h2 className="text-white mb-3 font-bold">Now playing</h2>
                <div className="flex items-center  gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover">
                    <Image src="/cover-3.jpeg" width={300} height={300} alt="queue-image" className="w-10 h-10 object-cover rounded-md" />
                    <div>
                        <p className="text-primary font-semibold">Diamond</p>
                        <p className="text-sm text-secondary-text">Solid</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-white mb-3 font-bold">Queue list</h2>
                <div className="flex items-center  gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover">
                    <Image src="/cover-3.jpeg" width={300} height={300} alt="queue-image" className="w-10 h-10 object-cover rounded-md" />
                    <div>
                        <p className="text-white font-semibold">Diamond</p>
                        <p className="text-sm text-secondary-text">Solid</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
