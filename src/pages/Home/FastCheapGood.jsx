import { useState } from "react";

export default function FastCheapGood() {
  const [selected, setSelected] = useState({
    fast: true,
    cheap: false,
    good: true,
  });

  const toggle = (clicked) => {
    // If user tries to turn OFF (must always stay ON), block it
    if (selected[clicked]) return;

    // Turn ON the clicked switch
    const newState = { ...selected, [clicked]: true };

    // Apply fixed logic
    const { fast, cheap, good } = newState;

    // FAST + CHEAP → GOOD OFF
    if (fast && cheap) {
      newState.good = false;
    }

    // FAST + GOOD → CHEAP OFF
    if (fast && good) {
      newState.cheap = false;
    }

    // CHEAP + GOOD → FAST OFF
    if (cheap && good) {
      newState.fast = false;
    }

    setSelected(newState);
  };

  const Slot = ({ active, onClick }) => (
    <div
      className="w-14 h-5 bg-gray-300/30 rounded-full relative cursor-pointer
      shadow-inner border border-gray-400/40"
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 bg-gray-100 rounded-full absolute top-0.5 shadow 
        transition-all duration-300 ${
          active ? "left-9" : "left-1"
        }`}
      />
    </div>
  );

  const Row = ({ label, keyName }) => (
    <div className="flex items-center justify-between">
      <span className="text-white tracking-widest text-lg font-semibold">
        {label}
      </span>
      <Slot
        active={selected[keyName]}
        onClick={() => toggle(keyName)}
      />
    </div>
  );

  return (
    <div className="flex items-center justify-center py-14">
      <div
        className="
          w-64  p-6 rounded-xl
          bg-[#1a1a1a]
          shadow-[4px_4px_12px_rgba(0,0,0,0.8)]
          border border-gray-700
          space-y-6
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      >
        <Row label="FAST" keyName="fast" />
        <Row label="CHEAP" keyName="cheap" />
        <Row label="GOOD" keyName="good" />
      </div>
    </div>
  );
}
