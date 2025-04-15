import HeroSection from '@/components/elements/produk/hero-section';
import ProdukCard from '@/components/elements/produk/produk-card';
import Image from 'next/image';

export default function Produk() {
	return (
		<>
			<HeroSection />
			<ProdukCard />
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
