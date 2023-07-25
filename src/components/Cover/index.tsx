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
        <section className={`${style.bgCover} vh-100 text-white d-flex justify-content-center flex-column align-items-center overflow-none`}>
            <div className={`rounded-5 ${style.wCover} position-relative z-10`}>
                <div className={`${style.bgBlack50} text-center py-5 rounded-4`}>
                    <img className='rounded-circle py-3' style={{maxWidth: "35%"}} src={ profileImage } alt="pengantin" />
                    <h5 className='m-0'>UNDANGAN PERNIKAHAN</h5>
                    
                    <div className='d-flex flex-column gap-2'>
                        <h1 className={`fw-bold ${style.textColorPrimary} m-2   `}>James & Humairoh</h1>
                        <h5 className="m-0">Kepada yang terhormat</h5>
                        <h5 className="m-0">Bapak/Ibu/Saudara</h5>
                        <h1 className={`mt-2 fw-bold mb-4 ${style.textColorPrimary}`}>{ name }</h1>
                    </div>

                    <button onClick={ hideCover } className={ `${style.bgButton} rounded-4 px-3 py-2 position-relative start-50 translate-middle-x text-white border-0 d-flex flex-row align-items-center justify-content-center gap-2`}>
                        <BsEnvelopeHeart/>
                        <span className="text-white text-decoration-none fw-bold">Buka Undangan</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Cover
