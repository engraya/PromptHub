"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { MainNavItem } from "@/types";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from "./mobile-navbar";
import { Menu } from "lucide-react";
import { Icons } from "@/components/icons";

// Define types
type DefaultNavbarProps = {
  mainNav: MainNavItem[];
  showProfileAndPrompts: boolean;
};


export const DefaultNavbar = ({ mainNav, showProfileAndPrompts }: DefaultNavbarProps) => {
  const segment = useSelectedLayoutSegment();

  const filteredNav = showProfileAndPrompts
    ? mainNav
    : mainNav.filter(item => item.title !== "Profile" && item.title !== "Prompts");

  return (
    <section className="w-full flex md:justify-evenly md:items-center py-1">
      <div className="lg:hidden mr-2 flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex-col" side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex justify-center items-center">
                  <Icons.logo />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <MobileNav />
            <div className="flex justify-center items-center">
              <ThemeToggleDropDown />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Link href="/" className="md:hidden ml-1 flex justify-center items-center">
        <Icons.logo />
        <h1 className="text-lg ml-2 font-medium transition-colors hover:text-foreground/80 sm:text-sm">
          {siteConfig.name}
        </h1>
      </Link>
      <div className="hidden md:flex w-full justify-between gap-12 items-center">
        {filteredNav.map((item, idx) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center text-lg font-medium dark:border-blue-500 border-emerald-600 hover:border-b-4 hover:border-emerald-600 rounded-b-md transition-colors hover:text-foreground/80 sm:text-sm",
              item.href.startsWith(`/${segment}`)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
};
