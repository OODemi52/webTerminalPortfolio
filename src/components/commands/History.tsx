import React from 'react'
import '../styles/History.css'

const History: React.FC<{ historyArray: string[] }> = ({historyArray}) => {
      return (
        <div>
          <ul>
            {historyArray.map((historyItem, index) => (
              <li className='command' key={index}>{historyItem}</li>
            ))}
          </ul>
        </div>
      );

}

export default History