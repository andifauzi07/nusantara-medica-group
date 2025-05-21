import Image from 'next/image';
import Link from 'next/link';
import { produkDetail } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function ProdukSection() {
	return (
		<div className="gradasi-miring md:flex md:justify-center md:px-8 md:flex-col md:items-start md:py-16 md:gap-8">
			<h1 className="md:text-white md:font-semibold md:text-4xl md:text-left md:pb-8">Beberapa Produk Terlaris Lainnya</h1>
			<div className="md:w-full grid-cols-4 md:grid md:place-items-center md:gap-6">
				{produkDetail.map((item, index) => (
					<div
						key={item.slug}
						className="w-60 bg-white justify-center items-start relative flex flex-col rounded-[8px] shadow-md h-fit p-2">
						<Image
							src={item.image}
							alt={`Produk ${index + 1}`}
							width={300}
							height={300}
							className="rounded-[8px]"
						/>
						<Image
							src="/icon/stars.png"
							width={20}
							height={20}
							alt="stars"
							className="absolute top-4 left-4 object-contain md:h-5 md:w-5 h-4 w-4"
						/>
						<h1 className="pt-4 font-semibold text-main">{item.title}</h1>
						<Link
							href={`/produk/${item.slug}`}
							className="hover:font-bold transition-all ease-in md:text-xs">
							Selengkapnya
						</Link>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center">
				<a
					href="https://wa.me/6285824571413"
					target="_blank">
					<Button
						variant="outline"
						className="rounded-md border-none">
						Konsultasikan
						<Image
							src="/icon/Arrow.svg"
							width={20}
							height={20}
							alt="Button"
							className="w-4 h-4 lg:w-[20px] lg:h-[20px]"
						/>
					</Button>
				</a>
			</div>
		</div>
	);
}
