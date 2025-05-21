import { TypingAnimation } from '@/components/magicui/typing-animation';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full md:flex md:justify-start md:items-center md:h-screen h-16 relative md:z-0 -z-20">
			<div className="md:hidden">
				<div className="flex pl-5 w-full mt-24 flex-row gap-2 justify-start items-center">
					<h1 className="text-xl font-bold text-main">Produk Unggulan </h1>
					<Image
						src="/icon/arrow-right-main.png"
						width={30}
						height={30}
						alt="arrow"
					/>
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
