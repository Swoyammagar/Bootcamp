"use client";

import { Button } from "@/components/ui/button";
import { ButtonType, ButtonConfig } from "../../app/buttonType";

interface Props {
  config: ButtonConfig;
  onPress: (value: string) => void;
}

export default function CalculatorButton({ config, onPress }: Props) {
  const base = "h-14 text-lg rounded-md shadow";
  const equalsExtra =
  config.type === ButtonType.Equals || config.type === ButtonType.API ? "col-span-4 h-14 text-xl" : "";
  const style =
    config.type === ButtonType.Operator
      ? "bg-gray-600 text-white hover:bg-gray-700"
      : config.type === ButtonType.Function
      ? "bg-red-600 text-white hover:bg-red-700 font-bold"
      : config.type === ButtonType.Equals
      ? "bg-blue-600 text-white hover:bg-blue-700 text-xl"
      : config.type === ButtonType.API
      ? "bg-green-600 text-white hover:bg-green-700 text-xl"
      : "bg-gray-100 text-black hover:bg-gray-200";

  return (
    <Button className={`${base} ${equalsExtra} ${style}`} onClick={() => onPress(config.label)}>
      {config.label}
    </Button>
  );
}
