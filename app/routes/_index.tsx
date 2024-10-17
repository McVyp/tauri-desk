import { Timer } from "~/components/timer";

export default function Index() {
  return (
    <div className="rounded-xl bg-white/10 hover:bg-white/80 flex items-center min-h-[100dvh] justify-center relative">
      <div className="pointer-events-none">
        <Timer />
      </div>
      <div
        data-tauri-drag-region
        className="absolute bg-transparent w-full inset-0"
      ></div>
    </div>
  );
}
//
