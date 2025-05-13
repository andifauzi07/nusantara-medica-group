import { TypingAnimation } from '@/components/magicui/typing-animation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BackgroundSlider from '@/components/ui/BackgroundSlider';

export default function HeroSection() {
	const imagesMobile = ['/image/hero.png', '/image/hero2.png', '/image/hero3.png'];
	const imagesDekstop = ['/image/hero1-mobile.png', '/image/hero2-mobile.png', '/image/hero3-mobile.png'];

	return (
		<div className="w-full h-80 lg:h-screen relative">
			<BackgroundSlider
				images={imagesMobile}
				interval={5000}
				transitionDuration={1000}
				className="z-0 lg:hidden"
			/>
			<BackgroundSlider
				images={imagesDekstop}
				interval={5000}
				transitionDuration={1000}
				className="z-0 hidden lg:block"
			/>
			<div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-4 justify-center items-center">
					<TypingAnimation className="text-white">Solusi Herbal Terpercaya Untuk Menjaga Kesehatan</TypingAnimation>
					<Button
						variant="transparent"
						size="sm">
						<Link href="/kontak">Selengkapnya</Link>
					</Button>
				</div>
			</div>
			<div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
				<div className="flex flex-col gap-4 justify-center items-center">
					<TypingAnimation className="text-white text-4xl">Solusi Herbal Terpercaya Untuk Menjaga</TypingAnimation>
					<TypingAnimation className="text-white font-semibold text-xl mb-10">Keseimbangan Tubuh Secara Alami</TypingAnimation>
					<Button variant="transparent">
						<Link href="/kontak">Hubungi Kami</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
