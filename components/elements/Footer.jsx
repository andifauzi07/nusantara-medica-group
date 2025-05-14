import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	const icons = [
		{
			id: 'x',
			image: '/icon/x-logo-white.png',
			url: '/',
		},
		{
			id: 'instagram',
			image: '/icon/Instagram-logo-white.png',
			url: '/',
		},
		{
			id: 'youtube',
			image: '/icon/youtube-logo-white.png',
			url: '/',
		},
	];

	return (
		<div className="bg-black text-white md:py-8 pb-6 md:px-6">
			<div className="flex flex-col md:flex-row py-6 md:px-8 gap-6 md:gap-4">
				<div className="px-4 md:w-1/3 flex flex-col gap-4">
					<p className="font-bold md:text-3xl">NMA Medika Herbal</p>
					<div className="flex gap-4">
						{icons.map((icon) => (
							<Link
								key={icon.id}
								href={icon.url}>
								<Image
									key={icon.id}
									width={24}
									height={24}
									src={icon.image}
									alt={icon.id}
								/>
							</Link>
						))}
					</div>
					<p className="md:text-base text-sm">“Solusi Herbal Terpercaya Untuk Menjaga Keseimbangan Tubuh Tetap Terjaga” </p>
				</div>
				<div className="px-4 md:w-1/3 flex flex-col gap-4">
					<h3 className="md:text-3xl font-bold">Quick Link</h3>
					<ul className="flex flex-col gap-2 md:text-base text-xs">
						<li>
							<Link href="/">BERANDA</Link>
						</li>
						<li>
							<Link href="/produk">PRODUK</Link>
						</li>
						<li>
							<Link href="/tentang-kami">TENTANG KAMI</Link>
						</li>
						<li>
							<Link href="/kontak">KONTAK</Link>
						</li>
					</ul>
				</div>
				<div className="px-4 md:w-1/3 flex flex-col gap-4">
					<h3 className="md:text-3xl font-bold">Agen</h3>
					<p className="md:text-base text-xs">COSTUMER SERVICE</p>
				</div>
				<div className="px-4 md:w-1/3 flex flex-col gap-4">
					<h3 className="md:text-3xl font-bold">Contact Info</h3>
					<div className="text-center lg:text-left lg:block flex justify-center items-start lg:items-center flex-col">
						<span className="flex gap-4 py-2">
							<Image
								src="/icon/HomeIcon.svg"
								width={20}
								height={20}
								alt="Home Icon"
								className="w-auto h-auto"
							/>
							<p className="text-xs">BTN Bukit Tamarunang Blok L1 No.4</p>
						</span>
						<span className="flex gap-4 py-2">
							<Image
								src="/icon/PhoneIcon.svg"
								width={20}
								height={20}
								alt="Home Icon"
								className="w-auto h-auto"
							/>
							<p className="text-xs">+6281244445575</p>
						</span>
						<span className="flex gap-4 py-2">
							<Image
								src="/icon/MailIcon.svg"
								width={20}
								height={20}
								alt="Home Icon"
								className="w-auto h-auto"
							/>
							<p className="text-xs">nmamedika@gmail.com</p>
						</span>
					</div>
				</div>
			</div>
			<p className="text-xs text-center font-light mt-4">NMA Medika 2024 All Rights Reserved</p>
		</div>
	);
}
