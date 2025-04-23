import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function DetailSection() {
	return (
		<>
			<div className="w-full px-8 py-6">
				<h1 className="text-2xl font-bold text-main pb-4">Kenali Kebersamaan Kami</h1>
				<h3 className="pb-4 font-bold text-xl">NMA Medika Herbal</h3>
				<p className="text-justify text-sm pb-4">
					adalah brand kesehatan berbasis herbal yang berkomitmen menghadirkan produk alami berkualitas tinggi. Dengan memadukan kearifan tradisional dan inovasi modern, kami meracik berbagai solusi herbal yang aman, efektif, dan tanpa efek
					samping.
				</p>
				<p className="text-justify text-sm pb-4">
					Kami percaya bahwa kesehatan terbaik berasal dari alam. Oleh karena itu, setiap produk NMA Medika Herbal dibuat dari bahan-bahan alami pilihan yang telah teruji manfaatnya, membantu Anda menjalani hidup yang lebih sehat dan
					seimbang secara alami.
				</p>
				<Button
					variant="outline"
					className="mb-4"
					size="sm">
					Selengkapnya
				</Button>
				<div className="h-[0.5px] my-4 w-full bg-black" />
				<div>
					<h1 className="text-2xl text text-center font-bold text-main pb-4">Kenapa Harus Memilih NMA Medika</h1>
					<p className="text-center text-base text-main font-semibold">Produk berkualitas</p>
					<div className="w-full flex justify-center my-4">
						<Image
							src="/image/ilustrator.png"
							height={250}
							width={250}
							alt="Ilustrator"
						/>
					</div>
					<div className="w-full flex justify-between gap-4">
						<p className="text-xs font-semibold text-main text-center">Konsultasi & Edukasi Kesehatan</p>
						<p className="text-xs font-semibold text-main text-center">Pelayanan Terpercaya & Harga Terjangkau</p>
					</div>
				</div>
			</div>
			<Image
				className="w-full -mb-0.5"
				src="/image/rumput.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</>
	);
}
