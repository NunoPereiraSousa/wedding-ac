import { useEffect, useState } from "react";

export default function BackgroundAudio() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (!audio) {
        const newAudio = new Audio("/assets/birds.mp3");
        newAudio.loop = true;
        newAudio.play();
        setAudio(newAudio);
      } else {
        audio.play();
      }
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    return () => document.removeEventListener("click", handleInteraction);
  }, [audio]);

  return null;
}
