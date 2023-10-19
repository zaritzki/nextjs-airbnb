"use client"

import React from "react";
import Image from "next/image";
import AirBnbLogo from "@/svg/airbnb-logo";
import { FiGlobe } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"
import ContextMenu from "../common/ContextMenu";

const Navbar = () => {
	const [isContextMenuVisible, setIsContextMenuVisible] = React.useState(false);
	
	const contextMenuOptions = [
		{
			name: "Log in",
			callBack:() => {
				setIsContextMenuVisible(false)
			}
		},{
			name: "Sign up",
			callBack:() => {
				setIsContextMenuVisible(false)
			}
		},{
			name: "AirBnb your Home",
			callBack:() => {
				setIsContextMenuVisible(false)
			}
		},{
			name: "Help",
			callBack:() => {
				setIsContextMenuVisible(false)
			}
		}
	];

	return (
		<header className="w-full flex flex-col justify-center transition-all duration-300 h-20 border-b border-b-gray-200">
			<div className="flex items-center justify-between px-20">
				<div className="flex-grow basis-0">
					<div className="w-max cursor-pointer">
						<AirBnbLogo />
					</div>
				</div>
				<div className="flex-grow basis-0">
					<ul className="flex items-center justify-end gap-6 font-medium">
						<li className="cursor-pointer">
							<span>Airbnb your home</span>
						</li>
						<li className="cursor-pointer">
							<FiGlobe />
						</li>
						<li
							className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
							onClick={()=>setIsContextMenuVisible(true)}
						>
							<RxHamburgerMenu />
							<span>
								<Image
									src="/empty-profile.png"
									alt="profile"
									height={30}
									width={30}
								/>
							</span>
						</li>
					</ul>
				</div>
			</div>
			{isContextMenuVisible && (
				<ContextMenu
					contextMenu={isContextMenuVisible}
					setContextMenu={setIsContextMenuVisible}
					coordinates={{
						x:window.innerWidth-250,
						y:70,
					}}
					options={contextMenuOptions}
				/>
			)}
		</header>
	)
};

export default Navbar;
