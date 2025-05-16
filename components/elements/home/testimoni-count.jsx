import Image from 'next/image';
// import { NumberTicker } from '@/registry/magicui/number-ticker';
import { NumberTicker } from '@/components/magicui/number-ticker';

export default function TestimoniCount() {
	return (
		<div className="bg-main w-full rounded-tl-4xl md:rounded-none md:bg-center text-white px-4 md:px-8 py-4 md:py-8 md:bg-gradient-to-r md:from-[#29440f] md:to-[#65AA25] relative">
			<div className="md:hidden w-[152px] rounded-tl-4xl absolute -top-1.5 right-0 h-3.5 bg-[#FFB200]" />
			<div>
				<h3 className="md:text-3xl md:font-semibold pb-2 md:pb-0 text-lg text-left md:text-center font-semibold">
					Kenapa Harus Memilih <br />
					<span className="text-[#FFB200]">NMA Medica</span>
				</h3>
			</div>
			<div className="flex justify-center items-center md:gap-8">
				<div className="flex md:gap-4 w-full items-center justify-between">
					<p className="md:text-[56px] relative md:gap-5 md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						{/* <CountUp
							className="text-3xl font-bold md:text-[56px]"
							end={35}
							duration={5}
						/> */}
						<NumberTicker
							value={35}
							className="text-3xl text-white font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/plus.png"
							width={12}
							height={12}
							alt="lokasi"
							className="md:hidden absolute -top-0.5 right-16 text-3xl md:-mt-3 md:pr-1"
						/>
						<Image
							src="/icon/plus-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-5 left-31 text-3xl md:-mt-3 md:pr-1"
						/>
						<br className="md:hidden" />
						<span className="md:text-base md:font-thin text-[10px] md:leading-none">Tahun berpengalaman</span>
					</p>
					<div className="md:h-[65px] h-[32px] w-[1px] bg-[#FFB200]" />
					<p className="md:text-[56px] md:gap-5 relative md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						{/* <CountUp
							className="text-3xl font-bold md:text-[56px]"
							end={29}
							duration={5}
						/> */}
						<NumberTicker
							value={29}
							className="text-3xl text-white font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/lokasi.png"
							width={12}
							height={12}
							alt="lokasi"
							className="md:hidden absolute -top-0.5 right-10 text-3xl md:-mt-3 md:pr-1"
						/>
						<Image
							src="/icon/lokasi-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-5 left-37 text-3xl md:-mt-3 md:pr-1"
						/>
						<br className="md:hidden" />
						<span className="md:text-base text-[10px] md:font-thin md:leading-none">Kota di indonesia</span>
					</p>
					<div className="md:h-[65px] h-[32px] w-[1px] bg-[#FFB200]" />
					<p className="md:text-[56px] md:gap-5 relative md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						{/* <CountUp
							className="text-3xl font-bold md:text-[56px]"
							end={3200}
							// duration={5}
						/> */}
						<NumberTicker
							value={3200}
							className="text-3xl text-white font-bold md:text-[56px]"
						/>
						<Image
							src="/icon/orang.png"
							width={12}
							height={12}
							alt="lokasi"
							className="md:hidden absolute -top-0.5 -right-2 text-3xl md:-mt-3 md:pr-1"
						/>
						<Image
							src="/icon/orang-desktop.png"
							width={24}
							height={24}
							alt="lokasi"
							className="hidden md:block absolute top-4 left-51 text-3xl md:-mt-3 md:pr-1"
						/>
						<br className="md:hidden" />
						<span className="md:text-base text-[10px] md:font-thin md:leading-none">Pelanggan Setia</span>
					</p>
				</div>
			</div>
		</div>
	);
}
