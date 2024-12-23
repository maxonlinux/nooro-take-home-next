import { Checkbox } from "@headlessui/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";

const twFullConfig = resolveConfig(tailwindConfig);

interface TaskCheckboxProps {
  color?: string;
  checked: boolean;
  onChange: () => void;
}

export default function TaskCheckbox({
  color,
  checked,
  onChange,
}: TaskCheckboxProps) {
  const borderColor = color || twFullConfig.theme.colors["blue"];

  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      className="relative size-[17px] rounded-full cursor-pointer"
    >
      <div
        className="absolute size-full rounded-full border-[1.5px] border-blue"
        style={{ borderColor }}
      />
      <div
        className={`absolute flex items-center justify-center size-full rounded-full bg-purple-dark transition-opacity duration-500 ${
          checked ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="material-symbols-rounded text-xs">done</span>
      </div>
    </Checkbox>
  );
}
