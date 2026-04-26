import "./globals.css";

export const metadata = {
  title: "M-Factory — ขาย-ให้เช่าโกดัง โรงงาน รีสอร์ทส่วนตัว",
  description:
    "M-Factory ให้บริการขายและให้เช่าโกดัง โรงงาน พร้อมบริการที่พักรีสอร์ทส่วนตัว",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
