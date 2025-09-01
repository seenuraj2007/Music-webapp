"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { MdOutlineLibraryMusic } from "react-icons/md";

// ✅ Reusable song card component
function SongCard({ title, artist, cover }: { title: string; artist: string; cover: string }) {
  return (
    <div className="flex gap-2 cursor-pointer relative p-2 mb-4 items-center rounded-lg hover:bg-hover group">
      <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
        <FaTrash />
      </button>
      <Image
        src={cover}
        alt={title}
        width={300}
        height={300}
        className="h-10 w-10 object-cover rounded-md"
      />
      <div>
        <p className="text-primary-text font-semibold">{title}</p>
        <p className="text-secondary-text text-sm">By {artist}</p>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy data (replace with real songs later)
  const songs = [
    { title: "Midnight Echos", artist: "Neon Skyline", cover: "/cover-1.jpeg" },
    { title: "Ocean Dreams", artist: "Luna Waves", cover: "/cover-1.jpeg" },
    { title: "City Nights", artist: "DJ Mirage", cover: "/cover-1.jpeg" },
    { title: "Starlight", artist: "Aurora Sky", cover: "/cover-1.jpeg" },
    { title: "Lost Horizon", artist: "Echo Beats", cover: "/cover-1.jpeg" },
  ];

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`fixed left-2 top-15 bg-background z-40
        w-75 rounded-lg h-[90vh] p-2 overflow-y-auto
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-500 lg:translate-x-0`}
      >
        <div className="flex justify-between p-2 text-primary-text items-center mb-4">
          <h1 className="font-bold">Your Library</h1>
          <Link href="upload-song">
            <LuPlus size={20} />
          </Link>
        </div>

        {/* Songs */}
        {songs.map((song, index) => (
          <SongCard key={index} {...song} />
        ))}
      </aside>

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed left-5 bottom-5 bg-background 
        grid lg:hidden w-12 h-12 place-items-center 
        text-primary-text rounded-full z-[999] cursor-pointer shadow-md"
      >
        <MdOutlineLibraryMusic size={24} />
      </button>
    </div>
  );
}
