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
import {ImGift} from 'react-icons/im';

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
            <div className="position-fixed p-2 text-center rounded-circle text-white end-0 me-3 mt-3 bottom-0">
                <button className="d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle p-1 border-2" style={{ color: '#E3B04B', borderColor: '#E3B04B', borderStyle: 'solid' }} onClick={ toggleModal }>
                    <ImGift className="fs-5 text-color-primary"/>
                </button>
            </div>
        </>
    )
}

export default Main
