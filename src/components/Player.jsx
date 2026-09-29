import React, { useRef, useEffect, useState } from 'react';
import './Player.css';

function Player({ currentSong }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  if (!currentSong) {
    return (
      <div className="player-empty">
        <span>Sélectionnez un titre pour commencer la lecture</span>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="player-left">
        <img src={currentSong.cover} alt={currentSong.title} className="now-playing-cover" />
        <div className="now-playing-info">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
        <button className="like-btn"><i className="fa-regular fa-heart"></i></button>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button className="control-btn"><i className="fa-solid fa-backward-step"></i></button>
          <button className="play-pause-btn" onClick={togglePlay}>
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          <button className="control-btn"><i className="fa-solid fa-forward-step"></i></button>
        </div>
        <div className="progress-container">
          <span className="time">0:00</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="time">-:-</span>
        </div>
      </div>

      <div className="player-right">
        <span className="icon"><i className="fa-solid fa-microphone"></i></span>
        <span className="icon"><i className="fa-solid fa-volume-high"></i></span>
        <div className="volume-bar">
          <div className="volume-progress" style={{ width: '70%' }}></div>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={currentSong.url} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default Player;
