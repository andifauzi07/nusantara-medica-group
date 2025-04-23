import { produkDetail } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default async function Page({ params }) {
	const id = (await params).slug;

	const details = produkDetail.find((item) => {
		return item.slug === id;
	});

	if (details === undefined) {
		return notFound();
	}

	const sertifikat = ['/image/sertifikat/kementrian.png', '/image/sertifikat/halal.png', '/image/sertifikat/jamu.png', '/image/sertifikat/bpom.png', '/image/sertifikat/indonesia.png', '/image/sertifikat/natural.png'];
	return (
		<>
			<div className="pt-8">
				<Image
					src={details.image}
					alt="Logo"
					width={1024}
					height={768}
					className="object-cover z-0"
				/>
				<div className="flex w-full px-8 justify-between py-6">
					<h1 className="text-main text-xl font-bold">{details.title}</h1>
					<Button
						variant="default"
						className="text-xs"
						size="sm">
						Beli Sekarang
					</Button>
				</div>
				<div className="px-8 py-6">
					<p className="whitespace-pre-line font-medium">{details.deskripsi}</p>
				</div>
				<div className="flex gap-2 px-8 justify-center items-center">
					{sertifikat.map((img, index) => (
						<Image
							key={(index += img)}
							src={img}
							alt="sertifikat"
							width={50}
							height={50}
							className="object-contain"
						/>
					))}
				</div>
				<div className="px-6 py-8">
					<div className="h-0.5 w-full bg-main flex justify-center" />
				</div>
				<div className="px-8">
					<h3 className="text-xl font-bold text-main pb-6">Manfaat & Kandungan</h3>
					{details.manfaat.map((item, index) => (
						<div key={index}>
							<p className="font-semibold text-base pb-4">{item.subTitle}</p>
							<p className="whitespace-pre-line pb-4 text-sm">{item.deskripsi}</p>
						</div>
					))}
				</div>
			</div>
			<Image
				className="w-full -mb-0.5"
				src="/image/rumput.png"
				width={200}
				height={100}
				alt="rumput"
			/>
		</>
	);
}
