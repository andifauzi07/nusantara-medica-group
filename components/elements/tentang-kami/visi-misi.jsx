export default function VisiMisi() {
	return (
		<div className="bg-main rounded-tl-4xl md:rounded-none md:bg-white md:flex md:gap-x-10 md:justify-center md:px-8 md:text-black text-white py-4 relative">
			<div className="md:hidden w-[152px] rounded-tl-4xl absolute -top-1.5 right-0 h-3.5 bg-[#FFB200]" />
			<div className="md:w-1/3 px-8 py-4">
				<h1 className="md:text-4xl md:text-main text-center text-2xl font-bold pb-4">- VISI -</h1>
				<p className="text-center justify-center md:font-base md:text-base text-sm">
					Menjadi pelopor solusi kesehatan berbasis herbal yang alami, aman, dan terpercaya, serta membantu masyarakat mencapai keseimbangan hidup yang lebih sehat.
				</p>
			</div>
			<div className="hidden md:block w-[0.5px] h-[300px] my-auto bg-black" />
			<div className="md:px-0 md:w-1/3 px-8 py-4">
				<h1 className="text-center text-2xl md:text-4xl md:text-secondary font-bold pb-4">- Misi -</h1>
				<p className="text-center justify-center md:font-base md:text-base text-sm">
					Mengembangkan produk herbal berkualitas tinggi dengan bahan alami terbaik. <br /> <br />
					Mengedukasi masyarakat tentang manfaat obat herbal dalam menjaga kesehatan. <br /> <br />
					Menjaga standar produksi yang aman, higienis, dan sesuai dengan regulasi kesehatan. <br /> <br /> Mendorong gaya hidup sehat berbasis alam yang berkelanjutan. <br /> <br /> Berinovasi dalam penelitian dan pengembangan produk
					herbal modern.
				</p>
			</div>
			<div className="hidden md:block w-[0.5px] my-auto h-[300px] bg-black" />
			<div className="md:w-1/3 px-8 py-4">
				<h1 className="text-center md:text-4xl md:text-main text-2xl font-bold pb-4">- MOTTO -</h1>
				<p className="text-center justify-center md:font-base md:text-base text-sm">Menghadirkan Kesehatan Alami dengan Kebaikan Herbal, Tanpa Efek Samping, untuk Hidup yang Lebih Seimbang dan Berkualitas.</p>
			</div>
			<div className="md:hidden w-[152px] rounded-br-4xl absolute -bottom-1.5 left-0 h-3.5 bg-[#FFB200]" />
		</div>
	);
}
