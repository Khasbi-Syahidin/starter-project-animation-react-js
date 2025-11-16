"use client";

export default function SampleHeader() {
    return (
        <div className="flex flex-col gap-4 items-start">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-white drop-shadow-sm">
                Sample Animation Implementation
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Semua detail komponen animasi berada di:
            </p>

            <div className="px-3 md:px-5 py-2 md:py-3 rounded-xl border border-white/20 bg-slate-800/40 shadow-md backdrop-blur-md w-fit flex items-center">
                <p className="text-cyan-300 text-xs md:text-sm font-mono tracking-wide">
                    /src/components/animate
                </p>
            </div>

            <p className="max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                Jika ingin melihat demo lengkapnya, silahkan klik{" "}
                <a
                    href="https://landing-page-animation-scroll-react.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-500 hover:text-cyan-400 transition"
                >
                    Lihat Demo
                </a>
                . Dukung kami dengan memberi star di{" "}
                <a
                    href="https://github.com/Khasbi-Syahidin/starter-project-animation-react-js"
                    className="font-semibold text-cyan-500 hover:text-cyan-400 transition"
                >
                    Repository Github
                </a>.
            </p>
        </div>
    );
}