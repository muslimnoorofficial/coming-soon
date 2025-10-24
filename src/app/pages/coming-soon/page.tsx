"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import GridShape from "@/components/common/GridShape";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  // 🎯 Launch date
  const launchDate = new Date("2025-12-12T00:00:00Z").getTime();

  // ⏳ Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // 📩 Handle Notify Me
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setOpen(true);
  };

  return (
    <div
      className="
        flex flex-col overflow-hidden
        min-h-screen px-6 py-10
        bg-gray-50 dark:bg-gray-900
        relative items-center justify-center
      "
    >
      {/* <GridShape /> */}

      {/* Heading */}
      <h1
        className="
          mb-3 text-3xl font-extrabold text-gray-900
          dark:text-white sm:text-4xl
        "
      >
        Coming Soon
      </h1>
      <p
        className="
          max-w-xl mx-auto mb-8 text-center
          text-gray-600 dark:text-gray-400
        "
      >
        Our website is under development. Subscribe to get notified when we
        launch and stay connected with <b>Muslim Noor</b>.
      </p>

      {/* Countdown Timer */}
      <div
        className="
          flex mb-8 text-center
          items-center justify-center gap-6
        "
      >
        {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
          const value = Object.values(timeLeft)[i];
          return (
            <div key={label} className="flex flex-col items-center">
              <span
                className="
                  text-3xl font-semibold text-emerald-600
                  dark:text-emerald-400
                "
              >
                {value.toString().padStart(2, "0")}
              </span>
              <span
                className="
                  text-sm text-gray-500
                  dark:text-gray-400
                "
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Email Notify Form */}
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col items-center gap-3
          w-full max-w-md mx-auto mb-8
          sm:flex-row sm:gap-2
        "
      >
        <div className="flex-1 w-full">
          <Label htmlFor="email" className="sr-only">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full"
            required
          />
        </div>

        <Button
          size="sm"
          variant="primary"
          className="w-full sm:w-auto px-5"
          type="submit"
        >
          Notify Me
        </Button>
      </form>

      {/* Dialog (Success Modal) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              Thank you for subscribing!
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              You’ll be notified at <b>{email}</b> when Muslim Noor officially
              launches, insha’Allah.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-2 mt-6">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="px-4"
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => setOpen(false)}
              className="px-4"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Social Links */}
      <div
        className="
          flex text-gray-500
          items-center justify-center gap-6
          dark:text-gray-400
        "
      >
        <Link href="https://facebook.com" target="_blank">
          <i className="text-xl fab fa-facebook-f hover:text-emerald-600"></i>
        </Link>
        <Link href="https://x.com" target="_blank">
          <i className="text-xl fab fa-x-twitter hover:text-emerald-600"></i>
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <i className="text-xl fab fa-instagram hover:text-emerald-600"></i>
        </Link>
      </div>

      {/* Footer */}
      <p
        className="
          text-sm text-center text-gray-500
          absolute bottom-6 dark:text-gray-400
        "
      >
        &copy; {new Date().getFullYear()} Muslim Noor. All rights reserved.
      </p>
    </div>
  );
}


