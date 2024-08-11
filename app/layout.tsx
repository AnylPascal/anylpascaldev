import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anyl Pascal",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <form
        action="https://usebasin.com/f/4ed0fc541190"
        method="POST"
        encType="multipart/form-data"
        id="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
        <label htmlFor="checkbox1">Checkbox</label>
        <input type="checkbox" name="checkbox1" />
        <label htmlFor="checkbox2">Checkbox</label>
        <input type="checkbox" name="checkbox2" />
        <label htmlFor="radio1">Radio1</label>
        <input id="radio1" type="radio" name="radio" value="radio1" checked />
        <label htmlFor="radio2">Radio2</label>
        <input id="radio2" type="radio" name="radio" value="radio2" />
        <label htmlFor="file-upload">File Upload</label>
        <input type="file" name="file-upload" />
        <button type="submit">Send</button>
      </form> */}
    </html>
  );
}
