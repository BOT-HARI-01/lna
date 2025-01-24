import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "CSP",
  description: "A Collaborative Student Project Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
