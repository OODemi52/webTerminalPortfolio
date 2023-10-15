import React, { useState, useEffect, useRef } from 'react';
import './styles/TerminalPrompt.css';

interface TerminalPromptProps {
  onEnterPress: (command: string) => void;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({ onEnterPress }) => {
  const [inputText, setInputText] = useState('');
  const [inputWidth, setInputWidth] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.scrollWidth);
    }
  }, [inputText]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnterPress(inputText);
      setInputText('');
    }
  };

  return (
    <>
      <div className="terminal-prompt">
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
          style={{ width: inputWidth }}
        />
      </div>
    </>
  );
};

export default TerminalPrompt;
