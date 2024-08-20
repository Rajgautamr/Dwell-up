"use client"

import { ModeToggle } from "@/components/ui/mode-toggle";
import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="w-full h-20 bg-white  lg:w-2/3  font-semibold font-sans  mx-auto dark:bg-neutral-700/5 dark:text-white">
            <div className="flex items-center justify-between pt-4 ">
                <Logo/>
            <ul className="flex gap-x-10 items-center">
                <li>Home</li>
                <li>Login</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Support</li>
                <li>Support</li>
                
            </ul>
            <div><ModeToggle/></div>
            </div>
        </div>
     );
}
 
export default Navbar;