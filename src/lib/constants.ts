export const SITE_VERSION = "V0.1";
export const COHORT = "COHORT 01";

export const navLinks = [
  { href: "/#philosophie", label: "Méthode" },
  { href: "/#moteur", label: "Moteur" },
  { href: "/atelier", label: "Atelier" },
  { href: "/pricing", label: "Tarification" },
  { href: "/gallery", label: "Gallerie" },
] as const;

export const footerPlatform = [
  { href: "/atelier", label: "Atelier" },
  { href: "/#philosophie", label: "Méthode" },
  { href: "/#moteur", label: "Le Moteur" },
  { href: "/#identite", label: "Identité" },
  { href: "/pricing", label: "Tarification" },
  { href: "/#collaboration", label: "Collaboration" },
] as const;

export const footerMaison = [
  { href: "/manifesto", label: "À Propos" },
  { href: "/manifesto", label: "Vision" },
  { href: "mailto:press@kiss.photography", label: "Carrières" },
  { href: "mailto:press@kiss.photography", label: "Press Kit" },
  { href: "mailto:support@kiss.photography", label: "Contact" },
] as const;

export const footerResources = [
  { href: "/technology", label: "Documentation" },
  { href: "/technology", label: "API" },
  { href: "/legal/terms", label: "Conditions" },
  { href: "/legal/privacy", label: "Confidentialité" },
  { href: "mailto:support@kiss.photography", label: "Support" },
] as const;
