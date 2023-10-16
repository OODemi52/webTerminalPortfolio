import React, { useState } from 'react';
import TerminalPrompt from './TerminalPrompt';
import CommandRouter from './CommandRouter';

const Terminal: React.FC = () => {
  const [promptHistory, setPromptHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);

  const handleEnterPress = (command: string) => {
    if (command.toLowerCase() === 'clear') {
      setPromptHistory([])
    } else {
    const output = <CommandRouter command={command} historyArray={promptHistory.map(p => p.command)} />;
    setPromptHistory(prevPromptHistory => [...prevPromptHistory, { command, output }]);
    }
  };

  return (
    <>
      {promptHistory.map((prompt, index) => (
        <div key={index}>
          {`(web) visitor@terminal.demidaniel.online ~ % ${prompt.command}`}
          <br />
          {prompt.output}
        </div>
      ))}
      <TerminalPrompt onEnterPress={handleEnterPress} />
    </>
  );
};

export default Terminal;
