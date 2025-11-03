'use client'
import React, { use, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, 
    DropdownMenuContent, DropdownMenuCheckboxItem} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
    

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === 'system' ? (<SunMoon/>) : (
                    theme === 'dark' ? (<MoonIcon/>) : (theme === 'azul' ? (<SunIcon/>) : (<SunIcon/>))
                )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={theme=== 'system'}  onClick={()=> setTheme('system')}>
                System
                </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem checked={theme=== 'light'}  onClick={()=> setTheme('light')}>
                Light
            </DropdownMenuCheckboxItem>
            
            <DropdownMenuCheckboxItem checked={theme=== 'dark'}  onClick={()=> setTheme('dark')}>
                Dark
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem checked={theme=== 'azul'}  onClick={()=> setTheme('azul')}>
                Azul
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
  
}