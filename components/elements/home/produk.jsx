import { Button } from '@/components/ui/button';
import { produkCard } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Produk() {
	return (
		<div className="px-8 py-8 bg-[#EBEBEB]">
			<h1 className="text-xl md:text-2xl text-center md:text-left text-main font-bold">
				Produk <span className="text-[#FFB200]">Unggulan</span> Kami
			</h1>
			<div className="md:flex w-full scroll-hidden md:gap-4">
				{produkCard.map((produk) => (
					<div
						key={produk.id}
						className="flex bg-white md:p-3 rounded-2xl justify-center md:w-[947px] gap-4 mt-4 items-center">
						<Image
							src={produk.image}
							width={200}
							height={200}
							alt={produk.id}
							className="rounded-xl"
						/>
						<div>
							<div className="flex gap-2">
								<Image
									src="/icon/stars.png"
									width={20}
									height={20}
									alt="stars"
									className="object-contain"
								/>
								<h3 className="text-[#29440F] md:font-bold md:text-xl">{produk.title}</h3>
							</div>
							<p className="text-xs line-clamp-4 my-2 font-medium text-[#757575]">{produk.subTitle}</p>
							<Button
								size="sm"
								variant="outline"
								className="rounded-md">
								<Link href={produk.href}>Selengkapnya</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
