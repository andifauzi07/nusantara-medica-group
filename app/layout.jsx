import Navbar from '@/components/elements/Navbar';
import Footer from '@/components/elements/Footer';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat', // pakai variable untuk Tailwind
	display: 'swap',
});

export const metadata = {
	title: 'Nusantara Medika Herbal',
	description: 'Nusantara Medika Herbal hadir sebagai solusi herbal terpercaya untuk menjaga keseimbangan dan kesehatan tubuh secara alami.',
	openGraph: {
		title: 'Nusantara Medika Herbal',
		description: 'Kenali lebih dekat Nusantara Medika Herbal dan visi kami dalam menghadirkan solusi kesehatan alami berbasis herbal terpercaya di Indonesia.',
		url: 'https://nmamedikaherbal.store/',
		siteName: 'Nusantara Medika Herbal',
		type: 'website',
		images: [
			{
				url: 'https://nmamedikaherbal.store/dekstop/detail-dekstop.jpeg',
				width: 1200,
				height: 630,
				alt: 'Tim Nusantara Medika Herbal',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nusantara Medika Herbal',
		description: 'Pelajari siapa kami, nilai-nilai yang kami pegang, dan misi kami dalam menyediakan produk herbal terpercaya.',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${montserrat.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
