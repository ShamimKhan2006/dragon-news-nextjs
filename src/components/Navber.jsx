 "use client"
import Image from "next/image";


import profilePic from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./shared/NavLink";
 import { authClient } from "@/lib/auth-client"


const Navber = () => {
   

const { data, isPending, error } = authClient.useSession();
 const user=data?.user
 console.log(user)




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
                  {isPending ?(
                    <p>Loading......</p> 
                ):user ?( 
                    <>
                    <p> Hello,{user?.name}</p>
                  
                    <Image
                         src={user?.image || profilePic}
                         width={60}
                         height={40}
                         alt="profile pic"
                         className="rounded-full"
                         ></Image>
                       
                        <button onClick={async()=>await authClient.signOut()
                        
                        } className="btn btn-primary">SignOut</button>
                 
                        </>
                        ):( 
                    <Link href={"/login"}>
                        <button className="btn btn-primary">Login</button>
                    </Link>)}
                </div>

</div>

        </div> 
    );
};

export default Navber;
