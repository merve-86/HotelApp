import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const Resavations = () => {

   const { user } = useContext(AuthContext);

	const [rooms, setRooms] = useState([]);
	const [resarvations, setResarvations] = useState([]);

	const [postData, setPostData] = useState([]);

	useEffect(() => {
		fetchResarvations();
		fetchRooms();
	}, [postData]);

	const fetchResarvations = async () => {
		try {
			const response = await fetch("https://hotelapp-zoa9.onrender.com/resarvation");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			console.log(result.data)
		
			setResarvations(result.data);
		} catch (error) {
			console.error("Error fetching data:", error.message);
		}
	};

	const fetchRooms = async () => {
		try {
			const response = await fetch("https://hotelapp-zoa9.onrender.com/room");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			setRooms(result.data);
		} catch (error) {
			console.error("Error fetching data:", error.message);
		}
	};

	const [formData, setFormData] = useState({
		userId: "66aceeee8ad678b693fcc9f2",
		roomId: "",
		arrival_date: "",
		departure_date: "",
		guest_number: "",
		night: "",
		price: "",
		totalprice: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {

		e.preventDefault();

      console.log(formData)
		try {
			console.log(formData)  
			const response = await fetch("https://hotelapp-zoa9.onrender.com/resarvation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			setPostData(await response.json());
			setFormData({
            userId: "",
            roomId: "",
            arrival_date: "",
            departure_date: "",
            guest_number: "",
            night: "",
            price: "",
            totalprice: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container flex mt-4 gap-10 items-center justify-center">
			{/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> */}
			<form
				className="bg-white p-6 rounded shadow-md w-full max-w-sm mb-6"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold mb-4">New Resarvation</h2>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="roomnumber">
						Room Number
					</label>
					<select
						id="roomId"
						name="roomId"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.roomnumber}
						onChange={handleChange}
					>
						<option value="" disabled>
							Select a Room
						</option>
						{rooms.map((room) => (
							<option key={room._id} value={room._id}>
								{room.roomnumber}
							</option>
						))}
					</select>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="arrival_date"
					>
						Arrival Date
					</label>
					<input
						type="date"
						id="arrival_date"
						name="arrival_date"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.arrival_date}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="departure_date"
					>
						Departure Date
					</label>
					<input
						type="date"
						id="departure_date"
						name="departure_date"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.departure_date}
						onChange={handleChange}
					></input>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="guest_number"
					>
						Guest Number
					</label>
					<input
						type="number"
						id="guest_number"
						name="guest_number"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.guest_number}
						onChange={handleChange}
					></input>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="night">
						Night
					</label>
					<input
						type="number"
						id="night"
						name="night"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.night}
						onChange={handleChange}
					></input>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="price">
						Price
					</label>
					<input
						type="number"
						id="price"
						name="price"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
						value={formData.price}
						onChange={handleChange}
					></input>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
				>
					Submit
				</button>
			</form>

			{resarvations.length > 0 ? (
				<div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
					<h2 className="text-2xl font-bold mb-4">Resavations</h2>
					<table className="w-full bg-white">
						<thead>
							<tr>
                     <th className="py-2 px-4 border-b border-gray-200">
									User
								</th>
								<th className="py-2 px-4 border-b border-gray-200">
									Room Number
								</th>
								<th className="py-2 px-4 w-80  border-b border-gray-200">
									Arrival Date
								</th>
								<th className="py-2 px-4 w-80 border-b border-gray-200">
									Departure Date
								</th>
								<th className="py-2 px-4 border-b border-gray-200">
									Guest Number
								</th>
                        <th className="py-2 px-4 border-b border-gray-200">
									Night
								</th>
                        <th className="py-2 px-4 border-b border-gray-200">
									Price
								</th>
                        <th className="py-2 px-4 border-b border-gray-200">
									Total Price
								</th>
							</tr>
						</thead>
						<tbody>
							{resarvations.map((data, index) => (
								<tr key={index}>
                           <td className="py-2 px-4 border-b border-gray-200">
										{data.userId}
									</td>
									<td className="py-2 px-4 border-b border-gray-200">
										{data.roomId}
									</td>
									<td className="py-2 px-4 w-80 border-b border-gray-200">
										{data.arrival_date}
									</td>
									<td className="py-2 px-4 w-80 border-b border-gray-200">
										{data.departure_date}
									</td>

									<td className="py-2 px-4 border-b border-gray-200">
										{data.guest_number}
									</td>

                           <td className="py-2 px-4 border-b border-gray-200">
										{data.night}
									</td>
                           <td className="py-2 px-4 border-b border-gray-200">
										{data.price}
									</td>
                           <td className="py-2 px-4 border-b border-gray-200">
										{data.totalprice}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<p>Loading...</p>
			)}
			{/* </div> */}
		</div>
	);

	// return (
	//   <div className="container text-center mt-4">
	//     <h1>Room List</h1>
	//     <div className="row justify-content-center g-3">
	//       {rooms?.map((room) => {
	//         const { id, roomnumber, image, bedtype,price } = room
	//         return (
	//           <div
	//             key={id}
	//             className=" col-sm-12 col-md-6 col-lg-4"
	//             type="button"
	//             //? Absolute adressing
	//             // onClick={() => navigate(`/people/${id}`)}
	//             //? Relative
	//             onClick={() => navigate(`${id}`)}
	//           >
	//             <img className="rounded" src={image} alt="img" />
	//             <h6>
	//               {roomnumber} {bedtype}  {price}
	//             </h6>
	//           </div>
	//         )
	//       })}
	//     </div>
	//   </div>
	// )
};

export default Resavations;
