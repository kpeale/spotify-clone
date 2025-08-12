import { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioref = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const play = () => {
    audioref.current.play();
    setPlayerStatus(true);
  };
  const pause = () => {
    audioref.current.pause();
    setPlayerStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioref.current.play();
    setPlayerStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioref.current.play();
      setPlayerStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioref.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioref.current.duration;
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioref.current.play();
      setPlayerStatus(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      audioref.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioref.current.currentTime / audioref.current.duration) * 100
          ) + '%';
        setTime({
          currentTime: {
            second: Math.floor(audioref.current.currentTime % 60),
            minute: Math.floor(audioref.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioref.current.duration % 60),
            minute: Math.floor(audioref.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioref]);
  const contextValue = {
    audioref,
    seekBar,
    seekBg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
