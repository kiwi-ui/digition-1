import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { BiHomeAlt2, BiEnvelopeOpen } from 'react-icons/bi';
import { RiGalleryLine } from 'react-icons/ri';
import { BiSolidRightArrow } from 'react-icons/bi';
import style from './style.module.css';

const Sidebar = () => {
	const [isSideBarHided,setIsSideBarHided] =useState(false);
	const srcollToElement: any = (id: string) => {
		const selectedDiv = document.getElementById(id);
		selectedDiv?.scrollIntoView({behavior: 'smooth'});
	}
	const hideSideBar = () => { setIsSideBarHided(e => !e) };

  	return (
		<div className={`${isSideBarHided ? style.start60 : 'start-0'}  position-fixed z10 d-flex flex-row position-absolute ${style.navbarTransition} ${style.z10} top-50 translate-middle-y`}>
			<ul className="navbar-nav flex-column align-items-center px-3 py-5 gap-5 gap-xl-1 d-flex text-white px-5 px-lg-3">  
				<li className="nav-item my-5 my-md-1">
					<button className='nav-link' onClick={ () => srcollToElement('headline') } ><BiHomeAlt2 className="fs-2"/></button>
				</li>
				<li className="nav-item my-5 my-md-1">
					<button className="nav-link" onClick={ () => srcollToElement('date') }><BsCalendar className="fs-2"/></button>
				</li>
				<li className="nav-item my-5 my-md-1">
					<button className="nav-link" onClick={ () => srcollToElement('gallery') }><RiGalleryLine className="fs-2"/></button>
				</li>
				<li className="nav-item my-5 my-md-1">
					<button className="nav-link"onClick={ () => srcollToElement('wish') }><BiEnvelopeOpen className="fs-2"/></button>
				</li>
			</ul>

			<button className="bg-transparent border-0 position-absolute text-white start-100 top-50 translate-middle-y">
				<BiSolidRightArrow className={`${style.textColorPrimary} fs-2`} onClick={ () => hideSideBar() }/>
			</button>
		</div>
	)
}

export default Sidebar
