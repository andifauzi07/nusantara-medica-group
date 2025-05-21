import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full md:flex md:justify-start md:items-center md:h-screen h-55 relative md:z-0 -z-20">
			<Image
				src="/image/hero-produk.png"
				alt="Produk"
				width={2024}
				height={1000}
				className="md:hidden"
			/>
			<div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-2 justify-center items-center">
					<h1 className="text-2xl font-bold text-main">Produk Kami</h1>
					<TypingAnimation className="text-main text-xs px-0">Keseimbangan Tubuh Secara Alami</TypingAnimation>
				</div>
			</div>
			<div className="hidden md:block md:mx-16 md:w-2/3">
				<h1 className="md:text-main md:text-4xl md:font-bold md:text-left">
					Kembali ke Pengobatan <span className="text-secondary">Alami</span> Obat Herbal Murni, Diproses dengan Teknologi Modern, Aman dan Berkhasiat.
				</h1>
			</div>
		</div>
	);
}
