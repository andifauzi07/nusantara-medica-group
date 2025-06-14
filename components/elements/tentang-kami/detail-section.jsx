import Image from 'next/image';

export default function DetailSection() {
	return (
		<div className="gradasi-desktop pb-10 md:py-16 md:w-full">
			<div className="md:h-full md:w-2/3 text-left md:justify-center md:px-16 md:items-start px-8 flex flex-col gap-5 md:gap-10 text-main md:text-white">
				<h1 className="text-2xl md:text-4xl md:pt-0 pt-8 font-bold">
					<span className="text-secondary">NMA</span> Herbal Medika
				</h1>
				<p className="font-medium text-sm">
					Adalah brand kesehatan berbasis herbal yang berkomitmen menghadirkan produk alami berkualitas tinggi. Dengan memadukan kearifan tradisional dan inovasi modern, kami meracik berbagai solusi herbal yang aman, efektif, dan tanpa efek
					samping.
				</p>
				<p className="font-medium text-sm">
					Kami percaya bahwa kesehatan terbaik berasal dari alam. Oleh karena itu, setiap produk NMA Medika Herbal dibuat dari bahan-bahan alami pilihan yang telah teruji manfaatnya, membantu Anda menjalani hidup yang lebih sehat dan
					seimbang secara alami.
				</p>
			</div>
		</div>
	);
}
