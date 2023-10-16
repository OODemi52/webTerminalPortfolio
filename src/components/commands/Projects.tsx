import React from 'react'

const Projects:React.FC = () => {

  // Open project depending on which project command is passed in through props.
  // Come B
  /*
  useEffect(() => {
    switch (Future prop.toLowerCase()) {
      case 'Slack Image Uploader':
        return <Whoami />;
      case 'Asset Management Application':
        return <Whois />;
      case 'Interactive Web Terminal Portfolio':
        return <Education />;
      case 'Ball-Valve Control System':
        return <Projects />;
      default:
        return <NotFound command={command} />;
    }
  })*/
<p><strong>Slack Image Uploader</strong><br />Application that allows users to upload images in a specified directory to a specified Slack channel.<br /><em>Technologies Used: Typescript, React, Node.js, Express, Slack Web API, FS and PATH Modules, Electron</em></p>
  return (
    <>
      <ul>
        <li><p><strong>Slack Image Uploader - slack</strong><br />Application that allows users to upload multiple images in a specified directory to a specified Slack channel. This application aims to reduce the amount of time require to upload large amounts of images (100+) to Slack using their native application.<br /><em>Technologies Used: Typescript, React, Node.js, Express, Slack Web API, FS and PATH Modules, Electron</em></p></li>
        <li><p><strong>Asset Management Application - asset</strong><br />Application that allows users to upload images in a specified directory to a specified Slack channel.<br /><em>Technologies Used: Javascript, React, Node.js, Express, Bcrpyt, JWT, MongoDB, Axios</em></p></li>
        <li><p><strong>Interactive Web Terminal Portfolio - terminal</strong><br />Uncaught RangeError: Circular Reference. Maximum call stack size exceeded ;)<br /><em>Technologies Used: Typescript, React, Redux</em></p></li>
        <li><p><strong>Ball-Valve Control System - control</strong><br /> An automated control valve created by the Coanda Corporation ENME 444 Fall 2020 Capstone group. The program is used to control a ball valve in an Experimemtal Reaction Turbine using a stepper motor as an actuator based on user input through buttons and data collected from a proximity sensor that is used to sense mass air flow rate.<br /><em>Technologies Used: C++, SoftwareSerial Library, LiquidCrystal_I2C Library, Time-Of-Flight Sensor, Stepper Motor, Arduino</em></p></li>
        <li><p><strong>LIDAR Camera Autofocus System</strong><br />- - - Under Construction! - - -</p></li>
      </ul>

      <p>To navigate the the <a className='info' href="https://github.com/OODemi52" target='_blank'>Github</a> repo for any of the projects use the command '<span className='command'>open project {'<project-alias>'}</span>'.<br />The project alias can be found next to it's title (e.g. open project slack)</p>
      <h1>COME BACK AND ADD FUNCTIONALLITY FOR THIS^^^^</h1>
    </>
  )
}

export default Projects