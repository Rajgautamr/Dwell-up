import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton , UserButton} from "@clerk/nextjs";
import Image from "next/image";
import Navbar from "./_components/Navbar";
export default function Home() {
  return (
    <div>
      <div className="fixed -z-[99999] object-fill"> <Image  src="/banner.jpg" width={2000} height={100} alt="banner"/></div>
      <Navbar/>
    </div>
  );
}
