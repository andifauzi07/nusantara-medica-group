import Image from 'next/image';

export default function DetailSection() {
	return (
		<div>
			<div className="px-8 text-center flex flex-col gap-5">
				<h1 className="text-2xl text-main pt-8 font-bold">NMA Medika Herbal</h1>
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
				className="w-full -mb-0.5"
				src="/image/rumput.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</div>
	);
}
