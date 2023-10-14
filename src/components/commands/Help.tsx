import React from 'react';
import '../styles/Help.css';

const Help: React.FC = () => {
  const command = {
    whoami: 'All about yourself',
    whois: 'All about me',
    education: 'View my education',
    projects: 'View coding projects',
    resume: 'View my resume (pdf)',
    social: 'Display social networks',
    contact: 'Feel free to shoot me an email!',
    history: 'View command history',
    help: 'List all commands',
    clear: 'Clear Terminal',
    banner: 'Display header',
    gui: 'Coming soon ;)'
  };

  return (
    <div>
      {Object.entries(command).map(([name, description]) => (
        <p key={name}>
          <span className="command">{name}</span> -{' '}
          <span>{description}</span>
        </p>
      ))}
    </div>
  );
};

export default Help;
