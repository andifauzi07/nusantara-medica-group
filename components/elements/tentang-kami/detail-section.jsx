import Image from 'next/image';

export default function DetailSection() {
	return (
		<div className="gradasi-desktop md:py-16 md:w-full">
			<div className="md:h-full md:w-2/3 md:text-left md:justify-center md:px-16 md:items-start px-8 text-center flex flex-col gap-5 md:gap-10 md:text-white">
				<h1 className="text-2x md:text-4xl md:pt-0 pt-8 font-bold">
					<span className="md:text-secondary">NMA</span> Medika Herbal
				</h1>
				<p className="font-medium">
					Adalah brand kesehatan berbasis herbal yang berkomitmen menghadirkan produk alami berkualitas tinggi. Dengan memadukan kearifan tradisional dan inovasi modern, kami meracik berbagai solusi herbal yang aman, efektif, dan tanpa efek
					samping.
				</p>
				<p className="font-medium">
					Kami percaya bahwa kesehatan terbaik berasal dari alam. Oleh karena itu, setiap produk NMA Medika Herbal dibuat dari bahan-bahan alami pilihan yang telah teruji manfaatnya, membantu Anda menjalani hidup yang lebih sehat dan
					seimbang secara alami.
				</p>
			</div>
			<Image
				className="md:hidden w-full -mb-0.5"
				src="/image/rumput.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</div>
	);
}
