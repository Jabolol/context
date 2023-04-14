import "./globals.css";

export const metadata = {
  title: "Dessert",
  description: "Decentralized certifications centralized securely",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
