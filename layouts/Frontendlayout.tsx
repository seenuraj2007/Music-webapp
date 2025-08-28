"use client"
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/navbar";
import Queue from "@/components/Queue";
import Sidebar from "@/components/Sidebar";
import React, { createContext, useState } from "react";

type PlayerContextType = {
    isQueueModelOpen: boolean;
    setQueueModelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function Frontendlayout({ children, }: Readonly<{ children: React.ReactNode }>) {

    const [isQueueModelOpen, setQueueModelOpen] = useState(false);
    return (
        <PlayerContext.Provider value={{
            isQueueModelOpen,
            setQueueModelOpen
        }}>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <Sidebar />
                    <Queue />
                    <MusicPlayer />
                    {children}
                </main>
            </div>
        </PlayerContext.Provider>
    )
}
