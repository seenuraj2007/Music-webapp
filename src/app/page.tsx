import Allsong from "@/components/Allsong";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/navbar";
import Queue from "@/components/Queue";
import Sidebar from "@/components/Sidebar";
import { TbLayoutNavbar } from "react-icons/tb";
import Frontendlayout from "../../layouts/Frontendlayout";


export default function Home() {
  return (
    <Frontendlayout>
      <div >
        <Allsong />
      </div>
    </Frontendlayout>
  );
}
