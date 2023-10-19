import React from "react";
import Link from "next/link"
import { FiGlobe } from "react-icons/fi";
import { PiCaretUpBold } from "react-icons/pi";

export default function Footer() {
	const links = [
		"privacy", 
		"terms",
		"sitemap",
		"company details",
		"destinations"
	];
	
	return (
		<div className="flex justify-between items-center w-full px-20 bg-white border-t border-t-gray-200 py-4 text-sm z-50">
			<ul className="flex gap-3 font-normal">
				<li>&copy; {new Date().getFullYear()} AirBnb, Inc.</li>
				{
					links.map((link) => (
						<li key={link}>
							{" "}
							<Link href={link} className="capitalize">
								{link}
							</Link>
							{" "}
						</li>
					))
				}
			</ul>
			<ul className="flex gap-4 font-medium">
				<li className="flex items-center gap-2 cursor-pointer">
					<FiGlobe /> English (EN)
				</li>
				<li className="cursor-pointer">$ USD</li>
				<li className="flex items-center gap-2 cursor-pointer">Support &amp; Resources <PiCaretUpBold /></li>
			</ul>
		</div>
	)
}
