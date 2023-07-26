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
                    <p className='m-0 fs-1'>UNDANGAN PERNIKAHAN</p>
                    
                    <div className='d-flex flex-column gap-2'>
                        <p className={`fw-bold ${style.textColorPrimary} m-2`} style={{fontSize: '5rem'}}>Yusni & Anggara</p>
                        <p className="fs-1 m-0">Kepada yang terhormat</p>
                        <p className="fs-1 m-0">Bapak/Ibu/Saudara</p>
                        <p className={`mt-2 fw-bold mb-4 ${style.textColorPrimary}`} style={{ fontSize: "5rem" }}>{ name }</p>
                    </div>

                    <button onClick={ hideCover } className={ `${style.bgButton} rounded-4 px-4 py-3 position-relative start-50 translate-middle-x text-white border-0 d-flex flex-row align-items-center justify-content-center gap-3`}>
                        <BsEnvelopeHeart className="fs-1"/>
                        <span className="text-white text-decoration-none fs-1">Buka Undangan</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Cover
