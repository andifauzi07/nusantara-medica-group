import Image from 'next/image';

export default function Sertifikat() {
	const image = ['/image/sertifikat/kementrian.png', '/image/sertifikat/halal.png', '/image/sertifikat/jamu.png', '/image/sertifikat/bpom.png', '/image/sertifikat/indonesia.png', '/image/sertifikat/natural.png'];
	return (
		<>
			<div className="px-8 py-4">
				<h1 className="text-xl text-center md:text-4xl text-main font-bold">Bersertifikat</h1>
				<div className="md:flex md:w-full md:gap-16 md:items-center md:my-16 md:justify-center grid grid-cols-2 my-4 place-items-center">
					{image.map((img, index) => (
						<Image
							key={(index += img)}
							src={img}
							alt="sertifikat"
							width={100}
							height={100}
							className="object-contain"
						/>
					))}
				</div>
			</div>
			{/* <Image
				className="hidden md:block w-full -mb-0.5"
				src="/dekstop/bg-desktop-2.jpeg"
				width={200}
				height={100}
				quality={100}
				alt="Nature"
			/> */}
		</>
	);
}
