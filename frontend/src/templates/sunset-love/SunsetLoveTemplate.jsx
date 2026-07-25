import React, { useState } from "react";
import { Heart, Music, Image as ImageIcon, MessageCircle, Sparkles, Volume2, VolumeX } from "lucide-react";

export default function SunsetLoveTemplate({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample data fallback if props are empty
  const defaultData = {
    title: "Our Love Story Under the Sunset",
    partnerName: "Alex & Sam",
    subtitle: "Every sunset brings us closer together...",
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    loveMessage:
      "From the moment we met, every sunset has felt a little warmer. Here's to all our polaroid memories, late-night conversations, and the endless adventures waiting for us.",
    memories: [
      { id: 1, title: "Our First Sunset Walk", caption: "Golden hour and endless conversations.", url: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=600" },
      { id: 2, title: "Coffee Date Memories", caption: "Laughing over extra caramel lattes.", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600" },
      { id: 3, title: "Starry Night Together", caption: "Watching stars when the sun goes down.", url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" }
    ],
    notes: [
      "You make every single day feel like golden hour. 🌄",
      "Thank you for being my favourite person to watch the sunset with. ❤️",
      "Forever is just the beginning of us. ✨"
    ]
  };

  const content = { ...defaultData, ...data };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-rose-950 to-neutral-950 text-amber-50 selection:bg-rose-500 selection:text-white font-sans relative overflow-hidden pb-16">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-500/20 via-rose-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Music Player Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 backdrop-blur-md border border-amber-500/30 shadow-lg hover:bg-amber-900/60 transition-all text-amber-200 text-sm"
        >
          <Music className="w-4 h-4 text-rose-400 animate-pulse" />
          <span>{isPlaying ? "Pause Music" : "Play Sunset Music"}</span>
          {isPlaying ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-amber-400/60" />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-6 text-center max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Sunset Love Collection
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-400 mb-4 tracking-tight leading-tight">
          {content.title}
        </h1>
        <p className="text-rose-200/80 text-lg md:text-xl font-light max-w-xl">
          {content.partnerName}
        </p>
        <p className="text-amber-200/60 text-sm mt-2 italic">
          "{content.subtitle}"
        </p>
      </section>

      {/* Polaroid Gallery Section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 mb-8 justify-center text-amber-300">
          <ImageIcon className="w-5 h-5 text-rose-400" />
          <h2 className="text-2xl font-serif font-semibold">Polaroid Memories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.memories.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-neutral-100 text-neutral-900 p-4 pb-6 rounded-sm shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 relative group"
              style={{ rotate: `${(idx % 2 === 0 ? 1 : -1) * (idx + 1.5)}deg` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200 mb-4 rounded-xs">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-800">{item.title}</h3>
              <p className="text-xs text-neutral-600 mt-1 italic">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Love Message Section */}
      <section className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="bg-gradient-to-b from-amber-900/30 to-rose-950/40 border border-amber-500/20 rounded-2xl p-8 backdrop-blur-md shadow-xl relative">
          <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-serif text-amber-200 mb-3">A Note From My Heart</h3>
          <p className="text-amber-100/90 leading-relaxed text-sm md:text-base italic">
            "{content.loveMessage}"
          </p>
        </div>
      </section>

      {/* Sunset Love Notes List */}
      <section className="max-w-xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 mb-6 justify-center text-amber-300">
          <MessageCircle className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-serif">Little Love Notes</h2>
        </div>
        <div className="space-y-3">
          {content.notes.map((note, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/15 text-amber-200/90 text-sm flex items-center gap-3 backdrop-blur-xs"
            >
              <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}