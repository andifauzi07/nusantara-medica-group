'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navbarRef = useRef(null);
	const path = usePathname();

	const closeMenu = () => {
		setMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		closeMenu();
	}, [path]);

	return (
		<nav
			ref={navbarRef}
			className="fixed lg:h-16 w-full flex justify-between items-center py-2 lg:px-6 px-4 bg-[#1f1f1f]/70 backdrop-blur-lg border border-[#1f1f1f]/40 z-20 text-white drop-shadow-lg">
			<Link href="/">
				<div className={`${menuOpen ? 'hidden' : ''} flex items-center`}>
					<span>
						<p className="font-bold text-sm">Nusantara Medika Group</p>
					</span>
				</div>
			</Link>
			<div
				className="lg:hidden"
				onClick={() => setMenuOpen(!menuOpen)}>
				<button aria-label="Toggle Menu">
					<div className="space-y-1">
						<span className="block w-6 h-0.5 bg-white mix-blend-difference"></span>
						<span className="block w-6 h-0.5 bg-white mix-blend-difference"></span>
						<span className="block w-6 h-0.5 bg-white mix-blend-difference"></span>
					</div>
				</button>
			</div>
			<div className={`lg:flex items-center ${menuOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
				<ul className="flex text-white mix-blend-difference text-sm flex-col lg:flex-row justify-center items-center bg-[#fefefe] lg:bg-transparent">
					<li className="mx-4 my-2 lg:my-0 relative">
						<Link href="/produk">
							<span className="hover_button">Produk</span>
						</Link>
					</li>
					<li className="mx-4 my-2 lg:my-0 relative">
						<Link href="/tentang-kami">
							<span className="hover_button">Tentang Kami</span>
						</Link>
					</li>
					<li className="mx-4 my-2 lg:my-0 relative">
						<Link href="/kontak">
							<span className="hover_button">Kontak</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
