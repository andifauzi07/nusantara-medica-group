import DetailSection from '@/components/elements/home/detail-section';
import HeroSection from '../components/elements/home/hero-section';
import Testimoni from '@/components/elements/home/testimoni';
import Produk from '@/components/elements/home/produk';
import TestimoniCount from '@/components/elements/home/testimoni-count';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ClientTestimoni } from '@/components/elements/home/client-testimoni';

export default function Home() {
	return (
		<>
			<HeroSection />
			<DetailSection />
			<TestimoniCount />
			<div className=" w-full flex justify-center items-center px-8 py-6">
				<div className="w-[490px]">
					<p className="text-center text-base md:text-xl text-main font-semibold">Produk berkualitas</p>
					<div className="w-full flex justify-center my-4">
						<Image
							src="/image/ilustrator.png"
							height={250}
							width={250}
							alt="Ilustrator"
							className="md:w-[300px] md:h-[300ox]"
						/>
					</div>
					<div className="w-full flex justify-between gap-4">
						<p className="text-xs md:text-xl font-semibold text-main text-center">Konsultasi & Edukasi Kesehatan</p>
						<p className="text-xs md:text-xl font-semibold text-main text-center">Pelayanan Terpercaya & Harga Terjangkau</p>
					</div>
				</div>
			</div>
			<Testimoni />
			<Produk />
			<ClientTestimoni />
		</>
	);
}
