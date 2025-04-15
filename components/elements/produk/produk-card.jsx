import Image from 'next/image';

export default function ProdukCard() {
	const productsImage1 = ['/image/produk/benwaras.png', '/image/produk/cardicure.png', '/image/produk/forukol.png', '/image/produk/gabegah.png'];

	const productsImage2 = ['/image/produk/jonafro.png', '/image/produk/kistovit.png', '/image/produk/netraklin.png', '/image/produk/rhemtik.png'];

	const productsImage3 = ['/image/produk/slimcare.png', '/image/produk/velution.png', '/image/produk/zada.png', '/image/produk/zeflamona.png'];

	return (
		<div className="pl-4">
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage1.map((image, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Image
							src={image}
							alt={`Produk ${index + 1}`}
							width={200}
							height={200}
							className="rounded-lg shadow-lg"
						/>
					</div>
				))}
			</div>
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage2.map((image, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Image
							src={image}
							alt={`Produk ${index + 1}`}
							width={200}
							height={200}
							className="rounded-lg shadow-lg"
						/>
					</div>
				))}
			</div>
			<div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
				{productsImage3.map((image, index) => (
					<div
						key={index}
						className="flex justify-center items-center mb-4 min-w-[200px] shrink-0">
						<Image
							src={image}
							alt={`Produk ${index + 1}`}
							width={200}
							height={200}
							className="rounded-lg shadow-lg"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
