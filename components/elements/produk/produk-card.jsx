import Image from 'next/image';
import Link from 'next/link';
import { produkDetail } from '@/lib/constants';

export default function ProdukCard() {
	return (
		<div className="md:bg-[#ebebeb] bg-white md:flex md:justify-center md:px-8 md:flex-col md:items-start md:py-16 md:gap-8 pb-10">
			<h1 className="hidden md:block md:text-main md:font-semibold md:text-4xl md:text-left md:pb-8">Unggulan</h1>
			<div className="md:w-full md:h-fit h-40 flex px-4 md:px-0 gap-4 md:items-center md:gap-6 scroll-hidden">
				{produkDetail.map((item, index) => (
					<div
						key={item.slug}
						className="md:w-60 w-32 bg-white justify-center items-start relative shrink-0 flex flex-col rounded-[8px] shadow-md h-fit p-2">
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
						<h1 className="pt-4 text-sm md:text-lg font-semibold text-main">{item.title}</h1>
						<Link
							href={`/produk/${item.slug}`}
							className="hover:font-bold transition-all ease-in text-[8px] md:text-xs">
							Selengkapnya
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
