
import eclips27 from './Ellipse27.png'
import eclips30 from './Ellipse30.png'
import './styles.css'
const Background = () => {
  return <div className='center'>
    <img src={eclips27} className='absolute' height='300' width='300' alt="Background" />
    <img src={eclips30} className='absolute' height='300' width='300' alt="Background" />
  </div>

}

export default Background;
