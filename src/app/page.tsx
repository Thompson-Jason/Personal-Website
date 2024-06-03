import React from 'react';
import Image from "next/image";

const Homepage = () => {
    return (
        <div className=" h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                <Image src={"/Kendra.jpeg"} alt="temporary picture of a dog" fill className="object-contain"/>
            </div>
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                <h1 className="text-4xl font-bold md:text-6xl">Looking for Software Engineer roles.</h1>
                <p className="md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="flex w-full gap-4">
                    <button className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
                    <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;