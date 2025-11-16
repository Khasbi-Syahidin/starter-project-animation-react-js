import { SampleView } from "@/section/sample/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Animation Scroll in React JS',
    template: `%s | Animation Scroll in React JS`,
  },
  description: 'Implementasi animasi scroll di React JS. Dibuat oleh Eksplor Coding.',
  keywords: [
    'react js',
    'next js',
    'framer motion',
    'material ui',
    'animation',
    'scroll animation',
    'web development',
    'Eksplor Coding',
    'Khasbi Syahidin',
    'javascript animation',
    'tailwind css',
  ],
  authors: [{ name: 'Khasbi Syahidin', url: 'https://github.com/khasbi-syahidin' }],
  creator: 'Khasbi Syahidin',
  publisher: 'Eksplor Coding',
};
export default function Home() {
  return <SampleView />
}
