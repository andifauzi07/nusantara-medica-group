import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const reviews = [
	{
		username: '~ Wulan, 23 tahun',
		body: 'Sangat puas dengan produk dari NMA Medica! Setelah rutin mengonsumsi, tubuh saya terasa lebih sehat dan bugar. Terima kasih!',
		img: 'https://avatar.vercel.sh/jack',
	},
	{
		username: '~ Budi, 34 tahun',
		body: 'Obat herbalnya benar-benar berkualitas! Sudah BPOM, 100% alami, dan halal MUI. Sekarang saya lebih tenang saat mengonsumsinya.',
		img: 'https://avatar.vercel.sh/jill',
	},
	{
		username: '~ Syifa, 40 tahun',
		body: 'Obat ini memang manjur karena berasal dari 100% bahan alami dan sudah teruji klinis',
		img: 'https://avatar.vercel.sh/john',
	},
	{
		username: '~ Aisyah, 32 tahun',
		body: 'Saya sarankan obat ini untuk anda yang sering merasa kesemutan sangat teruji dan manjur terimah kasih NMA Medica !',
		img: 'https://avatar.vercel.sh/jane',
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
	return (
		<figure className={cn('relative h-[80px] md:h-[137px] bg-[#D9D9D9] w-72 md:w-96 overflow-hidden rounded-xl border md:p-4 p-2')}>
			<Image
				src="/icon/quote.png"
				width={20}
				height={20}
				alt="quote"
				className="hidden md:block absolute top-2 right-2"
			/>
			<div className="flex flex-row place-items-start gap-4">
				<img
					className="rounded-full mt-2"
					width="48"
					height="48"
					alt=""
					src={img}
				/>
				<div className="flex flex-col space-y-2 md:space-y-6">
					{/* <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption> */}
					<blockquote className="md:mt-2 text-[10px] md:text-xs line-clamp-3 md:line-clamp-none text-[#29440F]">{body}</blockquote>
					<p className="text-xs md:text-sm font-semibold text-[#29440F]">{username}</p>
				</div>
			</div>
		</figure>
	);
};

export function ClientTestimoni() {
	return (
		<div className="relative gradasi flex w-full flex-col items-center justify-center overflow-hidden pb-12 md:p-8 md:pb-16">
			<div className="md:text-4xl relative w-full text-center py-8 text-xl font-bold md:text-left md:mt-8 md:mb-12 md:font-bold text-white">
				<h1>
					Apa <span className="text-[#FFB200]">Kata</span> Mereka
				</h1>
				<Image
					src="/icon/quote-white.png"
					width={20}
					height={20}
					alt="quote"
					className="hidden lg:block lg:absolute top-1 left-86"
				/>
			</div>
			<Marquee className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard
						key={review.username}
						{...review}
					/>
				))}
			</Marquee>
			<Marquee
				reverse
				className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard
						key={review.username}
						{...review}
					/>
				))}
			</Marquee>
		</div>
	);
}
