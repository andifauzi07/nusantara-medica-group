import DetailSection from '@/components/elements/home/detail-section';
import HeroSection from '../components/elements/home/hero-section';
import Testimoni from '@/components/elements/home/testimoni';
import Produk from '@/components/elements/home/produk';

export default function Home() {
	return (
		<>
			<HeroSection />
			<DetailSection />
			<Testimoni />
			<Produk />
		</>
	);
}
