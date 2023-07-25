import { useState, useEffect, useRef } from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
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
        <div className={ `position-fixed p-2 text-center rounded-circle text-white end-0 me-3 mt-3 top-0 ${ style.z10 }` } onClick={toggleSong}>
            <button className="d-flex border-0 bg-transparent align-items-center justify-items-center m-0 my-3 mx-1 position-relative" style={{ color: '#E3B04B' }}>
                {!isPlaying ? <BsPauseCircle className="fs-2 bg-transparent rounded-circle text-color-primary"/> : <BsPlayCircle className="fs-2 bg-transparent rounded-circle text-color-primary"/>}
            </button>
        </div>
    );
};

export default MusicPlayer;
