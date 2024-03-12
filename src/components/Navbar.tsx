'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; // jahan jahan a tag use hota hai wahan wahan ab tum Link use karoge

export default function Navbar({ className }: { className?: string }){ // yaha humne clasname ka type define kardia hai that is ki classname parameter mai jo data aayega uska type kaise hoga woh declare kardiya hai
    const [active, setActive] = useState<string | null>(null); // active checks kaunse kaunse links clickable hai and kaunse kaunse nahi

    return(
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        > 
        {/* the above classes are used to fix the navbar on the top */}

        <Menu setActive={setActive}>
            <Link href={"/"}> {/* if the compulsory parameters are missing then it will give an error*/}
            {/* yeh item pe jo Home likh rkha hai woh automatically render hojayega on the page*/}
            <MenuItem setActive={setActive} active={active} item="Home"> 
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
            </MenuItem>
            <Link href={'/contact'}> {/* Links are created to add a functionality to route another place */}
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>
        </Menu>
        </div>
    )
}