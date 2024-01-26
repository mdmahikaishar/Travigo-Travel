import "@/styles/tailwind.css";

export const metadata = {
  title: "Travigo Travel",
  description: "A Travel website designed for travigo travel.",
  author: "mdmahikaishar <mahikaishar@gmail.com>"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800">{children}</body>
    </html>
  );
}
