import Navbar from '@/components/elements/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/elements/Footer';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat', // pakai variable untuk Tailwind
	display: 'swap',
});

export const metadata = {
	title: 'Nusantara Medica Group',
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
