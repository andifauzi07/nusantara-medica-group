import { produkCard } from '@/lib/constants';
import Image from 'next/image';

export default function Produk() {
	return (
		<div className="px-8 py-8">
			<h1 className="text-xl text-center text-main font-bold">Produk unggulan kami</h1>
			{produkCard.map((produk) => (
				<div
					key={produk.id}
					className="flex flex-col justify-center w-full gap-4 mt-4 items-center">
					<Image
						src={produk.image}
						width={200}
						height={200}
						alt={produk.id}
						className="rounded-xl"
					/>
					<p className="text-xs font-medium">{produk.subTitle}</p>
					<div className="h-[0.5px] my-4 w-full bg-black" />
				</div>
			))}
		</div>
	);
}
