export const SITE_VERSION = "0.1.0-alpha";

export const navLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/pricing", label: "Pricing" },
  { href: "/waitlist", label: "Waitlist" },
] as const;

export const footerProduct = [
  { href: "/technology", label: "Product architecture" },
  { href: "/pricing", label: "Tiers and credits" },
  { href: "/waitlist", label: "Request access" },
] as const;

export const footerCompany = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "mailto:support@kiss.photography", label: "Contact" },
] as const;

export const footerTechnology = [
  { href: "/technology", label: "Technical overview" },
  { href: "/manifesto", label: "Founding thesis" },
] as const;

export const footerLegal = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
] as const;

export type FAQItem = {
  q: string;
  a: string;
};

export const faqItems: FAQItem[] = [
  {
    q: "How does identity preservation work?",
    a: "Your embedding is treated as a constraint, not a suggestion. The model is biased toward outputs that remain recognizably you under consistent lighting geometry, facial topology, and micro-texture cues. Divergence is penalized in the ranking pass.",
  },
  {
    q: "What happens to my data?",
    a: "Uploads are processed for generation and ranking. We do not sell datasets. Retention is minimized to what operations require. Detailed policy lives in our privacy notice.",
  },
  {
    q: "What is FLUX in this stack?",
    a: "FLUX is the diffusion backbone we use for candidate generation. It is not the product. The product is the constraint layer, the ranking function, and how outputs are packaged for deployment.",
  },
  {
    q: "Why is blockchain optional?",
    a: "Some teams want an immutable receipt of provenance. Most users want speed and privacy. The default path is off-chain generation and delivery. Chain hooks exist where a customer explicitly requires them.",
  },
  {
    q: "How does pricing work?",
    a: "Credits map to generation and ranking cycles. Final dollar amounts are not public yet. The tiers on this site indicate allocation and capability, not final retail.",
  },
  {
    q: "When does general availability ship?",
    a: "Private alpha is invite-only. Broader access follows once latency, safety, and ranking stability meet internal thresholds. Waitlist members receive dates first.",
  },
  {
    q: "Who operates Kiss.photography?",
    a: "Hated By Many LLC, a Delaware limited liability company. This site is marketing. The application lives on a separate subdomain and requires authentication.",
  },
  {
    q: "How do I reach support?",
    a: "Use support@kiss.photography with your waitlist email in the subject line. Response priority follows invite tier.",
  },
];

export const rankingSignals = [
  {
    id: "aesthetic",
    label: "Aesthetic",
    sub: "w₁",
    body: "Composition, color discipline, and print-grade sharpness scored against a calibrated reference set. Not “beauty.” Fitness for context.",
  },
  {
    id: "engagement",
    label: "Engagement",
    sub: "w₂",
    body: "Predicted attention and click-through shaped by historical performance surfaces. Calibrated conservatively to avoid meme drift.",
  },
  {
    id: "identity",
    label: "Identity",
    sub: "w₃",
    body: "Embedding distance, landmark stability, and texture coherence. The constraint that keeps the output attached to a single human.",
  },
  {
    id: "diversity",
    label: "Diversity",
    sub: "w₄",
    body: "Penalty on near-duplicate poses and redundant backgrounds across the ranked set. You receive a spread, not a clone strip.",
  },
] as const;
