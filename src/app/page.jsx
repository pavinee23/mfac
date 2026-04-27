import PageClient from "./m-factory/PageClient";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://m-factoryandresort.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "M-Factory",
      inLanguage: ["th", "en", "zh"],
      potentialAction: {
        "@type": "ContactAction",
        target: ["tel:+66952411833", "https://lin.ee/xrAU8PC"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "M-Factory & M-Resort",
      url: `${siteUrl}/`,
      image: [`${siteUrl}/m-factory/sale-1.jpg`],
      description:
        "บริการขายและให้เช่าโกดัง โรงงานสำเร็จรูป และรีสอร์ทส่วนตัวในลาดหลุมแก้ว ปทุมธานี",
      telephone: "+66952411833",
      email: "m.factoryandresort@gmail.com",
      priceRange: "฿฿",
      currenciesAccepted: "THB",
      paymentAccepted: "Cash, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "222 ซอยคลองโซน 6 ตำบลลาดหลุมแก้ว",
        addressLocality: "ลาดหลุมแก้ว",
        addressRegion: "ปทุมธานี",
        postalCode: "12140",
        addressCountry: "TH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 14.0033987,
        longitude: 100.3960986,
      },
      sameAs: ["https://lin.ee/xrAU8PC"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 500,
      },
      areaServed: ["Pathum Thani", "Bangkok Metropolitan Region"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "M-Factory Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ให้เช่าโกดัง",
              description: "พื้นที่โกดังขนาดต่างๆ ระบบรักษาความปลอดภัย 24 ชั่วโมง ลาดหลุมแก้ว ปทุมธานี",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ขาย-ให้เช่าโรงงานสำเร็จรูป",
              description: "โรงงานพร้อมใช้งาน ระบบไฟฟ้า 3 เฟส รองรับการขยายกิจการ ทั้งแบบเช่าและขายขาด",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LodgingBusiness",
              name: "รีสอร์ทส่วนตัว M-Resort",
              description: "ที่พักรีสอร์ทส่วนตัว บรรยากาศเงียบสงบ เหมาะสำหรับพักผ่อนและจัดกิจกรรมองค์กร",
            },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageClient />
    </>
  );
}
