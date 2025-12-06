export enum ButtonType {
  Number = "number",
  Operator = "operator",
  Function = "function",
  Equals = "equals",
  API = "api",
}

export interface ButtonConfig {
  label: string;
  type: ButtonType;
}

export const CalculatorButtons: ButtonConfig[] = [
  // Row 1
  { label: "7", type: ButtonType.Number },
  { label: "8", type: ButtonType.Number },
  { label: "9", type: ButtonType.Number },
  { label: "÷", type: ButtonType.Operator },

  // Row 2
  { label: "4", type: ButtonType.Number },
  { label: "5", type: ButtonType.Number },
  { label: "6", type: ButtonType.Number },
  { label: "×", type: ButtonType.Operator },

  // Row 3
  { label: "1", type: ButtonType.Number },
  { label: "2", type: ButtonType.Number },
  { label: "3", type: ButtonType.Number },
  { label: "-", type: ButtonType.Operator },

  // Row 4
  { label: "0", type: ButtonType.Number },
  { label: ".", type: ButtonType.Number },
  { label: "%", type: ButtonType.Operator },
  { label: "+", type: ButtonType.Operator },
];
