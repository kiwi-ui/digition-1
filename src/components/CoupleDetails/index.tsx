import groom from '../../assets/img/groom.jpg';
import bride from '../../assets/img/bride.jpg';
import { BsInstagram } from 'react-icons/bs';
import style from './style.module.css';
import flower from '../../assets/img/flower.png';
const CoupleDetails = () => {
    return (
        <div className={`${style.bgColorPrimary} text-center py-5`} id="main">
            <div className="container">
                <div className="text-black">
                    <p className="fw-semibold fs-2">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <p className="lead mt-4">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>

                <div className="text-black d-flex flex-lg-row flex-column justify-content-around my-4 gap-4">
                    <div className="bride d-flex flex-column align-items-center">
                        <img src={ bride } className={`${style.roundedTop} shadow`} width="85%" alt="bride"/>
                        <div className={`${style.details} shadow position-relative rounded-3 py-3 px-2`}>
                            <img className="position-absolute h-50 translate-middle-x opacity-50" src={flower} alt="flower"/>
                            <p className={`fs-1 fw-bold mb-0 ${style.pengantin}`}>Yusni</p>
                            <p className="fs-5 ">Putri dari Bapak Achmad dan Ibu Rum</p>
                            <button className="border-0 rounded-circle bg-transparent">
                                <a href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                    <BsInstagram className='text-black fs-4'/>
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    <div className="groom d-flex flex-column align-items-center">
                        <img src={ groom } className={`${style.roundedTop} shadow`} width="85%" alt="groom" />
                        <div className={`${style.details} shadow position-relative rounded-3 py-3 px-2`}>
                            <img className="position-absolute h-50 translate-middle-x opacity-50" src={flower} alt="flower"/>
                            <p className={`fs-1 fw-bold mb-0 ${style.pengantin}`}>Anggara</p>
                            <p className="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                            <button className="border-0 rounded-circle bg-transparent">
                                <a href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                    <BsInstagram className='text-black fs-4'/>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="m-0 lead text-black">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div>
            </div>
        </div>
  )
}

export default CoupleDetails
