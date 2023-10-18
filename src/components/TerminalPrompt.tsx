import React, { useState, useEffect, RefObject } from "react";
import "./styles/TerminalPrompt.css";

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

interface TerminalPromptProps {
  onEnterPress: (command: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  commandHistory: CommandHistoryItem[];
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  onEnterPress,
  inputRef,
  commandHistory,
}) => {
  const [inputText, setInputText] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  useEffect(() => {
    // Reset the history index when the command history changes
    setHistoryIndex(null);
  }, [commandHistory]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterPress(inputText);
      setInputText("");
      setHistoryIndex(null);
    } else if (event.key === "ArrowUp" && commandHistory.length > 0) {
      // Go up command history.
      const newIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInputText(commandHistory[newIndex].command);
    } else if (event.key === "ArrowDown" && commandHistory.length > 0) {
      // Go down command history.
      if (historyIndex !== null) {
        const newIndex = Math.min(commandHistory.length, historyIndex + 1);
        setHistoryIndex(newIndex);

        if (newIndex === commandHistory.length) {
          // If at the bottom of command history, set empty input text.
          setInputText("");
        } else {
          setInputText(commandHistory[newIndex].command);
        }
      }
    }
  };

  setTimeout(() => {
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(inputText.length, inputText.length);
      }
    });
  }, 0);

  return (
    <>
      <div className="terminal-prompt">
        <span className="prompt">
          (web) visitor@terminal.demidaniel.online ~ %{" "}
          <span className="command">{inputText}</span>
          <span className="blinking-caret"></span>
        </span>
        <input
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputText.toString()}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        />
      </div>
    </>
  );
};

export default TerminalPrompt;
