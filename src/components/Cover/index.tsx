import { useParams } from 'react-router-dom';
import profileImage from '../../assets/img/g-1.webp';
import style from'./cover.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';

const Cover = ({hide, setHide}: any) => {
    
    const { name }: any = useParams();
    const hideCover = () => {
        return setHide(!hide);
    }
    
    return (
        <section className={`${ style.bgCover } text-white d-flex justify-content-center flex-column align-items-center overflow-hidden`}>
            <div className={`rounded-5 ${ style.wCover } position-relative z-10`}>
                <div className={`${style.bgBlack50} text-center py-5 rounded-4`}>
                    <img className='rounded-circle py-3' style={{ maxWidth: "45%" }} src={ profileImage } alt="pengantin" />
                    <p className='m-0 fs-5'>Undangan Pernikahan</p>
                    
                    <div className='d-flex flex-column gap-2'>
                        <p className={`fs-1 fw-bold ${style.textColorPrimary} m-2`}>Yusni & Anggara</p>
                        <p className="fs-5 m-0">Kepada yang terhormat</p>
                        <p className="fs-5 m-0">Bapak/Ibu/Saudara</p>
                        <p className={`fs-1 mt-2 fw-bold mb-4 ${style.textColorPrimary}`}>{ name }</p>
                    </div>

                    <button onClick={ hideCover } className={ `${style.bgButton} rounded-4 px-3 py-2 position-relative start-50 translate-middle-x text-white border-0 d-flex flex-row align-items-center justify-content-center gap-3`}>
                        <BsEnvelopeHeart className="fs-3"/>
                        <span className="text-white text-decoration-none">Buka Undangan</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Cover
