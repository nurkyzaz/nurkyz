import "./globals.css";

export const metadata = {
  title: "Nurkyz Ydyrysova",
  description: "AI & Physics Undergraduate · CUHK | AI Product Engineer in Hong Kong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
