import HeroSection from '@/components/elements/kontak/hero-section';
import KontakFormulir from '@/components/elements/kontak/kontak';
import Image from 'next/image';

export default function Kontak() {
	return (
		<>
			<HeroSection />
			<KontakFormulir />
			<Image
				className="w-full relative md:-z-50 md:-mt-10 -mb-0.5"
				src="/dekstop/bg-desktop.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</>
	);
}
