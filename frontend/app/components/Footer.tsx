import { BadgeCheck, Landmark, LockKeyhole } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-8 sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <BadgeCheck size={16} className="text-primary" aria-hidden="true" />
            <span>SOC2 Certified</span>
          </div>
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <Landmark size={16} className="text-primary" aria-hidden="true" />
            <span>FDIC Insured Partner</span>
          </div>
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <LockKeyhole size={16} className="text-primary" aria-hidden="true" />
            <span>256-Bit TLS Encryption</span>
          </div>
        </div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © 2024 PesaTrack Wealth Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
