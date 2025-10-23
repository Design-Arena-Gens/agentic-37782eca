import "./globals.css";

export const metadata = {
  title: "Machine Learning Research Landscape",
  description: "Curated research overview covering foundations, state of the art, trends, and resources across machine learning."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
