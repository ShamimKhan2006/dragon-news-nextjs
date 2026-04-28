import Image from "next/image";
import React from "react";

import profilePic from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./shared/NavLink";


const Navber = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-between items-center mt-5 ">
                <div></div>
                <div>
                    <ul className=" flex space-x-3 text-gray-500">
                        <li><NavLink href={"/"}>Home
                        </NavLink></li>
                        <li><NavLink href={"/about"}>about-us
                        </NavLink></li>
                        <li><NavLink href={"/career"}>career
                        </NavLink></li>

                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <Image
                        src={profilePic}
                        width={60}
                        height={40}
                        alt="profile pic"
                    ></Image>
                    <Link href={"/login"}>
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Navber;
