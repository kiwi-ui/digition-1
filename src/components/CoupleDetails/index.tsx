import groom from '../../assets/img/groom.jpg';
import bride from '../../assets/img/bride.jpg';
import { BsInstagram } from 'react-icons/bs';

const CoupleDetails = () => {
    return (
        <div className="text-center py-5" id="main" style={{ background:"#f1d6ab" }}>
            <div className="container">
                <div className="">
                    <p className="fw-semibold fs-1">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <p className="lead mt-4">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>

                <div className="d-flex flex-row justify-content-around my-4 gap-2">
                    <div className="bride p-xl-4">
                        <img src={ bride } className="rounded-circle my-4" width="70%" alt="bride"/>
                        <p className="fs-3 fw-bold mb-0">Humairoh</p>
                        <p className="fs-4">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button className="border-0 rounded-circle bg-transparent">
                            <a className="text-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                <BsInstagram className='bg-dark fs-2 rounded-circle'/>
                            </a>
                        </button>
                    </div>
                    <div className="groom p-xl-4">
                        <img src={ groom } className="rounded-circle my-4" width="70%" alt="groom" />
                        <p className="fs-3 fw-bold mb-0">James Washington</p>
                        <p className="fs-4">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button className="border-0 rounded-circle bg-transparent">
                            <a className="text-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                <BsInstagram className='bg-dark fs-2 rounded-circle'/>
                            </a>
                        </button>
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