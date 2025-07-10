"use client";
import React from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  Headphones,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const gotoDashboard = () => {
    window.open("http://localhost:3000/dashboard/");
  };

  const gotosomewhere = () => {
    window.open("https://intellihire-nine.vercel.app/resume");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
         <Link href="https://intellihire-nine.vercel.app/"><Image src="/logo.png" alt="MockMate Logo" width={120} height={32} /> </Link>

        <div className="relative flex">
          <Button
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 mx-5"
          >
            <Link
              href="https://intellihire-nine.vercel.app/dashboard"
              className="flex items-center gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              Industry Insights
            </Link>
          </Button>

          <Button
            onClick={toggleDropdown}
            variant="outline"
            className="hidden md:inline-flex items-center gap-2"
          >
            <LayoutDashboard className="h-4 w-4" />
            Growth Tools
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </Button>

          {isOpen && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-black z-50 left-50 top-7">
              <ul className="py-1 text-gray-700 list-none">
                <li
                  // onClick={gotosomewhere}
                  className="px-4 py-2 hover:bg-indigo-800 cursor-pointer"
                >
                  <Link
                    href="https://intellihire-nine.vercel.app/resume"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-indigo-800 cursor-pointer">
                  <Link
                    href="https://intellihire-nine.vercel.app/ai-cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-indigo-800 cursor-pointer">
                  <Link
                    href="https://intellihire-nine.vercel.app/interview"
                    className="flex items-center gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Button className="flex items-center gap-2">
          <StarsIcon className="h-4 w-4" />
          <span className="hidden md:block">Growth Tools</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </nav>
    </header>
  );
}
