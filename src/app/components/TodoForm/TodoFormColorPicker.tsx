"use client";

import { useState } from "react";

const colors = [
  "#cd4e2d",
  "#d9942b",
  "#e8c93b",
  "#73b95b",
  "#4d6cf4",
  "#534ac7",
  "#9151d1",
  "#cc484a",
  "#8c7a55",
];

export default function TodoFormColorPicker({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  const [selectedColor, setSelectedColor] = useState(defaultValue || "");

  const handleColorClick = (color: string) => {
    setSelectedColor((prev) => (prev === color ? "" : color));
  };

  return (
    <div className="flex flex-wrap gap-4">
      <input type="hidden" name="color" value={selectedColor} readOnly />
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => handleColorClick(color)}
        >
          <div
            className={`size-[52px] rounded-full border-2 ${
              color === selectedColor ? "border-white" : "border-transparent"
            }`}
            style={{ background: color }}
          />
        </button>
      ))}
    </div>
  );
}
