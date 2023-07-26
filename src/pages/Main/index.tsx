import { useState } from 'react';
import Headline from '../../components/Headline';
import CoupleDetails from '../../components/CoupleDetails';
import EventDetails from '../../components/EventDetails';
import Gallery from '../../components/Gallery';
import Wish from '../../components/Wish';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import MusicPlayer from '../../components/MusicPlayer';
import GiftModal from '../../components/GiftModal';
import {BsFillGiftFill} from 'react-icons/bs';

const Main = () => {
    const [isModalShown, setIsModalShown] = useState(false);
    const toggleModal = () => {
        setIsModalShown((e) => !e)
    }
    return (
        <>
            <Headline />
            <MusicPlayer />
            <Sidebar />
            <CoupleDetails />
            <EventDetails />
            <Gallery />
            <Wish />
            <GiftModal isModalShown={isModalShown} toggleModal={toggleModal}/>
            <Footer />
            <div className="position-fixed text-center text-white end-0 me-3 mb-3 bottom-0">
                <button className="d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0" style={{ color: '#E3B04B' }} onClick={ toggleModal }>
                    <BsFillGiftFill className="text-color-primary fs-1"/>
                </button>
            </div>
        </>
    )
}

export default Main
