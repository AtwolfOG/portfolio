export default function Bg() {
  return (
    <video
      src="videoplayback.mp4"
      autoPlay
      loop
      muted
      className="object-cover fixed top-0 -z-1 h-dvh w-dvw brightness-25"
    />
  );
}
