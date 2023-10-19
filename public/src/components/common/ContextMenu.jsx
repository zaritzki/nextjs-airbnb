"use client"

import React, { useEffect } from "react";

const ContextMenu = ({options, coordinates, contextMenu,setContextMenu}) => {
	const contextMenuRef = React.useRef(null);

	const handleClick = (e, callBack) => {
		e.stopPropagation();
		callBack();
	}

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				contextMenuRef.current && 
				!contextMenuRef.current.contains(e.target)
			) {
				setContextMenu(false);
			}
		}

		document.addEventListener("click", handleClickOutside);
	},[])

	return (
		<div
			ref={contextMenuRef}
			className="fixed bg-white shadow-2xl py-5 z-[100] rounded-lg border border-gray-200"
			style={{
				boxShadow: "0 2px 5px 0 rgba(var(11,20,25),.26), 0 2px 10px 0 rgba(11,20,26),.16",
				top: coordinates.y,
				left: coordinates.x
			}}
		>
			<ul>
				{options.map(({name, callBack}) => (
					<li 
						className="hover:bg-gray-100 pl-5 pr-10 py-2 cursor-pointer"
						key={name}
						onClick={(e) => handleClick(e, callBack)}
					>
						<span>{name}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContextMenu;
