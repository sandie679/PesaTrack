import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChartNoAxesCombined,
  ChartPie,
  CircleCheck,
  CirclePlay,
  Coins,
  Gem,
  Landmark,
  PiggyBank,
  RefreshCw,
  Shield,
  ShieldCheck,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: ChartNoAxesCombined,
    title: "Real-time cash flow & spending limits",
    description:
      "Instant notifications paired with dynamic predictive burn rate modeling.",
  },
  {
    icon: PiggyBank,
    title: "Automated goal tracking & high-yield pools",
    description:
      "Smart sweep rules allocate spare liquidity to maximize annual returns.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade 256-bit encryption & privacy",
    description:
      "Client-side isolation architecture. Zero third-party telemetry or ad-tracking.",
  },
];

const PARTNERS = [
  { icon: Landmark, name: "APEX CAPITAL" },
  { icon: Building2, name: "MERIDIAN BANK" },
  { icon: Coins, name: "VANGUARD VAULT" },
  { icon: Shield, name: "FIRST HORIZON" },
  { icon: Gem, name: "CITADEL TRUST" },
];

const CHART_LABELS = ["Nov 01", "Nov 10", "Nov 20", "Today"] as const;

export default function LandingPage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center bg-surface px-0 pb-6 sm:px-8 sm:pb-10">
      <div className="flex w-full flex-col">
        <section className="mx-auto mb-12 w-full max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="mb-6 inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-surface-container-high px-3.5 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                  PESATRACK 2.0 • Bank-Grade Security
                </span>
              </div>

              <h1 className="mb-6 font-display-xl-mobile text-display-xl-mobile tracking-tight text-on-surface sm:font-display-xl sm:text-display-xl">
                Master Your Money with Total Clarity
              </h1>

              <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Intelligent budgeting, automated savings goals, and cash flow
                analytics designed for your financial freedom. Experience
                institutional-grade wealth tracking built for everyday
                precision.
              </p>

              <div className="mb-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/register"
                  className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-label-md text-label-md text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg"
                >
                  <span>Get Started Free</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/demo"
                  className="flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest px-6 py-3.5 font-label-md text-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container"
                >
                  <CirclePlay size={18} className="text-primary" aria-hidden="true" />
                  <span>Schedule a Demo</span>
                </Link>
              </div>

              <div className="mb-10 flex items-start gap-2 text-on-surface-variant sm:items-center">
                <CircleCheck size={16} className="shrink-0 text-primary" aria-hidden="true" />
                <span className="font-body-sm text-body-sm">
                  FDIC insured partner vaults • Zero hidden charges • Cancel anytime
                </span>
              </div>

              <div id="features" className="grid max-w-xl grid-cols-1 gap-3.5">
                {FEATURES.map(({ icon: FeatureIcon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                      <FeatureIcon size={20} aria-hidden="true" />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="font-title-md text-title-md font-semibold text-on-surface">
                        {title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
              <div className="pointer-events-none absolute -right-10 -top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-secondary-container/30 blur-3xl" />

              <div className="relative flex w-full max-w-lg flex-col gap-6 rounded-2xl bg-surface-container-lowest p-5 shadow-xl sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                      Total Portfolio Net Worth
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface sm:font-display-xl sm:text-display-xl">
                        $84,920.50
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-fixed px-2.5 py-1 font-label-sm text-label-sm text-on-primary-fixed shadow-sm">
                    <TrendingUp size={15} aria-hidden="true" />
                    <span>+12.4%</span>
                  </div>
                </div>

                <div className="-mt-3 flex items-center justify-between gap-3 text-on-surface-variant">
                  <span className="font-body-sm text-body-sm">
                    Cash balance &amp; automated investments
                  </span>
                  <span className="whitespace-nowrap font-label-sm text-label-sm font-semibold uppercase text-primary">
                    Live Audit
                  </span>
                </div>

                <div className="flex w-full flex-col gap-2 rounded-xl bg-surface-container-low p-4">
                  <div className="flex items-center justify-between gap-3 text-on-surface-variant">
                    <span className="font-label-sm text-label-sm font-semibold uppercase">
                      30-Day Growth Vector
                    </span>
                    <span className="whitespace-nowrap font-label-sm text-label-sm font-bold text-primary">
                      +$9,340.00
                    </span>
                  </div>

                  <div className="relative h-28 w-full">
                    <svg
                      className="h-full w-full overflow-visible"
                      preserveAspectRatio="none"
                      viewBox="0 0 400 120"
                      role="img"
                      aria-label="30-day growth chart trending upward"
                    >
                      <defs>
                        <linearGradient id="growthGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#006948" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#006948" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,95 Q 60,85 100,70 T 200,60 T 300,35 T 400,10 L 400,120 L 0,120 Z"
                        fill="url(#growthGradient)"
                      />
                      <path
                        d="M 0,95 Q 60,85 100,70 T 200,60 T 300,35 T 400,10"
                        fill="none"
                        stroke="#006948"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                      <circle cx="400" cy="10" fill="#006948" r="5" />
                      <circle cx="400" cy="10" fill="#006948" fillOpacity="0.2" r="10" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between pt-1 font-label-sm text-label-sm text-on-surface-variant">
                    {CHART_LABELS.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col justify-between rounded-xl bg-surface-container p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">
                        Smart Budget
                      </span>
                      <ChartPie size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div className="mb-3 flex flex-col gap-1">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        $1,450 left
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        of $3,200 monthly cap
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                      <div className="h-full w-[55%] rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl bg-surface-container p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">
                        Rainy Day Vault
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-primary px-2 py-0.5 font-label-sm text-label-sm font-bold text-on-primary">
                        4.8% APY
                      </span>
                    </div>
                    <div className="mb-2 flex flex-col gap-1">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        $24,180
                      </span>
                      <div className="flex items-center gap-1 font-body-sm text-body-sm font-medium text-primary">
                        <RefreshCw size={15} aria-hidden="true" />
                        <span>Daily sweep active</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Compounding weekly
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container-low px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Zap size={18} aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        Velocity Benchmark
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Top 5% automated discipline
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary-fixed px-3 py-1 font-label-sm text-label-sm font-bold text-on-primary-fixed">
                    +3.2x saving rate vs peers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="security"
          className="mx-auto w-full max-w-7xl px-4 pb-4 pt-4 sm:px-6 sm:pt-8 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest p-6 text-center shadow-sm sm:p-8">
            <span className="mb-6 font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface-variant">
              Trusted by over 45,000+ disciplined savers &amp; investors across leading institutions
            </span>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 opacity-75 md:gap-14">
              {PARTNERS.map(({ icon: PartnerIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 font-title-md text-title-md font-bold text-on-surface-variant"
                >
                  <PartnerIcon size={24} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
