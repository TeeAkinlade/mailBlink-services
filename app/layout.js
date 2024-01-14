import "/styles/globals.css";

export const metadata = {
  title: "MailBlink - One-stop Email Marketing Services",
  description: "Email and SMS Marketing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins min-h-screen min-w-screen bg-secondary">
        {children}
      </body>
    </html>
  );
}
