"use client";

import { Checkbox } from "@headlessui/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";
import { toggleTask } from "@/app/actions";
import { useRef } from "react";

const twFullConfig = resolveConfig(tailwindConfig);

interface TaskCheckboxProps {
  color?: string;
  checked: boolean;
  onToggle: () => void;
}

export default function TaskCheckbox({
  color,
  checked,
  onToggle,
}: TaskCheckboxProps) {
  const borderColor = color || twFullConfig.theme.colors["blue"];

  return (
    <div className="flex items-center justify-center relative shrink-0 size-6">
      <Checkbox
        name="completed"
        value="completed"
        checked={checked}
        onChange={onToggle}
        className="relative size-[17px] rounded-full cursor-pointer"
      >
        <div
          className="absolute size-full rounded-full border-[1.5px] border-blue"
          style={{ borderColor }}
        />
        <div
          className={`absolute z-10 flex items-center justify-center size-full rounded-full bg-purple-dark transition-opacity duration-500 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="material-symbols-rounded text-xs">done</span>
        </div>
      </Checkbox>
    </div>
  );
}
