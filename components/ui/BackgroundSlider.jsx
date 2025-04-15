'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const BackgroundSlider = ({ images = [], interval = 5000, transitionDuration = 1000, className = '' }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const slider = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, interval);

		return () => clearInterval(slider);
	}, [images.length, interval]);

	return (
		<div className={cn('', className)}>
			{images.map((src, index) => (
				<div
					key={index}
					className={cn('absolute top-0 left-0 w-full h-full transition-opacity ease-in-out', {
						'opacity-100': index === currentIndex,
						'opacity-0': index !== currentIndex,
					})}
					style={{ transitionDuration: `${transitionDuration}ms` }}>
					<Image
						src={src}
						alt={`background-${index}`}
						fill
						priority={index === 0}
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default BackgroundSlider;
