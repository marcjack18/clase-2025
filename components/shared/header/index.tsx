import React from "react";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import MenuHeader from "./menu";

export default function Header() {
  return (
   <header className="w-full border-b">
    <div className="wrapper flex-between py-4">
      <div className="flex-start">
        <Link href={"/"} className="flex-start">
          <Image src={"/images/logo.svg"}  alt={'Home'} width={48} height={48}/>
        </Link>
        <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
      </div>

        <div className="space-x-2">
            <MenuHeader></MenuHeader>

            
        </div>  
    </div>  
   </header>
  );
}