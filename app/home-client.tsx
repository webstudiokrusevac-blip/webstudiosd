"use client";

import { useEffect, useState } from "react";

export type Lang = "sr" | "en";

const langKey = "webstudiosd-lang";
const contactEmail = "webstudiokrusevac@gmail.com";

const isLang = (value: string | null): value is Lang => value === "sr" || value === "en";

const getUrlLang = () => {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("lang");
  return isLang(value) ? value : null;
};

const getSavedLang = () => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(langKey);
  return isLang(value) ? value : null;
};

const portfolio = [
  {
    title: "Automateed",
    url: "www.automateed.com",
    category: { sr: "AI eBook platforma", en: "AI eBook platform" },
    copy: {
      sr: "Početna strana za AI alat koji od ideje pravi eBook, cover i publish-ready PDF. Fokus je na brzom ulazu u proizvod, jasnom CTA-u i poverenju kroz recenzije.",
      en: "Homepage for an AI tool that turns an idea into an eBook, cover and publish-ready PDF. The focus is fast product entry, a clear CTA and trust through reviews."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .04), rgba(12, 16, 24, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.automateed.com%2F?w=1400')"
  },
  {
    title: "AiCoursify",
    url: "www.aicoursify.com",
    category: { sr: "AI course creator", en: "AI course creator" },
    copy: {
      sr: "SaaS prezentacija za kreiranje online kurseva pomoću AI-ja, sa naglašenim benefitima, brojkama, funkcijama i direktnim pozivom za početak rada.",
      en: "SaaS presentation for creating online courses with AI, highlighting benefits, numbers, features and a direct call to start."
    },
    image:
      "linear-gradient(135deg, rgba(246, 248, 250, .04), rgba(8, 31, 41, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.aicoursify.com%2F?w=1400')"
  },
  {
    title: "Stream Mentor",
    url: "www.streammentor.com",
    category: { sr: "Streaming edukacija", en: "Streaming education" },
    copy: {
      sr: "Content portal za streamere sa vodičima za Twitch, YouTube Gaming, TikTok i Instagram, plus struktura za članke, opremu i rast publike.",
      en: "Content portal for streamers with guides for Twitch, YouTube Gaming, TikTok and Instagram, plus structure for articles, gear and audience growth."
    },
    image:
      "linear-gradient(135deg, rgba(7, 11, 18, .04), rgba(7, 11, 18, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fstreammentor.com%2F?w=1400')"
  },
  {
    title: "InkdAI",
    url: "www.inkdai.com",
    category: { sr: "AI tattoo generator", en: "AI tattoo generator" },
    copy: {
      sr: "Kreativna AI platforma za generisanje tattoo dizajna iz teksta ili slike, sa jasnim alatima za explore, photo-to-tattoo, text-to-tattoo i body preview.",
      en: "Creative AI platform for generating tattoo designs from text or images, with tools for explore, photo-to-tattoo, text-to-tattoo and body preview."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .04), rgba(12, 16, 24, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.inkdai.com%2F?w=1400')"
  },
  {
    title: "Čarapanska Meana",
    url: "www.kafanakrusevac.com",
    category: { sr: "Restoran u Kruševcu", en: "Restaurant in Kruševac" },
    copy: {
      sr: "Lokalna prezentacija za kafanu u Kruševcu, postavljena oko jakog identiteta, adrese, kontakta i brzog utiska za goste koji traže mesto za obrok.",
      en: "Local presentation for a restaurant in Kruševac, built around identity, address, contact and a fast first impression for guests looking for a place to eat."
    },
    image:
      "linear-gradient(135deg, rgba(8, 12, 20, .06), rgba(8, 12, 20, .38)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kafanakrusevac.com%2F?w=1400')"
  },
  {
    title: "LIMITLESSS",
    url: "www.limitlesss.rs",
    category: { sr: "E-commerce wellbeing", en: "Wellbeing e-commerce" },
    copy: {
      sr: "Prodajni e-commerce sajt za flastere za nos i navike nosnog disanja, sa fokusom na porudžbinu, garanciju, best sellere, recenzije i benefite za san i performanse.",
      en: "Sales-focused e-commerce website for nasal strips and nasal breathing habits, focused on ordering, guarantee, best sellers, reviews and sleep/performance benefits."
    },
    image:
      "linear-gradient(135deg, rgba(246, 248, 250, .04), rgba(8, 31, 41, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.limitlesss.rs%2F?w=1400')"
  },
  {
    title: "SellAI Tool",
    url: "www.sellaitool.com",
    category: { sr: "AI marketplace", en: "AI marketplace" },
    copy: {
      sr: "Marketplace za kupovinu i prodaju AI alata, automatizacija i AI biznisa, sa pozicioniranjem oko sigurnosti, verifikacije i escrow zaštite.",
      en: "Marketplace for buying and selling AI tools, automations and AI businesses, positioned around security, verification and escrow protection."
    },
    image:
      "linear-gradient(135deg, rgba(7, 11, 18, .04), rgba(7, 11, 18, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sellaitool.com%2F?w=1400')"
  },
  {
    title: "Advokat Kruševac",
    url: "www.advokatkrusevac.rs",
    category: { sr: "Advokatska kancelarija", en: "Law office" },
    copy: {
      sr: "Profesionalna prezentacija advokatske kancelarije Đurice Mitrovića u Kruševcu, sa uslugama, iskustvom, kontaktom i jasnim pozivom za zakazivanje konsultacija.",
      en: "Professional website for a law office in Kruševac, with services, experience, contact details and a clear call to book a consultation."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .04), rgba(12, 16, 24, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.advokatkrusevac.rs%2F?w=1400')"
  },
  {
    title: "ASE Consulting",
    url: "www.aseconsulting.rs",
    category: { sr: "Inženjering i nadzor", en: "Engineering and supervision" },
    copy: {
      sr: "Korporativna prezentacija za stručni nadzor, upravljanje projektima i savetovanje u građevinskim i investicionim projektima.",
      en: "Corporate website for professional supervision, project management and consulting in construction and investment projects."
    },
    image:
      "linear-gradient(135deg, rgba(246, 248, 250, .04), rgba(8, 31, 41, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.aseconsulting.rs%2F?w=1400')"
  },
  {
    title: "ASEC Reports",
    url: "www.asecreports.rs",
    category: { sr: "Projektni izveštaji", en: "Project reports" },
    copy: {
      sr: "Specijalizovan digitalni sistem za izveštaje i pregled projektnih informacija, namenjen jasnijem praćenju radova, rokova i investicionih tokova.",
      en: "Specialized digital system for reports and project information, designed for clearer tracking of work, deadlines and investment flows."
    },
    image:
      "linear-gradient(135deg, rgba(7, 11, 18, .04), rgba(7, 11, 18, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.asecreports.rs%2F?w=1400')"
  },
  {
    title: "Stelux Construct",
    url: "www.stelux-construct.rs",
    category: { sr: "Građevinska firma", en: "Construction company" },
    copy: {
      sr: "Prezentacioni sajt za građevinske usluge i projekte, sa fokusom na poverenje, reference i direktan kontakt za nove investitore.",
      en: "Presentation website for construction services and projects, focused on trust, references and direct contact for new investors."
    },
    image:
      "linear-gradient(135deg, rgba(8, 12, 20, .06), rgba(8, 12, 20, .38)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.stelux-construct.rs%2F?w=1400')"
  },
  {
    title: "Balkan Moto Centar",
    url: "www.balkanmotocentar.com",
    category: { sr: "ATV i powersport prodaja", en: "ATV and powersport sales" },
    copy: {
      sr: "Premium prodajna prezentacija za ATV, UTV i powersport vozila, sa brendovima TGB, Dayun i Gusite, prodavnicom, lokacijama i kontaktima.",
      en: "Premium sales website for ATV, UTV and powersport vehicles, with TGB, Dayun and Gusite brands, shop, locations and contacts."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .04), rgba(12, 16, 24, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.balkanmotocentar.com%2F?w=1400')"
  },
  {
    title: "Soul Thai Massage",
    url: "www.soulthaimassage.com/sr",
    category: { sr: "Wellness i masaža", en: "Wellness and massage" },
    copy: {
      sr: "Elegantna prezentacija za Thai massage studio, prilagođena za lokalne posetioce, usluge, rezervacije i miran premium utisak brenda.",
      en: "Elegant presentation for a Thai massage studio, adapted for local visitors, services, bookings and a calm premium brand impression."
    },
    image:
      "linear-gradient(135deg, rgba(246, 248, 250, .04), rgba(8, 31, 41, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.soulthaimassage.com%2Fsr?w=1400')"
  },
  {
    title: "Sport Care Med",
    url: "www.sportcaremed.com",
    category: { sr: "Sportska medicina", en: "Sports medicine" },
    copy: {
      sr: "Platforma za oporavak sportista sa klinikom, recovery opremom, protokolima, edukacijom i prodavnicom koju vodi sportsko-medicinski tim.",
      en: "Athlete recovery platform with clinic, recovery equipment, protocols, education and a store run by a sports medicine team."
    },
    image:
      "linear-gradient(135deg, rgba(7, 11, 18, .04), rgba(7, 11, 18, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sportcaremed.com%2F?w=1400')"
  },
  {
    title: "Imanje Naša Priča",
    url: "www.imanjenasaprica.com",
    category: { sr: "Turizam i odmor", en: "Tourism and retreat" },
    copy: {
      sr: "Vizuelna prezentacija luksuznog imanja za beg iz grada, sa naglaskom na atmosferu, rezervacije, doživljaj prostora i prirodu.",
      en: "Visual presentation of a luxury estate for escaping the city, focused on atmosphere, bookings, the space experience and nature."
    },
    image:
      "linear-gradient(135deg, rgba(8, 12, 20, .06), rgba(8, 12, 20, .38)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.imanjenasaprica.com%2F?w=1400')"
  },
  {
    title: "Eduway Academy",
    url: "www.eduway.academy",
    category: { sr: "Edukativna akademija", en: "Education academy" },
    copy: {
      sr: "Edukativni sajt za akademiju i programe učenja, sa fokusom na ponudu kurseva, poverenje, prijavu i jasnu komunikaciju za polaznike.",
      en: "Education website for an academy and learning programs, focused on courses, trust, applications and clear communication for students."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .04), rgba(12, 16, 24, .34)), url('https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.eduway.academy%2F?w=1400')"
  },
  {
    title: "Palete Nevas",
    url: "www.paletenevas.com",
    category: { sr: "Proizvodnja i prodaja paleta", en: "Pallet production and sales" },
    copy: {
      sr: "B2B prezentacija za firmu koja se bavi paletama i ambalažom, sa fokusom na proizvodnju, prodaju, logistiku i brz kontakt za porudžbine.",
      en: "B2B website for a company dealing with pallets and packaging, focused on production, sales, logistics and fast order contact."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .02), rgba(12, 16, 24, .16)), url('/portfolio/palete-nevas.png')"
  },
  {
    title: "Tattoo Studio Stepa",
    url: "www.tattoostepa.com",
    category: { sr: "Tattoo studio", en: "Tattoo studio" },
    copy: {
      sr: "Prezentacija vodećeg tattoo studija u Kruševcu, sa iskustvom, sterilnim okruženjem, galerijom, kontaktom i jasnim pozivom za zakazivanje termina.",
      en: "Website for a leading tattoo studio in Kruševac, with experience, sterile environment, gallery, contact and a clear call to book an appointment."
    },
    image:
      "linear-gradient(135deg, rgba(12, 16, 24, .02), rgba(12, 16, 24, .16)), url('/portfolio/tattoo-studio-stepa.png')"
  }
];

const services = {
  sr: [
    "Basic sajt za firmu",
    "Landing stranice za prodaju",
    "Portfolio prezentacije",
    "Redizajn postojećeg sajta",
    "Brzina, SEO i Vercel deploy"
  ],
  en: [
    "Basic business website",
    "Sales landing pages",
    "Portfolio presentations",
    "Website redesign",
    "Speed, SEO and Vercel deploy"
  ]
};

const packages = [
  {
    name: "Start",
    price: { sr: "od 150 €", en: "from €150" },
    tag: { sr: "Basic sajt", en: "Basic website" },
    description: {
      sr: "Za malu firmu, uslugu ili lični brend kome treba čist, brz i ozbiljan online nastup.",
      en: "For a small company, service or personal brand that needs a clean, fast and serious online presence."
    },
    items: {
      sr: ["Do 3 sekcije", "Mobilna verzija", "Kontakt dugme", "Osnovni SEO"],
      en: ["Up to 3 sections", "Mobile version", "Contact button", "Basic SEO"]
    }
  },
  {
    name: "Growth",
    price: { sr: "od 350 €", en: "from €350" },
    tag: { sr: "Sajt za firmu", en: "Business website" },
    description: {
      sr: "Za posao koji želi detaljnije predstavljanje usluga, poverenje i jasnu putanju do kontakta.",
      en: "For a business that needs a deeper service presentation, trust signals and a clear path to contact."
    },
    items: {
      sr: ["Do 5 strana ili sekcija", "Portfolio ili galerija", "Kontakt forma", "Vercel objava"],
      en: ["Up to 5 pages or sections", "Portfolio or gallery", "Contact form", "Vercel launch"]
    }
  },
  {
    name: "Premium",
    price: { sr: "po dogovoru", en: "custom quote" },
    tag: { sr: "Napredna prezentacija", en: "Advanced presentation" },
    description: {
      sr: "Za brendove kojima treba upečatljiv dizajn, više animacija, studije slučaja i jači prodajni utisak.",
      en: "For brands that need a stronger design, more motion, case studies and a sharper sales impression."
    },
    items: {
      sr: ["Unikatni vizuelni pravac", "Animacije i mikrointerakcije", "Više portfolio blokova", "SEO struktura"],
      en: ["Unique visual direction", "Animations and microinteractions", "More portfolio blocks", "SEO structure"]
    }
  },
  {
    name: "Custom",
    price: { sr: "po dogovoru", en: "custom quote" },
    tag: { sr: "Veća složenost", en: "Higher complexity" },
    description: {
      sr: "Za e-commerce, aplikacije, rezervacije, članstvo, više jezika ili posebne funkcionalnosti.",
      en: "For e-commerce, apps, bookings, memberships, multiple languages or special functionality."
    },
    items: {
      sr: ["Analiza zahteva", "Posebne funkcije", "Integracije", "Dugoročna podrška"],
      en: ["Requirement analysis", "Custom features", "Integrations", "Long-term support"]
    }
  }
];

const text = {
  sr: {
    nav: ["Usluge", "Radovi", "Proces", "Cenovnik", "Kontakt"],
    skip: "Preskoči",
    book: "Zakaži razgovor",
    eyebrow: "Izrada i prodaja web sajtova",
    heroTitle: "Moderan sajt koji odmah izgleda ozbiljno i prodaje jasnije.",
    heroLead:
      "Pravimo brze Next.js prezentacije, portfolio strane i prodajne sajtove koji su spremni za Vercel, mobilne korisnike i kampanje.",
    quote: "Tražim ponudu",
    viewWork: "Pogledaj radove",
    metrics: ["do prve verzije sajta", "cilj za performance score", "deploy, domen, kontakt forme i osnovni SEO"],
    servicesEyebrow: "Basic sajt",
    servicesTitle: "Jasan sajt za firmu koji izgleda ozbiljno i odmah vodi do kontakta.",
    serviceCards: [
      ["Basic sajt", "Za firme, majstore, ordinacije, salone, restorane i lokalne brendove koji žele čist online nastup."],
      ["Prodajna stranica", "Jedna fokusirana strana za kampanje, ponude, pakete i zakazivanje."],
      ["Portfolio radovi", "Galerije, studije slučaja, opisi projekata i jasna putanja do kontakta."]
    ],
    workEyebrow: "Portfolio radovi i prezentacije",
    workTitle: "Primeri koje možemo prilagoditi tvom poslu.",
    example: "Primer",
    processEyebrow: "Proces",
    processTitle: "Od ideje do objavljenog sajta bez lutanja.",
    process: [
      ["Dogovor", "Definišemo cilj, publiku, strane, tekstove i primere koji ti se sviđaju."],
      ["Dizajn i izrada", "Pravimo modernu strukturu, animacije, mobilnu verziju i kontakt tokove."],
      ["Vercel objava", "Povezujemo domen, proveravamo brzinu i predajemo sajt spreman za rast."]
    ],
    skillEyebrow: "Premium skill set",
    skillTitle: "Detalji koji sajt čine skupljim, bržim i uverljivijim.",
    skills: [
      ["UI direction", "Vizuelni pravac, tipografija i komponente koje ne izgledaju kao generički template."],
      ["Conversion copy", "Naslovi, CTA tokovi i sekcije postavljene tako da posetilac lakše pošalje upit."],
      ["Speed setup", "Next.js, responzivnost, osnovni SEO i Vercel struktura spremna za objavu."]
    ],
    pricingEyebrow: "Paketi i cenovnik",
    pricingTitle: "Prezentacije različite složenosti, od jednostavnog starta do premium sajta.",
    contactEyebrow: "Kontakt",
    contactTitle: "Pošalji ideju, delatnost i jedan sajt koji ti se sviđa.",
    form: {
      name: "Ime i firma",
      namePlaceholder: "Petar, Studio Primer",
      email: "Email",
      type: "Tip projekta",
      typePlaceholder: "Izaberi tip projekta",
      budget: "Budžet",
      budgetPlaceholder: "Izaberi okvirni budžet",
      message: "Šta želite da napravimo?",
      messagePlaceholder: "Ukratko opišite sajt, stranice, funkcije i primer koji vam se sviđa.",
      submit: "Pošalji upit",
      sending: "Šalje se...",
      success: "Upit je poslat. Javljamo se uskoro.",
      error: "Automatsko slanje trenutno nije podešeno. Otvoriće se email poruka sa popunjenim upitom.",
      projectTypes: ["Prezentacioni sajt", "Landing stranica", "Portfolio", "E-commerce", "Redizajn postojećeg sajta", "Custom funkcionalnosti"],
      budgets: ["Start od 150 €", "Growth od 350 €", "Premium po dogovoru", "Custom po dogovoru"]
    },
    footerBack: "Nazad na vrh stranice"
  },
  en: {
    nav: ["Services", "Work", "Process", "Pricing", "Contact"],
    skip: "Skip",
    book: "Book a call",
    eyebrow: "Website design and sales",
    heroTitle: "A modern website that looks serious fast and sells more clearly.",
    heroLead:
      "We build fast Next.js presentation sites, portfolio pages and sales websites ready for Vercel, mobile users and campaigns.",
    quote: "Request a quote",
    viewWork: "View work",
    metrics: ["to the first website version", "performance score target", "deploy, domain, contact forms and basic SEO"],
    servicesEyebrow: "Basic website",
    servicesTitle: "A clear business website that looks serious and leads people to contact.",
    serviceCards: [
      ["Basic website", "For companies, trades, clinics, salons, restaurants and local brands that need a clean online presence."],
      ["Sales landing page", "One focused page for campaigns, offers, packages and bookings."],
      ["Portfolio work", "Galleries, case studies, project descriptions and a clear route to contact."]
    ],
    workEyebrow: "Portfolio work and presentations",
    workTitle: "Examples we can adapt to your business.",
    example: "Example",
    processEyebrow: "Process",
    processTitle: "From idea to launched website without wandering.",
    process: [
      ["Agreement", "We define the goal, audience, pages, copy and examples you like."],
      ["Design and build", "We create the structure, motion, mobile version and contact flows."],
      ["Vercel launch", "We connect the domain, check speed and deliver a website ready to grow."]
    ],
    skillEyebrow: "Premium skill set",
    skillTitle: "Details that make the website feel sharper, faster and more persuasive.",
    skills: [
      ["UI direction", "Visual direction, typography and components that do not feel like a generic template."],
      ["Conversion copy", "Headlines, CTA flows and sections arranged so visitors move more easily toward inquiry."],
      ["Speed setup", "Next.js, responsive behavior, basic SEO and a Vercel-ready launch structure."]
    ],
    pricingEyebrow: "Packages and pricing",
    pricingTitle: "Presentation websites of different complexity, from a simple start to a premium site.",
    contactEyebrow: "Contact",
    contactTitle: "Send your idea, industry and one website you like.",
    form: {
      name: "Name and company",
      namePlaceholder: "Peter, Example Studio",
      email: "Email",
      type: "Project type",
      typePlaceholder: "Choose project type",
      budget: "Budget",
      budgetPlaceholder: "Choose budget range",
      message: "What would you like us to build?",
      messagePlaceholder: "Briefly describe the website, pages, features and an example you like.",
      submit: "Send inquiry",
      sending: "Sending...",
      success: "Inquiry sent. We will get back to you soon.",
      error: "Automatic sending is not configured yet. An email draft will open with your inquiry.",
      projectTypes: ["Presentation website", "Landing page", "Portfolio", "E-commerce", "Website redesign", "Custom functionality"],
      budgets: ["Start from €150", "Growth from €350", "Premium custom quote", "Custom quote"]
    },
    footerBack: "Back to top"
  }
};

export default function HomeClient({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = text[lang];

  useEffect(() => {
    const urlLang = getUrlLang();
    if (urlLang) {
      setLang(urlLang);
      window.localStorage.setItem(langKey, urlLang);
    }

    const savedLang = getSavedLang();
    if (!urlLang && savedLang && savedLang !== initialLang) {
      setLang(savedLang);
    }
  }, [initialLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (nextLang: Lang) => {
    setLang(nextLang);
    window.localStorage.setItem(langKey, nextLang);
  };

  const sendInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nameCompany: String(formData.get("nameCompany") ?? ""),
      email: String(formData.get("email") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      language: lang
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Slanje nije uspelo");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");

      const subject = lang === "sr" ? `Novi upit za sajt - ${payload.nameCompany}` : `New website inquiry - ${payload.nameCompany}`;
      const body = [
        lang === "sr" ? "Novi upit za sajt" : "New website inquiry",
        "",
        `${t.form.name}: ${payload.nameCompany}`,
        `${t.form.email}: ${payload.email}`,
        `${t.form.type}: ${payload.projectType}`,
        `${t.form.budget}: ${payload.budget}`,
        "",
        `${t.form.message}:`,
        payload.message
      ].join("\n");

      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <main className="site is-ready">
      <header className="header">
        <a className="brand" href="#top" aria-label="Web Studio SD početna">
          <span>SD</span>
          <strong>Web Studio</strong>
          <small>Kruševac</small>
        </a>
        <nav aria-label="Glavna navigacija">
          <a href="#usluge">{t.nav[0]}</a>
          <a href="#radovi">{t.nav[1]}</a>
          <a href="#proces">{t.nav[2]}</a>
          <a href="#cenovnik">{t.nav[3]}</a>
          <a href="#kontakt">{t.nav[4]}</a>
        </nav>
        <div className="headerTools">
          <div className="languageSwitch" aria-label="Language selector">
            <a className={lang === "sr" ? "active" : ""} href="/?lang=sr" onClick={() => changeLang("sr")} aria-label="Srpski" aria-current={lang === "sr" ? "true" : undefined}>
              <span className="flag flagSr" aria-hidden="true" />
              SR
            </a>
            <a className={lang === "en" ? "active" : ""} href="/?lang=en" onClick={() => changeLang("en")} aria-label="English" aria-current={lang === "en" ? "true" : undefined}>
              <span className="flag flagGb" aria-hidden="true" />
              EN
            </a>
          </div>
          <a className="headerCta" href="#kontakt">
            {t.book}
          </a>
        </div>
      </header>

      <div className="bodyFlow" id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="heroActions">
              <a className="primary" href="#kontakt">
                {t.quote}
              </a>
              <a className="secondary" href="#radovi">
                {t.viewWork}
              </a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Pregled rezultata">
            <div className="metric">
              <strong>{lang === "sr" ? "3 dana" : "3 days"}</strong>
              <span>{t.metrics[0]}</span>
            </div>
            <div className="metric">
              <strong>95+</strong>
              <span>{t.metrics[1]}</span>
            </div>
            <div className="metric wide">
              <strong>Vercel ready</strong>
              <span>{t.metrics[2]}</span>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Tipovi sajtova">
          <div>
            {services[lang].concat(services[lang]).map((service, index) => (
              <span key={`${service}-${index}`}>{service}</span>
            ))}
          </div>
        </section>

        <section className="section services" id="usluge">
          <div className="sectionHead">
            <p className="eyebrow">{t.servicesEyebrow}</p>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="serviceGrid">
            {t.serviceCards.map((card, index) => (
              <article key={card[0]}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card[0]}</h3>
                <p>{card[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="radovi">
          <div className="sectionHead workHead">
            <p className="eyebrow">{t.workEyebrow}</p>
            <h2>{t.workTitle}</h2>
          </div>

          <div className="portfolioList">
            {portfolio.map((item, index) => (
              <article className={index % 2 === 0 ? "project" : "project reverse"} key={item.title}>
                <div
                  className={
                    item.title === "Palete Nevas" || item.title === "Tattoo Studio Stepa"
                      ? "projectImage realScreenshot"
                      : "projectImage"
                  }
                  style={{ backgroundImage: item.image }}
                >
                  <div className="deviceBadge" aria-hidden="true">
                    <div className="deviceBadgeInner">
                      <strong>Web Studio SD</strong>
                      <div className="deviceCycle">
                        <span className="deviceIcon desktop" />
                        <span className="deviceIcon laptop" />
                        <span className="deviceIcon tablet" />
                        <span className="deviceIcon phone" />
                      </div>
                    </div>
                  </div>
                  <span>{item.category[lang]}</span>
                </div>
                <div className="projectCopy">
                  <p className="eyebrow">
                    {t.example} {index + 1}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.copy[lang]}</p>
                  <a href={`https://${item.url}`} target="_blank" rel="noreferrer">
                    {item.url}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="proces">
          <div className="sectionHead">
            <p className="eyebrow">{t.processEyebrow}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="timeline">
            {t.process.map((step, index) => (
              <article className="timelineStep" key={step[0]}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skillSection">
          <div className="sectionHead skillHead">
            <p className="eyebrow">{t.skillEyebrow}</p>
            <h2>{t.skillTitle}</h2>
          </div>
          <div className="skillGrid">
            {t.skills.map((skill, index) => (
              <article className="skillCard" key={skill[0]}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{skill[0]}</h3>
                <p>{skill[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section pricing" id="cenovnik">
          <div className="sectionHead pricingHead">
            <p className="eyebrow">{t.pricingEyebrow}</p>
            <h2>{t.pricingTitle}</h2>
          </div>
          <div className="pricingGrid">
            {packages.map((item) => (
              <article className="priceCard" key={item.name}>
                <div>
                  <p className="packageTag">{item.tag[lang]}</p>
                  <h3>{item.name}</h3>
                  <strong>{item.price[lang]}</strong>
                  <p>{item.description[lang]}</p>
                </div>
                <ul>
                  {item.items[lang].map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="contactCopy">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
          </div>
          <form className="contactForm" action="/api/contact" method="post" onSubmit={sendInquiry}>
            <label>
              {t.form.name}
              <input name="nameCompany" type="text" placeholder={t.form.namePlaceholder} required />
            </label>
            <label>
              {t.form.email}
              <input name="email" type="email" placeholder="ime@firma.com" required />
            </label>
            <label>
              {t.form.type}
              <select name="projectType" required defaultValue="">
                <option value="" disabled>
                  {t.form.typePlaceholder}
                </option>
                {t.form.projectTypes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              {t.form.budget}
              <select name="budget" required defaultValue="">
                <option value="" disabled>
                  {t.form.budgetPlaceholder}
                </option>
                {t.form.budgets.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="full">
              {t.form.message}
              <textarea name="message" placeholder={t.form.messagePlaceholder} rows={5} minLength={12} required />
            </label>
            <label className="formTrap" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            <button className="primary" type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? t.form.sending : t.form.submit}
            </button>
            {formStatus === "success" && <p className="formMessage success">{t.form.success}</p>}
            {formStatus === "error" && <p className="formMessage error">{t.form.error}</p>}
          </form>
        </section>

        <footer className="footer">
          <strong>Web Studio Kruševac</strong>
          <a href="mailto:webstudiokrusevac@gmail.com">webstudiokrusevac@gmail.com</a>
          <a className="backTop" href="#top">
            {t.footerBack}
          </a>
        </footer>
      </div>
    </main>
  );
}
