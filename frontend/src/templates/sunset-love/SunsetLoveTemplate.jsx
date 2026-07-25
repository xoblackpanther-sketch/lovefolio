import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Heart, Sparkles } from "lucide-react";

export default function SunsetLoveTemplate({ data = {} }) {
  const musicUrl = data.bgMusicUrl || "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";
  const badge = data.heroBadge || "✨ SUNSET LOVE COLLECTION";
  const title = data.heroTitle || "Our Love Story Under the Golden Sunset";
  const names = data.coupleNames || "Alex & Sam";
  const quote = data.quote || "“In every universe, in every lifetime, I would still find you and choose you.”";

  const card1Img = data.card1Image || "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80";
  const card1Title = data.card1Title || "Our First Sunset Walk 🌅";
  const card1Caption = data.card1Caption || "Golden hour, soft breeze, and endless conversations.";

  const card2Img = data.card2Image || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";
  const card2Title = data.card2Title || "Caramel Latte & Smiles ☕";
  const card2Caption = data.card2Caption || "That cute little coffee place on a rainy afternoon.";

  const card3Img = data.card3Image || "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1200&q=80";
  const card3Title = data.card3Title || "Under the Starry Night ✨";
  const card3Caption = data.card3Caption || "Promises made when the world went quiet.";

  const letterTitle = data.letterTitle || "A Letter From My Heart 💌";
  const letterMsg = data.letterMessage || "My Dearest,\n\nFrom the moment you stepped into my life, everything felt brighter—like warm golden sunlight after a long winter. Thank you for the laughs, the quiet comforting silences, and for loving me so effortlessly.\n\nYours Always.";

  const note1 = data.loveNote1 || "You make every single day feel like golden hour. 🌄";
  const note2 = data.loveNote2 || "My favorite place in the world is right beside you. 💖";
  const note3 = data.loveNote3 || "Forever is just the beginning of our story. ✨";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d070b] text-[#fbf3f5] font-sans selection:bg-rose-500/30 relative overflow-x-hidden pb-20">
      {/* Audio Player */}
      <audio ref={audioRef} src={musicUrl} loop prefetch="auto" />

      {/* Floating Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/60 border border-rose-400/30 backdrop-blur-md shadow-2xl text-xs font-medium text-rose-200 hover:bg-rose-950/40 transition cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          )}
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-400"></span>
        </span>
        {isPlaying ? <Volume2 size={15} className="text-rose-300" /> : <VolumeX size={15} className="text-white/50" />}
        <span>{isPlaying ? "Playing Sunset Audio" : "Play Music 🎵"}</span>
      </button>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs tracking-widest font-medium uppercase shadow-inner">
          <Sparkles size={13} className="text-amber-300" />
          <span>{badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-rose-200 to-amber-200 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl font-serif italic text-rose-200/90 font-medium">
          {names}
        </p>

        <p className="text-sm md:text-base text-stone-300/80 max-w-2xl mx-auto leading-relaxed font-light italic bg-white/[0.02] p-4 rounded-2xl border border-white/5">
          {quote}
        </p>
      </section>

      {/* Polaroid Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-rose-300/70 mb-1">
            Polaroid Memories
          </h2>
          <p className="font-serif text-2xl text-amber-100">Frozen Moments in Time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="group bg-[#fdfbf7] p-4 pb-6 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-200">
              <img src={card1Img} alt={card1Title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="mt-4 text-center text-stone-800">
              <h3 className="font-serif font-bold text-lg text-amber-950">{card1Title}</h3>
              <p className="text-xs text-stone-600 mt-1 font-serif italic">{card1Caption}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#fdfbf7] p-4 pb-6 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 md:translate-y-4">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-200">
              <img src={card2Img} alt={card2Title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="mt-4 text-center text-stone-800">
              <h3 className="font-serif font-bold text-lg text-amber-950">{card2Title}</h3>
              <p className="text-xs text-stone-600 mt-1 font-serif italic">{card2Caption}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#fdfbf7] p-4 pb-6 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-200">
              <img src={card3Img} alt={card3Title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="mt-4 text-center text-stone-800">
              <h3 className="font-serif font-bold text-lg text-amber-950">{card3Title}</h3>
              <p className="text-xs text-stone-600 mt-1 font-serif italic">{card3Caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Letter */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="relative bg-gradient-to-b from-[#1a0d16] to-[#12080f] border border-rose-500/20 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 shadow-xl">
            <Heart size={22} className="fill-rose-400 text-rose-400 animate-pulse" />
          </div>

          <h2 className="text-center font-serif text-2xl md:text-3xl text-amber-100 font-semibold pt-2">
            {letterTitle}
          </h2>

          <div className="whitespace-pre-line font-serif italic text-stone-200/90 text-base md:text-lg leading-relaxed text-center px-2 md:px-6">
            {letterMsg}
          </div>
        </div>
      </section>

      {/* Love Notes */}
      <section className="max-w-2xl mx-auto px-6 py-8 space-y-4 text-center">
        <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-amber-200/60 mb-6">
          Little Reminders
        </h3>

        <div className="space-y-3">
          {[note1, note2, note3].map((note, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-stone-200 text-sm md:text-base font-serif italic shadow-md hover:border-rose-400/30 transition-all"
            >
              {note}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}