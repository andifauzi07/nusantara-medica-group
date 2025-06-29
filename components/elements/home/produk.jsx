import { Button } from '@/components/ui/button';
import { produkCard } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Produk() {
	return (
		<div className="px-8 py-8 md:py-10 w-full bg-[#EBEBEB]">
			<h1 className="text-xl md:pb-10 md:text-4xl text-center md:text-left text-main font-bold">
				Produk <span className="text-[#FFB200]">Unggulan</span> Kami
			</h1>
			<div className="md:flex scroll-hidden md:gap-4">
				{produkCard.map((produk) => (
					<Link
						href={produk.href}
						key={produk.id}>
						<div className="flex md:block bg-white md:p-3 md:rounded-2xl rounded-xl md:justify-center md:w-[100%] md:gap-4 mt-4 items-center">
							<Image
								src={produk.image}
								width={200}
								height={200}
								alt={produk.id}
								className="rounded-none md:h-[150px] md:w-full md:rounded-xl rounded-l-xl w-24 h-24"
							/>
							<div className="px-2 md:px-0 flex gap-2 flex-col md:gap-4">
								<div className="flex md:gap-1 md:items-center gap-2">
									<Image
										src="/icon/stars.png"
										width={20}
										height={20}
										alt="stars"
										className="object-contain md:h-5 md:w-5 h-4 w-4"
									/>
									<h3 className="text-[#29440F] md:font-bold text-xs md:text-xl">{produk.title}</h3>
								</div>
								<p className="md:text-xs text-[10px] line-clamp-2 md:line-clamp-4 md:my-2 font-medium text-[#757575]">{produk.subTitle}</p>
								<Button
									variant="outline"
									className="hidden md:block rounded-md md:h-9 md:text-xs h-5 text-[10px]">
									<div
									//  href={produk.href}
									>
										Selengkapnya
									</div>
								</Button>
								<div
									// href={produk.href}
									className="md:hidden rounded-md hover:font-bold font-semibold transition-all ease-in h-5 text-[10px]">
									Selengkapnya
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
