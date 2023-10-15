import React, { useState } from 'react';
import TerminalPrompt from './TerminalPrompt';
import CommandRouter from './CommandRouter';

const Terminal: React.FC = () => {
  const [prompts, setPrompts] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string | null>(null);

  const handleEnterPress = (command: string) => {
    const output = <CommandRouter command={command} historyArray={prompts.map(p => p.command)} />;
    setPrompts(prevPrompts => [...prevPrompts, { command, output }]);
    setCurrentCommand(command);
  };

  return (
    <>
      {prompts.map((prompt, index) => (
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
