import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailSection() {
	return (
		<>
			<div className="md:hidden w-full px-8 py-6">
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
					<Link href="/tentang-kami">Selengkapnya</Link>
				</Button>
			</div>
			<div className="hidden md:flex justify-center gap-8 w-full px-8 py-10">
				<Image
					src="/dekstop/detail-dekstop.jpeg"
					height={500}
					width={500}
					alt="Dekstop"
					className="w-1/3 rounded-xl"
				/>
				<div className="w-2/3 flex flex-col gap-8">
					<h1 className="text-main text-4xl font-bold">
						<span className="text-[#FFB200]">Kenali</span> Kebersamaan Kami
					</h1>
					<p className="font-bold text-[#757575] text-2xl">NMA Medika Herbal</p>
					<p className="leading-8 text-justify">
						Adalah brand kesehatan berbasis herbal yang berkomitmen menghadirkan produk alami berkualitas tinggi. Dengan memadukan kearifan tradisional dan inovasi modern, kami meracik berbagai solusi herbal yang aman, efektif, dan tanpa
						efek samping.
					</p>
					<p className="leading-8 text-justify">
						Kami percaya bahwa kesehatan terbaik berasal dari alam. Oleh karena itu, setiap produk NMA Medica Herbal dibuat dari bahan-bahan alami pilihan yang telah teruji manfaatnya, membantu Anda menjalani hidup yang lebih sehat dan
						seimbang secara alami.
					</p>
					<div className="flex gap-8 items-end h-full">
						<Button
							variant="outline"
							className=""
							size="sm">
							<Link href="/tentang-kami">Selengkapnya</Link>
							<Image
								src="/icon/Arrow.svg"
								width={20}
								height={20}
								alt="Button"
								className="w-4 h-4 lg:w-[20px] lg:h-[20px]"
							/>
						</Button>
						<Button
							variant="default"
							className=""
							size="sm">
							<Link href="/produk">Katalog</Link>
							<Image
								src="/icon/arrow-right.svg"
								width={20}
								height={20}
								alt="Button"
								className="w-4 h-4 lg:w-[20px] lg:h-[20px]"
							/>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
