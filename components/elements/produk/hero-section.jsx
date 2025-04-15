import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full h-55 relative -z-20">
			<Image
				src="/image/hero-produk.png"
				alt="Produk"
				width={2024}
				height={1000}
				className=""
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-2 justify-center items-center">
					<h1 className="text-2xl font-bold text-main">Produk Kami</h1>
					<TypingAnimation className="text-main text-xs px-0">Keseimbangan Tubuh Secara Alami</TypingAnimation>
				</div>
			</div>
		</div>
	);
}
