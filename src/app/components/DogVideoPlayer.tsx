"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type DogVideoPlayerProps = {
  src: string;
  poster: string;
  label: string;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function DogVideoPlayer({ src, poster, label }: DogVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showChrome, setShowChrome] = useState(true);
  const hideChromeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetChromeTimer = useCallback(() => {
    setShowChrome(true);
    if (hideChromeTimer.current) clearTimeout(hideChromeTimer.current);
    hideChromeTimer.current = setTimeout(() => {
      const video = videoRef.current;
      if (video && !video.paused) setShowChrome(false);
    }, 2800);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setShowChrome(true);
  }, [src]);

  useEffect(() => {
    return () => {
      if (hideChromeTimer.current) clearTimeout(hideChromeTimer.current);
    };
  }, []);

  const togglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
        resetChromeTimer();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
      setShowChrome(true);
    }
  }, [resetChromeTimer]);

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const onLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const onSeek = (value: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
    resetChromeTimer();
  };

  return (
    <div
      className="group relative mx-2 mb-2 mt-1 overflow-hidden bg-black touch-manipulation sm:mx-4 sm:mb-4"
      onMouseMove={resetChromeTimer}
      onFocus={resetChromeTimer}
      onTouchStart={resetChromeTimer}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.45)]"
        aria-hidden
      />

      <video
        ref={videoRef}
        className="aspect-video max-h-[min(70vh,36rem)] w-full cursor-pointer object-cover"
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onClick={togglePlay}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false);
          setShowChrome(true);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setShowChrome(true);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--color-dark)]/35 transition hover:bg-[var(--color-dark)]/45"
          aria-label={`Play video for ${label}`}
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-rust)] text-[var(--color-on-dark)] shadow-lg ring-4 ring-[var(--color-on-dark)]/25 transition group-hover:scale-105 sm:size-[4.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-7 sm:size-8" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </button>
      )}

      <div
        className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/90 to-transparent px-3 pb-3 pt-8 transition-opacity duration-300 sm:px-4 sm:pb-4 sm:pt-10 ${
          showChrome || !isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="flex size-11 shrink-0 items-center justify-center text-[var(--color-on-dark)] transition hover:text-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] sm:size-9"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>

          <label className="sr-only" htmlFor="dog-video-progress">
            Video progress
          </label>
          <input
            id="dog-video-progress"
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => onSeek(Number(e.target.value))}
            className="dog-video-progress h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-[var(--color-on-dark)]/25 sm:h-1"
            style={{
              background: `linear-gradient(to right, var(--color-rust) ${progress}%, rgba(243, 237, 228, 0.25) ${progress}%)`,
            }}
          />

          <span className="hidden shrink-0 font-[family-name:var(--font-display-face)] text-xs tabular-nums tracking-wider text-[var(--color-on-dark-muted)] min-[400px]:inline">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
