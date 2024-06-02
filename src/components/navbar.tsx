"use client"

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavLink from "@/components/navLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    let linkedInColor:string = "#0A66C2";


    return(
     <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
         <div className="hidden md:flex gap-4 w-1/3">
             {links.map(link=>(
                 <NavLink link={link} key={link.url} />
             ))}
         </div>
         <div className="md:hidden lg:flex xl:w-1/3 xl:items-center">
             <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                 <span className="text-white mr-1">Jason </span>
                 <span className="w-20 h-8 rounded bg-white text-black mr-1 flex items-center justify-center">Thompson</span>
             </Link>
         </div>
         <div className="hidden md:flex gap-4">
             <Link href="https://github.com/Thompson-Jason" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
             <Link href="https://www.linkedin.com/in/jason-thompson-761b7a19a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} color={linkedInColor}/></Link>

         </div>
         <div className="md:hidden w-1/3">
             <button className="w-10 h-8 flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
                 <div className="w-10 h-1 bg-black rounded mb-1"></div>
                 <div className="w-10 h-1 bg-black rounded mb-1"></div>
                 <div className="w-10 h-1 bg-black rounded"></div>
             </button>
             { open && (
             <div className="absolute top-0 left-0 flex flex-col w-screen h-screen bg-black text-white items-center justify-center gap-8 text-4xl">
                 {links.map(link=>(
                     <Link href={link.url} key={link.title}>{link.title}</Link>
                 ))}
             </div>
             )}
         </div>
     </div>
    )
}

export default Navbar;