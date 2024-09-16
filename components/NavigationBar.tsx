"use client";

import React, { useEffect, useState } from 'react';
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import { marketingConfig } from '@/config/marketing';
import Link from "next/link";

function NavigationBar() {


  return (
    <header className="sticky top-0 shadow w-full md:w-auto px-5 py-0.5 z-40 flex justify-between md:rounded-lg bg-secondary/20 backdrop-blur-md border-gradient border-gradient-primary only-bottom">
      <div className="container flex sm:flex-row justify-between items-center mx-auto py-2 px-4">
        <div className="hidden md:flex items-center text-2xl">
          <Link href="/" className="flex justify-center items-center">
            <Icons.logo />
            <h1 className="text-lg ml-2 font-medium transition-colors hover:text-foreground/80 sm:text-sm">
              {siteConfig.name}
            </h1>
          </Link>
        </div>
        <div className="flex sm:mt-0 middleDiv">
          <DefaultNavbar mainNav={marketingConfig.mainNav} showProfileAndPrompts={true} />
        </div>
        <div className="md:block hidden">
          <ThemeToggleDropDown />
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
