// Pricing Module — Ruixen UI, published on 21st.dev:
// https://21st.dev/@ruixen.ui/components/pricing-module
// (docs: https://docs.21st.dev/@ruixen.ui/components/pricing-module)
// Source vendored from the copy reconstructed from the 21st.dev bundle
// (the 21st.dev registry requires an authenticated account in this sandbox,
// so the CLI route was unavailable here). Requires: lucide-react, shadcn/ui
// (Card, Button, Switch), cn() helper, Tailwind CSS (shadcn tokens).
//
// ADAPTATIONS for Habib Tazkira's bridal packages (one-time fixed prices,
// not a SaaS monthly/yearly toggle):
// - `showToggle={false}` hides the billing toggle; price renders as a fixed
//   amount with `pricePrefix` ("৳") and `priceNote` ("One-time package").
// - `onPlanClick` wires each card's button to the salon's booking action.
// - Grid columns follow the plan count (3 plans -> lg:grid-cols-3).
// - Section headings use the page's display font via className overrides.
"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  priceMonthly: number;
  priceYearly: number;
  users: string;
  features: PlanFeature[];
  recommended?: boolean;
}

export interface PricingModuleProps {
  title?: string;
  subtitle?: string;
  annualBillingLabel?: string;
  buttonLabel?: string;
  plans: Plan[];
  defaultAnnual?: boolean;
  className?: string;
  /** Hide the monthly/yearly toggle and show fixed one-time prices. */
  showToggle?: boolean;
  /** Currency prefix rendered before the price, e.g. "৳". */
  pricePrefix?: string;
  /** Note rendered under a fixed price, e.g. "One-time package". */
  priceNote?: string;
  /** Called when a plan's button is clicked. */
  onPlanClick?: (plan: Plan) => void;
  /** Label on the highlighted plan's pill. */
  recommendedLabel?: string;
}

export function PricingModule({
  title = "Pricing Plans",
  subtitle = "Choose a plan that fits your needs.",
  annualBillingLabel = "Annual billing",
  buttonLabel = "Get started",
  plans,
  defaultAnnual = false,
  className,
  showToggle = true,
  pricePrefix = "$",
  priceNote,
  onPlanClick,
  recommendedLabel = "Recommended",
}: PricingModuleProps) {
  const [isAnnual, setIsAnnual] = React.useState(defaultAnnual);
  const price = (plan: Plan) =>
    showToggle ? (isAnnual ? plan.priceYearly : plan.priceMonthly) : plan.priceMonthly;

  return (
    <section className={cn("w-full bg-background text-foreground py-20 px-4 md:px-8", className)}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight mb-2 md:text-5xl">{title}</h2>
        <p className="text-muted-foreground mb-8">{subtitle}</p>

        {showToggle && (
          <div className="flex items-center justify-center gap-2 mb-10">
            <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={(checked) => setIsAnnual(checked)} />
            <label htmlFor="billing-toggle" className="text-sm text-muted-foreground cursor-pointer">
              {annualBillingLabel}
            </label>
          </div>
        )}

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6",
            plans.length <= 2 && "lg:grid-cols-2",
            plans.length === 3 && "lg:grid-cols-3",
            plans.length >= 4 && "lg:grid-cols-4",
          )}
        >
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative border border-muted rounded-xl transition-all hover:shadow-md hover:border-primary/30",
                plan.recommended && "border-primary ring-1 ring-primary/30 scale-[1.03]",
              )}
            >
              {plan.recommended && (
                // centered pill on the top border: left-0 right-0 + mx-auto + w-fit
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                  {recommendedLabel}
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="font-display text-5xl font-bold mb-2 transition-all duration-300">
                  {pricePrefix}
                  {price(plan).toLocaleString("en-IN")}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {showToggle ? `/ ${isAnnual ? "year" : "month"}` : priceNote ?? "One-time package"}
                </p>

                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="w-full mb-6"
                  onClick={() => onPlanClick?.(plan)}
                >
                  {buttonLabel}
                </Button>

                <div className="text-left text-sm">
                  <h4 className="font-semibold mb-2">Artist</h4>
                  <p className="text-muted-foreground mb-4">✓ {plan.users}</p>

                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span
                          className={
                            feature.included ? "text-muted-foreground" : "text-muted-foreground/60 line-through"
                          }
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
