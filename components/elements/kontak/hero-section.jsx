import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full pt-8 h-60 relative">
			{/* <Image
				src="/image/hubungi-kami.png"
				alt="Logo"
				width={1124}
				height={868}
				className="object-cover z-0"
			/> */}
			<div className="md:hidden absolute inset-0 bg-gradient-to-b from-white/90 to-transparent z-10" />
			<div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-4 justify-center items-center">
					<TypingAnimation className="text-main text-shadow-xs">Hubungi Kami</TypingAnimation>
				</div>
			</div>
			<div className="md:w-full md:mt-32 md:px-24 md:text-4xl md:font-bold">
				<h1 className="text-main">
					Tetap <span className="text-secondary">Terhubung</span> Dengan Kami
				</h1>
			</div>
		</div>
	);
}
