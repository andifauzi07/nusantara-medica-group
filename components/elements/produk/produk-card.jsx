import Image from 'next/image';
import Link from 'next/link';

export default function ProdukCard() {
	const productsImage1 = [
		{ image: '/image/produk/benwaras.png', slug: '/produk/benwaras' },
		{ image: '/image/produk/cardicure.png', slug: '/produk/cardicure' },
		{ image: '/image/produk/forukol.png', slug: 'produk/forukol' },
		{ image: '/image/produk/gabegah.png', slug: '/produk/gabegah' },
	];
	const productsImage2 = [
		{ image: '/image/produk/jonafro.png', slug: '/produk/jon-afro' },
		{ image: '/image/produk/kistovit.png', slug: '/produk/kystovit' },
		{ image: '/image/produk/netraklin.png', slug: 'produk/netraklin' },
		{ image: '/image/produk/rhemtik.png', slug: '/produk/rhemtik' },
	];
	const productsImage3 = [
		{ image: '/image/produk/slimcare.png', slug: '/produk/slim-care' },
		{ image: '/image/produk/velution.png', slug: '/produk/velution' },
		{ image: '/image/produk/zada.png', slug: 'produk/zada' },
		{ image: '/image/produk/zeflamona.png', slug: '/produk/zeflamona' },
	];

	return (
		<div className="pl-4">
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage1.map((produk, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Link href={produk.slug}>
							<Image
								src={produk.image}
								alt={`Produk ${index + 1}`}
								width={200}
								height={200}
								className="rounded-lg shadow-lg"
							/>
						</Link>
					</div>
				))}
			</div>
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage2.map((produk, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Link href={produk.slug}>
							<Image
								src={produk.image}
								alt={`Produk ${index + 1}`}
								width={200}
								height={200}
								className="rounded-lg shadow-lg"
							/>
						</Link>
					</div>
				))}
			</div>
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage3.map((produk, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Link href={produk.slug}>
							<Image
								src={produk.image}
								alt={`Produk ${index + 1}`}
								width={200}
								height={200}
								className="rounded-lg shadow-lg"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
