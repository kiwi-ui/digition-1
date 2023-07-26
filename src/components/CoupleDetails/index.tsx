import groom from '../../assets/img/groom.jpg';
import bride from '../../assets/img/bride.jpg';
import { BsInstagram } from 'react-icons/bs';

const CoupleDetails = () => {
    return (
        <div className="text-center py-5" id="main" style={{ background:"#f1d6ab" }}>
            <div className="container">
                <div className="">
                    <p className="fw-semibold fs-2">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <p className="lead mt-4">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>

                <div className="d-flex flex-lg-row flex-column justify-content-around my-4 gap-lg-3">
                    
                    <div className="bride d-flex flex-column align-items-center">
                        <img src={ bride } className="rounded-3 shadow" width="100%" alt="bride"/>
                        <div className="shadow position-relative rounded-3 py-4" style={{width: "90%", top: "-4.5rem", background: "rgb(255 238 212)"}}>
                            <p className="fs-2 fw-bold mb-0">Humairoh</p>
                            <p className="fs-5 ">Putri dari Bapak Achmad dan Ibu Rum</p>
                            <button className="border-0 rounded-circle bg-transparent">
                                <a className="text-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                    <BsInstagram className='text-black fs-2'/>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="groom d-flex flex-column align-items-center">
                        <img src={ groom } className="rounded-3 shadow" width="100%" alt="groom" />
                        <div className="shadow position-relative rounded-3 py-4" style={{width: "90%", top: "-4.5rem", background: "rgb(255 238 212)"}}>
                            <p className="fs-2 fw-bold mb-0">James Washington</p>
                            <p className="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                            <button className="border-0 rounded-circle bg-transparent">
                                <a className="text-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                    <BsInstagram className='text-black fs-2'/>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="m-0 lead">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div>
            </div>
        </div>
  )
}

export default CoupleDetails
