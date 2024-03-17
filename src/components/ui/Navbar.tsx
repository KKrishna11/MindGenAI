import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import dynamic from "next/dynamic";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  console.log(session);
  return (
    <>
      <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-10 h-fit border-b border-zinc-600 py-2">
        <div className="flex items-center justify-center h-full gap-2 px-7 mx-auto sm:justify-between max-w-7xl">
          <Link href="/" className="items-center hidden gap-2 sm:flex">
            <p className="rounded-lg border-4 border-r-4 border-black px-3 py-1  text-xl font-bold transition-all hover:-translate-y-1 md:block dark:border-white ">
              MindGen-AI
            </p>
          </Link>

          <div className="flex items-center">
            <Link href="/gallery" className="mr-3">
              Gallery
            </Link>

            {session?.user && (
              <>
                <Link href="/create" className="mr-3">
                  Create Course
                </Link>
                <Link href="/setting" className="mr-3">
                  Setting
                </Link>
              </>
            )}

            {/* <ThemeToggle className="mr-3" /> */}

            <div className="flex items-center">
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <SignInButton />
              )}
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
