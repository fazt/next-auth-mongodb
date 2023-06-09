import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* cacl h-screen minus */}
      <body className="h-[calc(100vh-4rem)]">
        <Providers>
          <Navbar />
          <div className="container mx-auto max-w-7xl lg:px-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
