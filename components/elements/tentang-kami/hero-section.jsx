import { NumberTicker } from '@/components/magicui/number-ticker';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full md:px-8 md:pt-0 h-fit relative md:h-screen">
			<Image
				src="/image/bg-terbalik.png"
				alt="Logo"
				width={1124}
				height={868}
				className="md:hidden object-cover z-0"
			/>
			<div className="block md:flex md:w-2/3 md:flex-col md:gap-8 md:justify-center md:px-8 md:text-left md:h-screen md:items-center">
				<h1 className="md:text-4xl pb-4 md:pb-0 text-xl px-8 md:px-0 font-bold text-[#29440F]">Perjalanan NMA Herbal Medika Bersama Indonesia.</h1>
				<div className="md:flex w-full md:gap-4 md:items-center md:justify-center">
					<div className="flex gap-x-4 items-center md:items-start md:gap-x-0 md:flex-col flex-row w-full relative">
						<div>
							<div className="md:hidden gradasi block h-[22px] w-[45px]" />
							<div className="md:hidden bg-secondary block h-[2px] w-[40px]" />
						</div>
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
						<Image
							src="/icon/plus-desktop.png"
							width={16}
							height={16}
							alt="lokasi"
							className="md:hidden absolute top-2 left-26"
						/>
						<h3 className="md:text-xl text-sm text-[#757575]">Tahun Berpengalaman</h3>
					</div>
					<div className="flex gap-x-8 items-center md:items-start md:gap-x-0 md:flex-col flex-row w-full relative">
						<div>
							<div className="md:hidden gradasi block h-[22px] w-[79px]" />
							<div className="md:hidden bg-secondary block h-[2px] w-[74px]" />
						</div>
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
						<Image
							src="/icon/lokasi-desktop.png"
							width={16}
							height={16}
							alt="lokasi"
							className="md:hidden absolute top-1 left-39"
						/>
						<h3 className="md:text-xl text-sm text-[#757575]">Kota di Indonesia</h3>
					</div>
					<div className="flex gap-x-8 items-center md:items-start md:gap-x-0 w-full md:flex-col flex-row relative">
						<div>
							<div className="md:hidden gradasi block h-[22px] w-[111px]" />
							<div className="md:hidden bg-secondary block h-[2px] w-[106px]" />
						</div>
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
						<Image
							src="/icon/orang-desktop.png"
							width={16}
							height={16}
							alt="lokasi"
							className="md:hidden absolute top-1 left-60"
						/>
						<h3 className="md:text-xl text-sm text-[#757575]">Pelanggan Setia</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
