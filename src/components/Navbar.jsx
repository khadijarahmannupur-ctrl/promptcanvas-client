"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Button, Avatar } from "@heroui/react";
// import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import {
  Bars,
  Xmark,
  Sun,
  Moon,
} from "@gravity-ui/icons";
// import { useTheme } from "next-themes";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  // console.log("Session data in Navbar:", session, "Is pending:", isPending);
  const user = session?.user;
  console.log(user)

  const handleSignOut = async () => {
    await signOut();

  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Prompts", href: "/prompts" },
    ...(user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#DCCCAC] bg-[#FFF8EC]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#546B41] text-lg font-bold text-white shadow-md">
            PC
          </div>

          <div className="hidden sm:block">
            <h2 className="text-xl font-bold text-[#2F3B26]">
              PromptCanvas
            </h2>

            <p className="text-xs text-gray-500">
              Create • Share • Discover
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Menu */}
          <ul className="flex items-center gap-2 rounded-full border border-[#DCCCAC] bg-white px-3 py-2 shadow-sm">

            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[#546B41] transition hover:bg-[#DCCCAC]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme */}
          <button
            className="rounded-full border border-[#DCCCAC] bg-white p-2 hover:bg-[#DCCCAC]"
          >
            <Moon className="h-5 w-5 text-[#546B41]" />
          </button>

          {/* Auth */}

          {!user ? (
            <div className="flex items-center gap-3">

              <Link
                href="/auth/signin"
                className="text-sm font-semibold text-[#546B41]"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                radius="full"
                className="bg-[#546B41] rounded-full py-3 px-6 text-white hover:bg-[#445636]"
              >
                Sign Up
              </Link>

            </div>
          ) : (
            <div className="flex items-center gap-4">

              {/* <Avatar
                src={user?.image}
                className="cursor-pointer"
              />  */}
              <Avatar>
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <Button
                className='bg-[#546B41] text-white'
                // color="danger"
                variant="ghost"
                onClick={handleSignOut}
              >
                Logout
              </Button>

            </div>
          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 md:hidden"
        >
          {isMenuOpen ? (
            <Xmark className="h-7 w-7 text-[#546B41]" />
          ) : (
            <Bars className="h-7 w-7 text-[#546B41]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="border-t border-[#DCCCAC] bg-[#FFF8EC] md:hidden">

          <div className="space-y-4 px-5 py-6">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-[#546B41] hover:bg-[#DCCCAC]"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-[#DCCCAC] pt-5">

              <button
                className="mb-4 flex w-full items-center justify-center rounded-xl border border-[#DCCCAC] bg-white py-3"
              >
                <Moon className="mr-2 h-5 w-5 text-[#546B41]" />
                Toggle Theme
              </button>

              {!user ? (
                <div className="flex flex-col gap-3">

                  <Link
                    href="/login"
                    className="rounded-xl border border-[#546B41] py-3 text-center font-medium text-[#546B41]"
                  >
                    Login
                  </Link>

                  <Button
                    as={Link}
                    href="/register"
                    className="bg-[#546B41] text-white"
                  >
                    Sign Up
                  </Button>

                </div>
              ) : (
                <Button
                  color="danger"
                  variant="ghost"
                  className="w-full"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              )}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}