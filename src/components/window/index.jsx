import '../../App.css'
import { useState } from 'react';

function Window () {
  const [isDay, setIsDay] = useState(true);
  
  const handleWindowClick = () => {
    setIsDay(!isDay);
  }
  const windowColor = isDay ? 'window-color' : 'window-color-night';
  const dayNightTime = isDay ? 'sun-moon' : 'sun-moon-night'
  
  return <div className={ windowColor } onClick={handleWindowClick}>
              <div className={ dayNightTime }></div>
  </div>
}

export default Window