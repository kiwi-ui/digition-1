import { useParams } from 'react-router-dom';
import profileImage from '../../assets/img/profile.jpg';
import style from'./cover.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';

const Cover = ({hide, setHide}: any) => {
    
    const { name }: any = useParams();
    const hideCover = () => {
        return setHide(!hide);
    }
    
    return (
        <section className={`${ style.bgCover } text-white d-flex justify-content-center flex-column align-items-center overflow-hidden`}>
            <div className={`rounded-5 position-relative z-10`}>
                <div className={`text-center py-5 rounded-4`}>
                    <img className={`py-3 px-3 ${style.cover} shadow border-4`} style={{height: '40vh'}} src={ profileImage } alt="pengantin" />
                    <p className='m-0 fs-5'>Undangan Pernikahan</p>
                    
                    <div className='d-flex flex-column gap-1'>
                        <p className={`fs-1 m-0 fw-bold ${style.textColorPrimary} m-1`} style={{letterSpacing: '0.1rem'}}>Yusni & Anggara</p>
                        <p className="fs-5 m-0">Kepada yang terhormat</p>
                        <p className="fs-5 m-0">Bapak/Ibu/Saudara</p>
                        <p className={`fs-1 fw-bold mb-3 ${style.textColorPrimary}`}>{ name }</p>
                    </div>

                    <button onClick={ hideCover } className={ `${style.bgButton} rounded-4 px-3 py-1 position-relative start-50 translate-middle-x text-white border-0 d-flex flex-row align-items-center justify-content-center gap-2 shadow`}>
                        <BsEnvelopeHeart />
                        <span className="text-white text-decoration-none fs-5">Buka Undangan</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Cover
