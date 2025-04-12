import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="w-full bg-secondary h-screen flex flex-col items-center justify-center">
			<h1 className="font-bold">Hallo Dunia</h1>
			<Button>
				<p>Clickme</p>
			</Button>
		</div>
	);
}
