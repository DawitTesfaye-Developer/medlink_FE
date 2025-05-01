// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { ROUTES } from "@constants/routes";
import { logout } from "@lib/auth";
import logo from "../../public/logo.png";

const Header = () => {
  const user = null; // Replace this with real user logic
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Call your logout function
    router.push(ROUTES.AUTH.LOGIN); // Redirect to login after logout
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-500 text-white shadow-md backdrop-blur-md bg-opacity-90 transition-all duration-300">
      <Container>
        <div className="bg-[#2B8761] flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center pl-5 space-x-3">
            <Image src={logo} alt="Medlink" className="h-9 w-auto" />{" "}
            {/* Direct path to public */}
            <span className="text-2xl font-extrabold tracking-tight">
              Medlink
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <Link href={ROUTES.HOME} className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link
              href={ROUTES.STATIC.ABOUT}
              className="hover:text-gray-300 transition"
            >
              About
            </Link>
            <Link
              href={ROUTES.STATIC.CONTACT}
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href={ROUTES.CUSTOMER.PROFILE}
                  className="hover:text-gray-300 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout} // Updated to use handleLogout
                  className="hover:text-gray-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={ROUTES.AUTH.REGISTER}
                  className="hover:text-gray-300 transition"
                >
                  Features
                </Link>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="ml-4">
            {!user && ( // Only show Sign In button if the user is not logged in
              <Button className="bg-white text-[#2B8761] hover:bg-green-100 font-semibold px-5 py-2 rounded-full transition-all shadow-sm">
                <Link href={ROUTES.AUTH.LOGIN}>Sign In\Sign Up</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
