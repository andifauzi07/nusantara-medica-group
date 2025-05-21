'use client';

import Image from 'next/image';
import React, { useState } from 'react';
// import { useToast } from '@/hooks/use-toast';

const KontakFormulir = () => {
	// const { toast } = useToast();
	const [formData, setFormData] = useState({
		nama: '',
		email: '',
		pesan: '',
	});

	const handleSubmit = async (e) => {
		// e.preventDefault();
		// // const response = await fetch('/api/sheet', {
		// // 	method: 'POST',
		// // 	headers: {
		// // 		'Content-Type': 'application/json',
		// // 	},
		// // 	body: JSON.stringify(formData),
		// // });
		// // const result = await response.json();
		// // if (result.success) {
		// 	// toast({
		// 	// 	title: 'Berhasil',
		// 	// 	description: 'Pesan berhasil dikirim !',
		// 	// });
		// 	setFormData({
		// 		nama: '',
		// 		email: '',
		// 		pesan: '',
		// 	});
		// // } else {
		// 	// toast({
		// 	// 	title: 'Gagal',
		// 	// 	variant: 'destructive',
		// 	// 	description: 'Pesan gagal terkirim !',
		// 	// });
		// 	setFormData({
		// 		nama: '',
		// 		email: '',
		// 		pesan: '',
		// 	});
		// }
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="md:flex md:justify-center">
			<div className="md:w-1/2 md:z-10 py-6 px-8">
				<div className="flex items-center justify-center">
					<div className="w-full max-w-md p-6 border-solid border-2 border-[#D9D9D9]  bg-white rounded-lg shadow-lg">
						<form
							onSubmit={handleSubmit}
							className="space-y-4">
							<div>
								<label
									htmlFor="nama"
									className="text-start block text-sm font-medium text-gray-700">
									Nama
								</label>
								<input
									name="nama"
									value={formData.nama}
									onChange={handleChange}
									type="text"
									id="nama"
									className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>

							<div>
								<label
									htmlFor="alamat"
									className="text-start block text-sm font-medium text-gray-700">
									Alamat
								</label>
								<input
									name="alamat"
									// value={formData.email}
									// onChange={handleChange}
									type="text"
									id="alamat"
									className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>

							<div>
								<label
									htmlFor="pesan"
									className="text-start block text-sm font-medium text-gray-700">
									Keluhan
								</label>
								<textarea
									name="pesan"
									value={formData.pesan}
									onChange={handleChange}
									id="pesan"
									rows="4"
									className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
							</div>

							<div className="pt-4">
								<button
									type="submit"
									className="w-full px-4 py-2 text-white bg-[#2C2C2C] rounded-md hover:bg-[#868686]">
									Kirim
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 md:flex md:flex-col md:gap-y-8 md:z-10 py-6 px-8">
				<div className="md:flex md:items-center md:gap-10">
					<Image
						src="/image/icon/alamat.svg"
						width={40}
						height={40}
						alt="Alamat"
					/>
					<h3>BTN Bukit Tamarunang Blok L1 No.4</h3>
				</div>
				<div className="md:flex md:items-center md:gap-10">
					<Image
						src="/image/icon/phone.svg"
						width={40}
						height={40}
						alt="Alamat"
					/>
					<h3>+6281244445575</h3>
				</div>
				<div className="md:flex md:items-center md:gap-10">
					<Image
						src="/image/icon/email.svg"
						width={40}
						height={40}
						alt="Alamat"
					/>
					<h3>nmamedikaherbal@gmail.com</h3>
				</div>
			</div>
		</div>
	);
};

export default KontakFormulir;
