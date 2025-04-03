import { useState } from "react";
import { VolumeMuteFill, VolumeUpFill } from "react-bootstrap-icons";

export default function BackgroundAudio() {
  const [audio] = useState(() => new Audio("/assets/birds.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play().catch((err) => console.error("Autoplay blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={toggleAudio} className="audio-button">
      {isPlaying ? <VolumeUpFill size={24} /> : <VolumeMuteFill size={24} />}
    </button>
  );
}
