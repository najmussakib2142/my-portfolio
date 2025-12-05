import { useState } from "react";

export default function ToggleLogic() {
  const [options, setOptions] = useState({
    fast: false,
    cheap: false,
    good: false,
  });

  const toggle = (key) => {
    let newState = { ...options, [key]: !options[key] };
    const { fast, cheap, good } = newState;

    // Handle combinations
    if (fast && good && cheap) {
      // All three ON => turn off one depending on last clicked
      if (key === "cheap") {
        // turn off one of (fast, good)
        newState.fast
          ? (newState.fast = false)
          : (newState.good = false);
      } else if (key === "fast") {
        // turn off cheap
        newState.cheap = false;
      } else if (key === "good") {
        // turn off cheap
        newState.cheap = false;
      }
    }

    setOptions(newState);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-56 space-y-3">
      {["fast", "cheap", "good"].map((key) => (
        <div key={key} className="flex justify-between items-center">
          <span className="uppercase">{key}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggle(key)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      ))}
    </div>
  );
}
