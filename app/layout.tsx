import "./globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Kristinas Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
