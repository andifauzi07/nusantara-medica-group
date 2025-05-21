import HeroSection from '@/components/elements/produk/hero-section';
import ProdukCard from '@/components/elements/produk/produk-card';
import ProdukSection from '@/components/elements/produk/produk-section';
import Image from 'next/image';

export default function Produk() {
	return (
		<>
			<HeroSection />
			<ProdukCard />
			<ProdukSection />
		</>
	);
}
