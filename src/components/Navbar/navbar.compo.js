import React from "react";
import {BiChevronRight, BiChevronDown, BiSearch, BiMenu} from "react-icons/bi";

const NavSm=()=>{
return(
<>
   <div className="text-white items-center flex justify-between">
      <div>
         <h3 className="text-xl font-bold">It All Starts Here! </h3>
         <span className="text-gray-400 text-xs flex items-center">
            hyderabad
            <BiChevronRight />
         </span>
      </div>
      <div className="w-8 h-8">
         <BiSearch className="w-full h-full" />
      </div>
   </div>
</>
);
};
const NavMd=()=>{
return(
<>
   <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm">
      <BiSearch />
      <input type="search" className="w-full focus:outline-none " placeholder="Search for Movies,events,Plays,sports and activities" />
   </div>
</>

);
};
const NavLg=()=>{
return(
<>
<div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
         <div className="w-12 h-12">
            < img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" className="w-full h-full" />
         </div>
         <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none " placeholder="Search Movies,events,Plays,sports and activities" />

         </div>
      </div>


    
      <div className="flex items-center gap-3">
      <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            hyderabad
            <BiChevronDown />
         </span>
         <button className="bg-red-600 text-white px-2 py-1 rounded-md ">Sign in</button>

         <div className="w-8 h-8 text-white">
            < BiMenu className="w-8 h-8"/>
         </div>
      </div>
   </div> 
</>
);
};

const Navbar=()=>{
return(
<>
   <nav className="bg-NavCol-700 px-4 py-2 ">
      <div className="md:hidden">
         {
         /* mobile screen*/
         < NavSm />
         }
      </div>

      <div className="hidden lg:hidden md:flex">
         {
         /* tablet screen */
         <NavMd />
         }
      </div>

      <div className="hidden md:hidden lg:flex">
         {
         /* desktop screen */
         <NavLg />
         }
      </div>
   </nav>
</>
);
};

export default Navbar;