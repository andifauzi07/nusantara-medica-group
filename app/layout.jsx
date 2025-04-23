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
	title: 'Nusantara Medika Group',
	description: 'Solusi Herbal Terpercaya Untuk Menjaga Keseimbangan Tubuh Tetap Terjaga',
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
