import { GrFormClose } from 'react-icons/gr';
import qr from '../../assets/img/qr-1.webp';
import { useState } from 'react';

const GiftModal = ({isModalShown, toggleModal}: any) => {
    const [showCopy, setShowCopy] = useState(false)
    const copyId =() => {
        const bankId = '091204789789';
        navigator.clipboard.writeText(bankId);
        setShowCopy((e) => !e)
        setTimeout(() => setShowCopy(false), 2000)
    }

    return (
        <div className={ `${ isModalShown ? 'd-flex' : 'd-none' } vh-100 w-100 position-fixed top-0 justify-content-center align-items-center`} style={{zIndex: 10, background:"rgb(0,0,0,0.5)"}}>
            <div className="w-75 top-50">
                <div className="rounded-5 container" style={{background:"#f1d6ab"}}>
                    <div className="d-flex justify-content-end">
                        <button className="bg-transparent border-0 fs-1" type="button" onClick={ toggleModal }><GrFormClose /></button>
                    </div>

                    <div className="text-center p-4">
                        <img src={ qr } className="w-100" alt="qr code" />  
                        <div className="my-2">
                            <p className="fs-1 fw-bold m-0">Juliet Basori</p>
                            <p className='fs-2'>091204789789 / Bank Mandiri</p>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="fs-4 py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold" style={{ background: "#2b2b2b" }} onClick={copyId}>Copy</button>
                            {/* <a href="https://wa.me/082336420166?text=I%20confirm%20that%20I%20have%20sent%20the%20money%20transfer%20for%20the%20wedding%20gift." target="_blank" rel='noreferrer'> */}
                                {/* <button className="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold">Konfirmasi</button> */}
                            {/* </a> */}
                        </div>
                        <p className={`${ showCopy ? "d-block" : "d-none" } fs-2 position-fixed translate-middle-x start-50 rounded-3 text-white p-3`} style={{top: "90%" }}>Copied</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default GiftModal