import HeroSection from '@/components/elements/kontak/hero-section';
import KontakFormulir from '@/components/elements/kontak/kontak';
import Image from 'next/image';

export default function Kontak() {
	return (
		<>
			<HeroSection />
			<KontakFormulir />
			<Image
				className="w-full -mb-0.5"
				src="/image/rumput.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</>
	);
}
