import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";

const NAV_LINKS = ["Features", "Security", "Pricing", "Reviews"] as const;

export default function Navbar() {
  return (
    <>
      <header className="w-full bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-container shadow-[0_1px_3px_0_rgba(15,23,42,0.03)]">
              <Wallet size={20} aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="font-title-md text-title-md font-bold tracking-tight text-on-surface">
                PesaTrack
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Wealth Intelligence
              </span>
            </span>
          </Link>

          <nav aria-label="Account navigation" className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/login"
              className="rounded-lg bg-primary-container px-3 py-1.5 font-body-sm text-body-sm font-semibold text-on-primary-container transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="hidden font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface sm:inline"
            >
              Create Account
            </Link>
            <Link
              href="/help-support"
              className="hidden font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface md:inline"
            >
              Contact Support
            </Link>
          </nav>
        </div>
      </header>

      <div className="w-full bg-surface px-0 pt-6 sm:px-8 sm:pt-10">
        <div className="mx-auto mb-6 w-full max-w-7xl px-4 py-3 sm:mb-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 rounded-xl bg-surface-container-lowest/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-4 sm:gap-10">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary shadow-sm">
                  <Wallet size={18} aria-hidden="true" />
                </span>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                  PesaTrack
                </span>
              </Link>

              <nav aria-label="Page navigation" className="hidden items-center gap-8 md:flex">
                {NAV_LINKS.map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                href="/login"
                className="hidden rounded-lg px-4 py-2 font-label-md text-label-md text-on-surface transition-colors hover:text-primary sm:inline"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-4 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container sm:px-5"
              >
                <span>Get Started Free</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
