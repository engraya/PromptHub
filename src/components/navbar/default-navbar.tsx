"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { MainNavItem } from "@/types";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders, LiteralUnion } from "next-auth/react";
import { Providers as AuthProviders } from "next-auth/providers"; // Adjust import as needed

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
  showProfileAndPrompts: boolean; // New prop to control visibility
};

type Providers = Record<string, AuthProviders>; // Adjust this if the structure is different

export const DefaultNavbar = ({ mainNav, showProfileAndPrompts }: DefaultNavbarProps) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
              {session?.user ? (
                <>
                  <Link href="/create-prompt">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Create
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="text-white bg-gradient-to-r from-red-400 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    SignOut
                  </button>
                  <Image
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                    src={session.user.image ?? "/default-avatar.png"} // Provide default or handle undefined case
                    width={37}
                    height={37}
                    alt="User Avatar"
                  />
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  SignIn
                </button>
              )}
            </div>
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
