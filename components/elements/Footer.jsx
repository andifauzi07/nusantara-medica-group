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
		<div className="bg-black px-8 py-8 text-white flex flex-col gap-6">
			<p className="font-bold text-2xl">NMA Medica Herbal</p>
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
			<p>“Solusi Herbal Terpercaya Untuk Menjaga Keseimbangan Tubuh Tetap Terjaga” </p>
			<h3 className="text-3xl font-bold">Quick Link</h3>
			<ul className="flex flex-col gap-2">
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
			<h3 className="text-3xl font-bold">Agen</h3>
			<p>COSTUMER SERVICE</p>
			<h3 className="text-3xl font-bold">Contact Info</h3>
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
					<p className="text-xs">nmamedica@gmail.com</p>
				</span>
			</div>
			<p className="text-xs text-center font-light mt-4">NMA Medica 2024 All Rights Reserved</p>
		</div>
	);
}
