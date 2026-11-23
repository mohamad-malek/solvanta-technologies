"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "./ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Solid background once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape, and lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-navy/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" aria-label="Solvanta Technologies, back to top" onClick={() => setOpen(false)}>
          <Logo priority />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sky to-brand transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "true" : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  active === link.href
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-semibold text-white"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
