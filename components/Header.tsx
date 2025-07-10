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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Image src="/logo.png" alt="MockMate Logo" width={120} height={32} />

        {/* Industry Insights Button */}
        <button
          onClick={gotoDashboard}
          className="bg-gray-500 text-primary-foreground shadow p-2 rounded-md flex items-center gap-2 mr-4 md:mr-0 px-5 py-3"
        >
          Industry Insights
        </button>

        {/* Dropdown Button */}
        <div>
          <button
            onClick={toggleDropdown}
            className="bg-gray-500 text-primary-foreground shadow p-2 rounded-md flex items-center gap-2 px-5 py-3"
          >
            Select Industry
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
              <ul className="py-1 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Technology
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Healthcare
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Finance
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
