import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Player from './components/Player';
import './App.css';

import arabic1 from './assets/images/arabic1.jpg';
import arabic2 from './assets/images/arabic2.jpg';
import arabic3 from './assets/images/arabic3.jpeg';
import arabic4 from './assets/images/arabic4.jpg';
import arabic5 from './assets/images/arabic5.jpg';


import western1 from './assets/images/western1.jpg';
import western2 from './assets/images/western2.jpg';
import western3 from './assets/images/western3.jpg';
import western4 from './assets/images/western4.jpg';
import western5 from './assets/images/western5.jpg';

import podcast1 from './assets/images/podcast1.jpg';
import podcast2 from './assets/images/podcast2.jpg';
import podcast3 from './assets/images/podcast3.jpg';
import podcast4 from './assets/images/podcast4.jpg';
import podcast5 from './assets/images/podcast5.jpg';


import histoire1 from './assets/images/histoire1.jpg';
import histoire2 from './assets/images/histoire2.jpg';
import histoire3 from './assets/images/histoire3.jpg';
import histoire4 from './assets/images/histoire4.jpg';
import histoire5 from './assets/images/histoire5.jpg';


import ARABIC_SONG from './assets/audios/ARABIC_SONGS.mp3';
import WESTERN_SONG from './assets/audios/WESTERN_SONGS.mp3';
import HISTOIRE from './assets/audios/HISTOIRES.mp3';
import PODCAST from './assets/audios/PODCASTS.mp3';

// Using local paths for audio and images that the user will provide in the public folder.
const ARABIC_SONGS = [
  { id: 's1', title: "سألوني الناس فيروز", artist: "Fairuz", cover: arabic1, url: ARABIC_SONG, category: "Musique" },
  { id: 's2', title: "كلمة", artist: "Rami Sabri", cover: arabic2, url: ARABIC_SONG, category: "Musique" },
  { id: 's3', title: "أنا دمي فلسطيني", artist: "Mohamed Assaf", cover: arabic3, url: ARABIC_SONG, category: "Musique" },
  { id: 's4', title: "خليك معايا", artist: "Amr Diab", cover: arabic4, url: ARABIC_SONG, category: "Musique" },
  { id: 's5', title: "فاكر", artist: "Elissa", cover: arabic5, url: ARABIC_SONG, category: "Musique" },
];

const WESTERN_SONGS = [
  { id: 'o1', title: "The fate of ophelia", artist: "Marjorie Miller", cover: western1, url: WESTERN_SONG, category: "Musique" },
  { id: 'o2', title: "Beautiful", artist: "bazzi camila cabello", cover: western2, url: WESTERN_SONG, category: "Musique" },
  { id: 'o3', title: "Cool Water", artist: "Marty Robbins", cover: western3, url: WESTERN_SONG, category: "Musique" },
  { id: 'o4', title: "Man Walks Among Us", artist: "Marty Robbins", cover: western4, url: WESTERN_SONG, category: "Musique" },
  { id: 'o5', title: "ballad of the alamo", artist: "", cover: western5, url: WESTERN_SONG, category: "Musique" },
];

const PODCASTS = [
  { id: 'p1', title: "Ted Talks Daily", artist: "TED", cover: podcast1, url: PODCAST, category: "Podcasts" },
  { id: 'p2', title: "Global Digital Media", artist: "El Daheeh", cover: podcast2, url: PODCAST, category: "Podcasts" },
  { id: 'p3', title: "Dupamicaffeine", artist: "Nizar", cover: podcast3, url: PODCAST, category: "Podcasts" },
  { id: 'p4', title: "Legend", artist: "Guillaume Pley", cover: podcast4, url: PODCAST, category: "Podcasts" },
  { id: 'p5', title: "Psychologie et bien etre", artist: "Psychologie.net", cover: podcast5, url: PODCAST, category: "Podcasts" },
];

const HISTOIRES = [
  { id: 'h1', title: "Histoire Calme pour dormir", artist: "Sergio Ruzzier", cover: histoire1, url: HISTOIRE, category: "Histoires" },
  { id: 'h2', title: "les histoires incroyables", artist: "Pierre Bellemare", cover: histoire2, url: HISTOIRE, category: "Histoires" },
  { id: 'h3', title: "Histoire de Blou", artist: "Emi", cover: histoire3, url: HISTOIRE, category: "Histoires" },
  { id: 'h4', title: "Les histoires de César", artist: "César Culture", cover: histoire4, url: HISTOIRE, category: "Histoires" },
  { id: 'h5', title: "Des histoires pas-sages", artist: "Baba Yaga", cover: histoire5, url: HISTOIRE, category: "Histoires" },
];


// All items combined
const ALL_ITEMS = [...ARABIC_SONGS, ...WESTERN_SONGS , ...PODCASTS, ...HISTOIRES];

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Navbar />
        <Home 
          categories={{
            "Musique": ARABIC_SONGS,
            "Podcasts": PODCASTS,
            "Histoires": HISTOIRES
          }}
          allItems={ALL_ITEMS}
          onPlaySong={handlePlaySong} 
        />
      </div>
      <div className="player-container">
        <Player currentSong={currentSong} />
      </div>
    </div>
  );
}

export default App;
