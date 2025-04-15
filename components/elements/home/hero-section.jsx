import { TypingAnimation } from '@/components/magicui/typing-animation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full h-80 relative">
			<Image
				src="/image/hero.png"
				alt="Logo"
				width={1024}
				height={768}
				className="object-cover hover:opacity-70 z-0"
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-4 justify-center items-center">
					<TypingAnimation className="text-white">Solusi Herbal Terpercaya Untuk Menjaga Kesehatan</TypingAnimation>
					<Button
						variant="transparent"
						size="sm">
						<Link href="/kontak">Selengkapnya</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
