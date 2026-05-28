# PowerAdda — Premium Energy & Mobility Website

**poweradda.com** | Mumbai, India | Built with Next.js 14 + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start

```bash
npm install
npm run dev       # localhost:3000
npm run build     # builds static export to /out
```

---

## 📁 Project Structure

```
poweradda/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Design tokens + animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glass navbar
│   │   └── Footer.tsx      # Structured footer grid
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with abstract energy graphic
│   │   ├── ServicesTicker.tsx # Infinite marquee ticker
│   │   ├── Services.tsx    # 6 service cards
│   │   ├── WhyChoose.tsx   # 8 reason cards (sticky layout)
│   │   ├── HowItWorks.tsx  # 3-step process (dark bg)
│   │   ├── About.tsx       # Company story + mission/vision
│   │   ├── LeadForm.tsx    # Lead capture form (progressive)
│   │   ├── VendorSection.tsx # B2B partner form
│   │   ├── Insights.tsx    # Blog/knowledge hub cards
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   └── Contact.tsx     # Contact details + coverage map
│   └── ui/
│       └── FloatingCTA.tsx # WhatsApp FAB + mobile bottom bar
├── next.config.js          # Static export for Cloudflare Pages
├── tailwind.config.ts
└── wrangler.toml           # Cloudflare Pages deployment config
```

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `out`

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`

---

## 📊 Google Sheets Integration (Lead Forms)

The two forms (LeadForm + VendorSection) currently simulate submission.

To connect to Google Sheets:

1. Create a Google Apps Script Web App:
```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents)
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet()
  sheet.appendRow([new Date(), data.name, data.mobile, data.service, data.location, data.message])
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

2. Deploy as Web App → Anyone can access

3. In `LeadForm.tsx`, replace the simulated call:
```typescript
const res = await fetch('YOUR_APPS_SCRIPT_URL', {
  method: 'POST',
  body: JSON.stringify(form),
})
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#2563eb` |
| Light Blue | `#3b82f6` |
| WhatsApp Green | `#25D366` |
| Text Primary | `#0f172a` |
| Text Secondary | `#475569` |
| Surface | `#f9fafb` |
| Display Font | Sora |
| Body Font | Manrope |

---

## 📱 Mobile Features
- Sticky glass navbar (transparent → solid on scroll)
- WhatsApp floating action button (bottom right)
- Mobile bottom CTA bar (appears after scroll)
- All sections mobile-first responsive

---

## 📞 Contact Config

Update in components to change contact details:
- WhatsApp: `918655559777` (with country code, no +)
- Email: `info@poweradda.com`

---

## 🔧 Customization

- **Services**: Edit `services` array in `Services.tsx`
- **FAQ**: Edit `faqs` array in `FAQ.tsx`
- **Blog posts**: Edit `articles` array in `Insights.tsx`
- **Why choose**: Edit `reasons` array in `WhyChoose.tsx`
- **Ticker items**: Edit `items` array in `ServicesTicker.tsx`
