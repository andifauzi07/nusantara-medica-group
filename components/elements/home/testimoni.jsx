import Image from 'next/image';

export default function Testimoni() {
	const testi = [
		{
			id: 'bpom',
			image: '/image/icon/bpom.png',
			title: 'BPOM',
			subTitle: 'Aman & terpercaya dengan izin resmi dari Badan Pengawas Obat dan Makanan.',
		},
		{
			id: 'alami',
			image: '/image/icon/alam.png',
			title: '100% Alami',
			subTitle: 'Dibuat dari bahan herbal murni tanpa campuran bahan kimia berbahaya.',
		},
		{
			id: 'mui',
			image: '/image/icon/mui.png',
			title: 'Halal MUI',
			subTitle: 'Dijamin kehalalannya sesuai dengan standar Majelis Ulama Indonesia.',
		},
	];
	return (
		<div className="bg-main text-white px-8 py-8">
			{testi.map((item) => (
				<div
					key={item.id}
					className="w-full px-4 flex gap-4 flex-col justify-center items-center">
					<Image
						src={item.image}
						width={80}
						height={80}
						alt={item.title}
					/>
					<h3 className="text-xl">{item.title}</h3>
					<div className="h-[0.5px] my-2 w-1/4 bg-white" />
					<p className="text-xs text-center pb-4">{item.subTitle}</p>
				</div>
			))}
		</div>
	);
}
