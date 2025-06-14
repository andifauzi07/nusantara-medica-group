import Image from 'next/image';
import Link from 'next/link';
import { produkDetail } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function ProdukSection() {
	return (
		<div className="gradasi md:flex rounded-tl-4xl md:rounded-none md:justify-center md:px-8 md:flex-col md:items-start md:py-16 py-8 px-4 md:gap-8 relative">
			<div className="md:hidden w-[152px] rounded-tl-4xl absolute -top-1.5 right-0 h-3.5 bg-[#FFB200]" />
			<h1 className="text-base pb-4 pl-4 text-white font-semibold md:text-4xl md:text-left md:pb-8">
				Beberapa Produk <span className="text-secondary md:text-white">Terlaris </span>Lainnya
			</h1>
			<div className="md:w-full grid-cols-2 gap-y-8 md:grid-cols-4 grid place-items-center md:gap-6">
				{produkDetail.map((item, index) => (
					<div
						key={item.slug}
						className="md:w-60 w-32 bg-white justify-center items-start relative flex flex-col rounded-[8px] shadow-md h-fit p-2">
						<Image
							src={item.image}
							alt={`Produk ${index + 1}`}
							width={300}
							height={300}
							className="rounded-[8px]"
						/>
						{item.unggulan && (
							<Image
								src="/icon/stars.png"
								width={20}
								height={20}
								alt="stars"
								className="absolute top-4 left-4 object-contain md:h-5 md:w-5 h-4 w-4"
							/>
						)}
						<h1 className="pt-4 font-semibold text-main text-sm md:text-lg">{item.title}</h1>
						<Link
							href={`/produk/${item.slug}`}
							className="hover:font-bold transition-all ease-in md:text-xs text-[8px]">
							Selengkapnya
						</Link>
					</div>
				))}
			</div>
			<div className="hidden w-full md:flex justify-center">
				<a
					href="https://wa.me/6282395209997"
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
			<div className="flex w-full pt-4 md:hidden justify-center">
				<a
					href="https://wa.me/6285824571413"
					target="_blank">
					<Button
						variant="outline"
						size="sm"
						className="rounded-md h-6 text-xs border-none">
						Konsultasikan
						<Image
							src="/icon/Arrow.svg"
							width={16}
							height={16}
							alt="Button"
							className="w-4 h-4 lg:w-[20px] lg:h-[20px]"
						/>
					</Button>
				</a>
			</div>
		</div>
	);
}
