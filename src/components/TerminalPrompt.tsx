import React, { useState, useEffect, useRef } from 'react';
import CommandRouter from './CommandRouter';
import './styles/TerminalPrompt.css';

const TerminalPrompt: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [inputWidth, setInputWidth] = useState(0); // New state for input width
  const [command, setCommand] = useState<string>('');
  const [historyArray, setHistoryArray] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null); // Ref to input element
  const containerRef = useRef<HTMLDivElement>(null);


  // Focus input eleement when component is mounted
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, []);

  // Update the input width when inputText changes
  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.scrollWidth);
    }
  }, [inputText]);

  // focus on input when terminal is clicked
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  // Handle when user starts typing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Handle when Enter key is pressed
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        setCommand(inputText);
      setInputText('');
    }
  };

  useEffect(() => {
    if (command) {
      // Update the historyArray when a command is entered
      setHistoryArray(prevHistory => [...prevHistory, `${command}`]);
    }
  }, [command]);

  return (
    <>
      <div className="terminal-prompt" ref={containerRef}>
        <span className="width-machine">(web) visitor@terminal.demidaniel.online ~ % <span className="command">{inputText}</span><span className="blinking-caret"></span></span>
        <input
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          style={{ width: inputWidth }} // Set the width dynamically
        />
      </div>
      <CommandRouter command={command} historyArray={historyArray}/>
    </>
  );
};

export default TerminalPrompt;
