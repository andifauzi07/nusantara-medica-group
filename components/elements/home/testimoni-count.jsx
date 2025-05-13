'use client';
import CountUp from 'react-countup';

export default function TestimoniCount() {
	return (
		<div className="bg-main  md:bg-center md:items-center md:justify-between md:px-16 text-white px-8 py-8 md:bg-gradient-to-r md:from-[#29440f] md:to-[#65AA25]">
			<div>
				<h3 className="md:text-3xl md:font-semibold text-xl text-center">
					Kenapa Harus Memilih <br />
					<span className="text-[#FFB200]">NMA Medica</span>
				</h3>
			</div>
			<div className="flex w-full justify-center items-center gap-6">
				<div className="flex gap-4">
					<p className="md:text-4xl md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						<CountUp
							end={35}
							duration={5}
						/>
						<span className="text-[#FFB200] md:-mt-3 md:pr-1">+</span>
						<span className="md:text-base md:font-thin md:leading-none">Tahun berpengalaman</span>
					</p>
					<div className="h-[65px] w-[1px] bg-[#FFB200]" />
					<p className="md:text-4xl md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						<CountUp
							end={29}
							duration={5}
						/>
						<span className="text-[#FFB200] md:-mt-3 md:pr-1">+</span>
						<span className="md:text-base md:font-thin md:leading-none">Kota di indonesia</span>
					</p>
					<div className="h-[65px] w-[1px] bg-[#FFB200]" />
					<p className="md:text-4xl md:font-semibold md:flex md:items-center md:justify-center md:w-1/3">
						<CountUp
							end={3200}
							// duration={5}
						/>
						<span className="text-[#FFB200] md:-mt-3 md:pr-1">+</span>
						<span className="md:text-base md:font-thin md:leading-none">Pelanggan Setia</span>
					</p>
				</div>
			</div>
		</div>
	);
}
