"use client";

import React, { useEffect, useState } from 'react';
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import { marketingConfig } from '@/config/marketing';
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from 'next-auth/providers/index';

function NavigationBar() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
          <DefaultNavbar mainNav={marketingConfig.mainNav} showProfileAndPrompts={!!session?.user} />
        </div>
        <div className="md:block hidden">
          {session?.user ? (
            <>
              <Link href="/create-prompt">
                <button type="button" className="text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Create
                </button>
              </Link>
              <button type='button' onClick={() => signOut()} className="text-white bg-gradient-to-r from-red-400 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                SignOut
              </button>
              <Image
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                src={session.user.image ?? '/default-avatar.png'} // Handle default case
                width={37}
                height={37}
                alt="User Image"
              />
            </>
          ) : (
            <button onClick={() => signIn()} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              SignIn
            </button>
          )}
          <ThemeToggleDropDown />
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
