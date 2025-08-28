"use client"
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward, IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { LuRepeat1 } from "react-icons/lu";
import { MdOutlineQueueMusic } from "react-icons/md";
import { PlayerContext } from "../../layouts/Frontendlayout";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currenttime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [previousvolume, setPreviousVolume] = useState(0);

  const context = useContext(PlayerContext);
  if (!context) throw new Error("Player context must be within a provider");
  const { isQueueModelOpen, setQueueModelOpen } = context;

  const togglePlayButton = () => {
    if (!audioRef.current) return;
    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isplaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
  }, []);

  const formateTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(previousvolume);
      if (audioRef.current) {
        audioRef.current.volume = previousvolume / 100;
      }
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    }
  };

  return (
    <div className="fixed bg-black bottom-0 left-0 w-full text-white px-3 py-3 shadow-md z-50">
      <audio ref={audioRef} src="Saayaali-MassTamilan.com.mp3/" preload="auto"></audio>

      {/* Main wrapper flex → row on desktop, col on mobile */}
      <div className="max-w-8xl w-[95%] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        
        {/* Song info */}
        <div className="flex gap-3 items-center w-full md:w-auto">
          <Image src="/cover-2.jpeg" alt="cover-image" width={50} height={50} className="w-12 h-12 rounded-md object-cover" />
          <div className="text-xs md:text-sm">
            <p className="truncate max-w-[100px] md:max-w-none">Bicycle</p>
            <p className="text-gray-400">Emmuel</p>
          </div>
        </div>

        {/* Song controls */}
        <div className="max-w-[400px] w-full flex items-center flex-col gap-2">
          <div className="flex gap-4 justify-center">
            <button className="text-lg md:text-xl text-secondary-text">
              <IoMdSkipBackward />
            </button>
            <button
              onClick={togglePlayButton}
              className="bg-white text-black grid rounded-full w-10 h-10 place-items-center">
              {isplaying ? <IoMdPause /> : <IoMdPlay />}
            </button>
            <button className="text-lg md:text-xl text-secondary-text">
              <IoMdSkipForward />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full flex justify-center items-center gap-1 md:gap-2">
            <span className="text-xs md:text-sm">{formateTime(currenttime)}</span>
            <input
              onChange={handleSeek}
              type="range"
              min="0"
              max={duration}
              value={currenttime}
              className="w-full outline-none h-1 bg-zinc-700 rounded-md appearance-none accent-white"
            />
            <span className="text-xs md:text-sm">{formateTime(duration)}</span>
          </div>
        </div>

        {/* Volume + other controls */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-center">
          <button>
            <LuRepeat1 />
          </button>
          <button
            onClick={() => setQueueModelOpen(!isQueueModelOpen)}
            className="text-secondary-text text-lg md:text-xl cursor-pointer">
            <MdOutlineQueueMusic />
          </button>
          {volume === 0 ? (
            <button onClick={toggleMute} className="text-secondary-text text-lg md:text-xl">
              <IoMdVolumeOff />
            </button>
          ) : (
            <button onClick={toggleMute} className="text-secondary-text text-lg md:text-xl">
              <IoMdVolumeHigh />
            </button>
          )}
          <input
            onChange={handleVolumeChange}
            value={volume}
            type="range"
            min="0"
            max="100"
            className="w-[80px] md:w-[100px] outline-none h-1 bg-zinc-700 accent-white appearance-none"
          />
        </div>
      </div>
    </div>
  );
}
