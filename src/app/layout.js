import "./globals.css";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://m-factoryandresort.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M-Factory | ขาย-ให้เช่าโกดัง โรงงาน และรีสอร์ทส่วนตัว",
    template: "%s | M-Factory",
  },
  description: "M-Factory ให้บริการขายและให้เช่าโกดัง โรงงานสำเร็จรูป และที่พักรีสอร์ทส่วนตัวในปทุมธานี พร้อมแผนที่ติดต่อ LINE และโทรตรงเจ้าของ",
  keywords: [
    "M-Factory",
    "โกดังให้เช่า",
    "โรงงานให้เช่า",
    "ขายโรงงาน",
    "เช่าโกดังปทุมธานี",
    "รีสอร์ทส่วนตัว",
    "ที่พักลาดหลุมแก้ว",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US", "zh_CN"],
    url: "/",
    siteName: "M-Factory",
    title: "M-Factory | ขาย-ให้เช่าโกดัง โรงงาน และรีสอร์ทส่วนตัว",
    description: "รวมบริการขาย-ให้เช่าโกดัง โรงงาน พร้อมรีสอร์ทส่วนตัวในทำเลลาดหลุมแก้ว ปทุมธานี ติดต่อเร็วผ่าน LINE และโทรได้ทันที",
    images: [{ url: "/m-factory/sale-1.jpg", width: 1200, height: 630, alt: "M-Factory โกดังและโรงงานพร้อมขายและให้เช่า" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M-Factory | ขาย-ให้เช่าโกดัง โรงงาน และรีสอร์ทส่วนตัว",
    description: "โกดังและโรงงานพร้อมใช้งานในปทุมธานี พร้อมรีสอร์ทส่วนตัว ติดต่อโทร/LINE ได้ทันที",
    images: ["/m-factory/sale-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "real estate",
  authors: [{ name: "M-Factory", url: "https://m-factory.co.th" }],
  creator: "M-Factory",
  publisher: "M-Factory",
  verification: { google: "jAH-3TU5XRG3aJq4_XIAiSOZh5fwop4aUmZUEhkhnDc" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0f172a" };

// prettier-ignore
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Itim&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18121892684" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18121892684');
        `}</Script>
      </body>
    </html>
  );
}
