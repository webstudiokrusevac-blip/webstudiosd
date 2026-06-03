# Web Studio SD

Moderni Next.js sajt za izradu i prodaju web sajtova.

## Lokalno pokretanje

```bash
npm install
npm run dev
```

Lokalni URL je obicno:

```bash
http://localhost:3000
```

## Vercel podesavanje

Projekat je spreman za Vercel deploy. U Vercel dashboardu dodati environment varijable iz `.env.example`:

```bash
CONTACT_TO_EMAIL=webstudiokrusevac@gmail.com
CONTACT_FROM_EMAIL=Web Studio Krusevac <webstudiokrusevac@gmail.com>
GMAIL_USER=webstudiokrusevac@gmail.com
GMAIL_APP_PASSWORD=...
NEXT_PUBLIC_SITE_URL=https://tvoj-domen.rs
```

Ako saljes sa iste adrese koja prima upite, `GMAIL_USER` moze ostati isti kao `CONTACT_TO_EMAIL`. Za `GMAIL_APP_PASSWORD` ne koristi se obicna Gmail lozinka. U Google nalogu ukljuci 2-Step Verification, zatim napravi App Password za Mail i tu lozinku upisi kao `GMAIL_APP_PASSWORD`.

## Kontakt forma

Forma salje upite preko `/api/contact` rute i Gmail SMTP-a. Ako `GMAIL_USER` i `GMAIL_APP_PASSWORD` nisu podeseni na serveru, klijentska forma otvara email fallback sa popunjenim upitom.

Ruta ima osnovnu validaciju, anti-spam honeypot polje i timeout za email servis.
