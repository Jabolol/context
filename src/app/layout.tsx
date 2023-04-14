import "./globals.css";

export const metadata = {
  title: "Context",
  description: "Created for the Web3 Hackathon",
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
