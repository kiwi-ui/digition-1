import { useEffect, useState } from 'react';
import {BsCalendarHeart, BsClock, BsPinMap} from 'react-icons/bs';
import {FiMapPin} from "react-icons/fi"
import '../../index.css';

interface eventInterface  {
    days: null | number,
    hours: null | number,
    minutes: null | number,
    seconds: null | number
}
const EventDetails = () => {
    const [event, setEvent] = useState<eventInterface>({
        days : null,
        hours: null,
        minutes:  null,
        seconds:  null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate: any = new Date('2029-05-01T00:00:00');

        setInterval(() => {
            const currentDate: any = new Date();
            const timeDifference: any = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({days, hours, minutes, seconds})

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)

    }, [])
    
    return (
        <section id="date" className={ `border-0 d-flex justify-content-center h-100 my-5 z10` }>
            <div className={`schedule border-box bgColorPrimary shadow-lg`}>
                <div className={`coverSchedule d-flex align-items-bottom text-white justify-content-end align-items-center text-center flex-column position-relative`} style={{height: '40vh'}}>
                    <p className={`m-0 txtColorPrimary fw-semibold z10 fs-1`}>Waktu dan Tempat</p>
                    <p className={`m-0 txtColorPrimary fw-semibold z10 fs-2`}>Pernikahan</p>
                    
                    <div className={`mb-3 mt-2 z10 text-white`}>
                        <p className="m-0">30 Februari 2001</p>
                        <p className="m-0">Hall Unira Dome</p>
                        <p className="m-0">Jalan Dipenogoro, Pamekasan, Jawa Timur</p>
                    </div>
                </div>

                <div className={`bgColorPrimary d-flex align-items-center mt-5 flex-column`} style={{borderRadius: '0 0 1rem 1rem'}}>
                    <div className="d-flex flex-column align-items-center container">
                        <p className="fs-1 fw-semibold">Resepsi</p>

                        <div className="mx-4 mb-4" style={{borderTop :'0.3rem solid #2b2b2b'}}>
                            <div className="d-flex flex-row align-items-center gap-3 pt-3">
                                <BsCalendarHeart/>
                                <p className="m-0">Minggu, 31 Februari 2025</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <BsClock />
                                <p className="m-0">10.00 - 13.00 WIB</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <BsPinMap/>
                                <p className="m-0">Jl. Jenderal Sudirman No.Kav. 1</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="d-flex flex-row gap-3 align-items-center py-2 px-3 border-0 rounded-2" style={{backgroundColor: "#2b2b2b"}}>
                                <FiMapPin className='text-white' />
                                <p className="m-0 text-white">Lihat Peta</p>
                            </button>
                        </div>
                    </div>

                    {!isEventOver ? 
                        <div className="d-flex flex-row mb-5 text-white border-box my-5 w-100 justify-content-evenly container">
                            <div className="days text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.days}</p>
                                <p className= "npm run m-0">Hari</p>
                            </div>
                            <div className="hours text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.hours}</p>
                                <p className= "m-0">Jam</p>
                            </div>
                            <div className="minutes text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.minutes}</p>
                                <p className= "m-0">Menit</p>
                            </div>
                            <div className="seconds text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.seconds}</p>
                                <p className= "m-0">Detik</p>
                            </div>
                        </div>
                        :
                        <div>
                            <p>Acara Sudah Selesai</p>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default EventDetails