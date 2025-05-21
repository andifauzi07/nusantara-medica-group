import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className="w-full h-40 relative">
			<Image
				src="/image/bg-terbalik.png"
				alt="Logo"
				width={1124}
				height={868}
				className="md:hidden object-cover z-0"
			/>
			<div className="md:w-full md:mt-32 md:px-24 text-xl md:text-4xl px-8 font-bold">
				<h1 className="text-main">
					Tetap <span className="text-secondary">Terhubung</span> Dengan Kami
				</h1>
			</div>
		</div>
	);
}
