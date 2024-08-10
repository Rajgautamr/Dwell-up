import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="flex pt-1">
            <div className="hidden dark:block"><Image src="/discord-logo-white.png" width="125" height="125" alt="logo"/></div>
            <div className=" dark:hidden"> <Image src="/discord-logo-black.png" width="125" height="125" alt="logo"/></div>
        </div>
     );
}
 
export default Logo;