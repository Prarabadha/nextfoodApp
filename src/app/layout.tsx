import Notification from "@/components/Notification";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
