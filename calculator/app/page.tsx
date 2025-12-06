"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import CalculatorButton from "@/components/calc/CalculatorButton";
import {
  CalculatorButtons,
  ButtonType,
  ButtonConfig,
} from "@/app/buttonType";
import { useCalculatorLogic } from "@/components/calc/useCalculatorLogics";

export default function CalculatorPage() {
  const {
    currentDisplay,
    pressButton,
    clear,
    calculate,
    historyUp,
    historyDown,
    fetchDummyApi,
    apiData,
  } = useCalculatorLogic();

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-200">
      <Card className="bg-gray-300 p-4 w-full max-w-xs shadow-2xl rounded-xl">

        <div className="flex flex-col items-center mb-2">
          <div className="w-full flex justify-between items-center px-2">
            <div className="bg-black w-24 h-6 rounded-sm shadow-inner"></div>
          </div>
        </div>

        <div className="bg-gray-900 text-green-300 font-mono text-3xl p-4 h-20 flex items-center justify-end rounded-md mb-3 shadow-inner">
          {currentDisplay}
        </div>

        {apiData.length > 0 && (
          <div className="bg-gray-900 text-green-300 font-mono text-lg p-4 
                          min-h-20 flex flex-col justify-start rounded-md mb-3 
                          shadow-inner border border-green-700">
            <h2 className="font-bold text-green-400 mb-2 text-xl">
              API Comments:
            </h2>

            <ul className="space-y-1">
              {apiData.slice(0, 3).map((item) => (
                <li key={item.id} className="leading-tight">
                  <strong className="text-green-400">{item.email}</strong>
                  <span className="ml-1">→ {item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 mb-2">
          <CalculatorButton
            config={{ label: "▲", type: ButtonType.Function }}
            onPress={() => historyUp()}
          />

          <CalculatorButton
            config={{ label: "▼", type: ButtonType.Function }}
            onPress={() => historyDown()}
          />

          <CalculatorButton
            config={{ label: "CE", type: ButtonType.Function }}
            onPress={() => clear()}
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {CalculatorButtons.map((btn) => (
            <CalculatorButton
              key={btn.label}
              config={btn}
              onPress={pressButton}
            />
          ))}

          <CalculatorButton
            config={{ label: "=", type: ButtonType.Equals }}
            onPress={() => calculate()}
          />
          <CalculatorButton
            config={{ label: "API", type: ButtonType.API }}
            onPress={() => fetchDummyApi()}
          />
          
        </div>
      </Card>
    </div>
  );
}