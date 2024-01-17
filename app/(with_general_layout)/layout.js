import Footer from "./home/footer/Footer";
import Nav from "./home/nav/Nav";
import "/styles/globals.css";

export const metadata = {
  title: "VendGenix - One-stop Marketing Services",
  description: "Email and SMS Marketing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="font-poppins min-h-screen min-w-screen bg-secondary">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
