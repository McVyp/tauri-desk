import { Timer } from "~/components/timer";

export default function Index() {
  return (
    <div className="flex items-center min-h-[100dvh] justify-center relative">
        <header data-tauri-drag-region className="absolute bg-red-300 w-full h-5 top-0 left-0"/>
      <Timer />
    </div>
  );
}
