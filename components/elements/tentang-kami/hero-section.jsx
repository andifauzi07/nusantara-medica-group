import { NumberTicker } from '@/components/magicui/number-ticker';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full md:px-8 md:pt-0 pt-8 h-60 relative md:h-screen">
			<Image
				src="/image/tentang-kami.png"
				alt="Logo"
				width={1124}
				height={868}
				className="md:hidden object-cover z-0"
			/>
			<div className="md:hidden absolute inset-0 bg-gradient-to-b from-white/90 to-transparent z-10" />
			<div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="flex flex-col gap-4 justify-center items-center">
					<TypingAnimation className="text-main text-shadow-xs">Tentang Kami</TypingAnimation>
				</div>
			</div>
			<div className="hidden md:flex md:w-2/3 md:flex-col md:gap-8 md:justify-center md:px-8 md:text-left md:h-screen md:items-center">
				<h1 className="md:text-4xl md:font-bold text-[#29440F]">Perjalanan NMA Medika Bersama Indonesia.</h1>
				<div className="md:flex md:w-full md:gap-4 md:items-center md:justify-center">
					<div className="md:flex md:flex-col md:w-full md:relative">
						<NumberTicker
							value={35}
							className="text-3xl text-[#29440F] font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/plus-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-4 left-20 text-3xl md:-mt-3 md:pr-1"
						/>
						<h3 className="text-xl text-[#757575]">Tahun Berpengalaman</h3>
					</div>
					<div className="md:flex md:flex-col md:w-full md:relative">
						<NumberTicker
							value={29}
							className="text-3xl text-[#29440F] font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/lokasi-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-4 left-20 text-3xl md:-mt-3 md:pr-1"
						/>
						<h3 className="text-xl text-[#757575]">Kota di Indonesia</h3>
					</div>
					<div className="md:flex md:w-full md:flex-col md:relative">
						<NumberTicker
							value={3200}
							className="text-3xl text-[#29440F] font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/orang-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-4 left-45 text-3xl md:-mt-3 md:pr-1"
						/>
						<h3 className="text-xl text-[#757575]">Pelanggan Setia</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
