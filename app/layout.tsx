import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
  <Toaster position="top-right" />

  <div className="min-h-screen flex flex-col">
    <div className="flex-1">
      {children}
    </div>

    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 text-center text-zinc-400 text-sm">
      <p className="mb-2">
        Built by{" "}
        <span className="text-white font-semibold">
          Toufik Desai
        </span>
      </p>

      <div className="flex items-center justify-center gap-6">
        <a
          href="https://github.com/Toufik353"
          target="_blank"
          className="hover:text-white transition-all"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/toufik-desai-55b583106/"
          target="_blank"
          className="hover:text-white transition-all"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  </div>
</body>

    </html>
  );
}