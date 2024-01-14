import { useRouter } from "next/navigation";
import Footer from "./home/footer/Footer";
import Nav from "./home/nav/Nav";
import "/styles/globals.css";

export const metadata = {
  title: "MailBlink - One-stop Email Marketing Services",
  description: "Email and SMS Marketing Services",
};

export default function RootLayout({ children }) {
  const router = useRouter();
  
  return (
    <html lang="en">
      <body className="font-poppins min-h-screen min-w-screen bg-secondary">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
