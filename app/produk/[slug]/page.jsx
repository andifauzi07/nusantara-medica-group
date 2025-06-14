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
			<div className="md:hidden pt-8">
				<Image
					src={details.image}
					alt="Logo"
					width={1024}
					height={768}
					className="md:hidden block object-cover z-0"
				/>
				<div className="flex w-full px-8 justify-between items-center py-6">
					<div className="flex gap-4 items-center">
						<h1 className="text-main text-xl font-bold">{details.title}</h1>
						<Image
							src="/icon/stars.png"
							width={20}
							height={20}
							alt="stars"
							className="object-contain md:h-5 md:w-5 h-8 w-8"
						/>
					</div>
					<Button
						variant="default"
						className="text-xs gradasi rounded-md"
						size="sm">
						<a
							href="https://wa.me/6282395209997"
							target="_blank">
							Beli Sekarang
						</a>
					</Button>
				</div>
				<div className="px-8 py-6">
					<p className="whitespace-pre-line font-medium">{details.deskripsi}</p>
				</div>
				<div className="flex gap-2 pb-4 px-8 justify-center items-center">
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
				<div className="gradasi">
					<div className="bg-white flex items-center w-fit px-6 h-[48px] rounded-br-4xl">
						<h3 className="text-xl font-bold text-main">Manfaat & Kandungan</h3>
					</div>
					{details.manfaat.map((item, index) => (
						<div
							key={index}
							className="px-6 text-white py-5">
							<p className="font-semibold text-base pb-4">{item.subTitle}</p>
							<p className="whitespace-pre-line pb-4 text-sm">{item.deskripsi}</p>
						</div>
					))}
				</div>
			</div>
			<div className="hidden md:flex md:justify-center md:items-center md:w-full md:py-32 md:px-16">
				<div className="w-full flex flex-col text-left justify-end">
					<h1 className="text-4xl font-bold text-main py-8">{details.title}</h1>
					<p className="pb-8">{details.deskripsi}</p>
					<div className="flex gap-4 mb-8">
						<a
							href="https://wa.me/6282395209997"
							target="_blank">
							<Button className="rounded-md">
								Beli Sekarang{' '}
								<Image
									src="/icon/arrow-right.svg"
									width={18}
									height={18}
									alt="arrow"
								/>
							</Button>
						</a>
						<Image
							src="/icon/keranjang.png"
							width={24}
							height={24}
							alt="arrow"
						/>
					</div>
					<div className="w-full h-[1px] bg-main" />
				</div>
				<div className="w-full flex items-center flex-col gap-y-8">
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
					<Image
						src={details.image}
						alt="Logo"
						width={350}
						height={300}
						className="block object-cover z-0 rounded-lg"
					/>
				</div>
			</div>
			<div className="hidden md:block w-2/3 my-8 px-16 pb-8">
				<h3 className="text-4xl font-bold text-main pb-6">Manfaat & Kandungan</h3>
				{details.manfaat.map((item, index) => (
					<div key={index}>
						<p className="font-semibold text-xl pb-4">{item.subTitle}</p>
						<p className="whitespace-pre-line pb-4 text-lg">{item.deskripsi}</p>
					</div>
				))}
			</div>
		</>
	);
}
