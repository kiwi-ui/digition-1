import { useState, useEffect, useRef } from 'react';
import { BsPlayCircleFill, BsPauseCircleFill} from 'react-icons/bs';

import style from './index.module.css';

const MusicPlayer = () => {
    const song = require('../../assets/music/takkanterganti.mp3');
    const audioRef = useRef(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleSong = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    return (
        <div className={ `position-fixed text-center text-white end-0 me-5 mt-5 top-0 ${ style.z10 }` } onClick={toggleSong}>
            <button className="d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0" style={{ color: '#E3B04B' }}>
                {!isPlaying ? <BsPauseCircleFill className="fs-1 bg-transparent rounded-circle text-color-primary"/> : <BsPlayCircleFill className="fs-1 bg-transparent rounded-circle text-color-primary"/>}
            </button>
        </div>
    );
};

export default MusicPlayer;
