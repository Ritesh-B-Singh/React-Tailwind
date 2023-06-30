import Ellipse from '../assets/Ellipse1.png';
import Polygon1 from '../assets/Polygon1.png';
import Polygon2 from '../assets/Polygon2.png';
import Pngwing1 from '../assets/Pngwing1.png';
import Group75 from '../assets/Group75.png';
import Group1 from '../assets/Group1.png';
import Everyone1 from '../assets/Everyone1.png';
import Group from '../assets/Group.png'
import Vector from '../assets/Vector.png'

const BackgroundImages = () => {
  return (
    <>
          <img
              src={Ellipse}
              className="z-10 absolute"
          />
          <img
              src={Polygon1}
              className="w-[1255px] z-0 absolute"
          />
          <img
              src={Polygon2}
              className="right-0 z-10 absolute"
          />
          <img
              src={Pngwing1}
              className="right-0 w-[597px] h-[441px] top-[547px] absolute"
          />
          <img
              src={Group75}
              className="w-[450px] h-[350px] top-[240px] left-[950px] absolute"
          />
          <img
              src={Group1}
              className="w-[491px] h-[281px] top-[260px] left-[810px] z-40 absolute"
          />
          <img
              src={Everyone1}
              className="w-[491px] h-[281px] top-[160px] left-[860px] z-30 absolute"
          />
          <img
              src={Group}
              className="w-[53px] h-[52px] top-[500px] left-[1320px] shadow-md bg-white z-50 absolute"
              style={{ transform: 'rotate(15.14deg)' }}
          />
          <img
              src={Vector}
              className="w-[53px] h-[53px] top-[330px] left-[1370px] shadow-md bg-white z-50 absolute"
              style={{ transform: 'rotate(-16.83deg)' }}
          />
    </>
  )
}

export default BackgroundImages