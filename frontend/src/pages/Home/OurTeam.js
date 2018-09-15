import React from 'react';
// import aboutPhoto from '../../img/asset2.png';
import Howell from '../../img/Howell.jpeg';
import Christy from '../../img/Christy.jpeg';
import Lea from '../../img/Lea.jpeg';
import 'tachyons';
import './Home.css';

class OurTeam extends React.Component {
  render() {
    return (
      <div className="teamMember">
        <div className="memberitem grow">
          <p>Howell Suen</p>
          <img className="teamImg" src={Howell} alt="Howell" />
          <p>Full-Stack Developer</p>
        </div>
        <div className="memberitem grow">
          <p>Christy Law</p>
          <img className="teamImg" src={Christy} alt="Christy" />
          <p>Full-Stack Developer</p>
        </div>
        <div className="memberitem grow">
          <p>Lea Ho</p>
          <img className="teamImg" src={Lea} alt="Lea" />
          <p>UIUX Developer</p>
        </div>
      </div>
    );
  }
}
export default OurTeam;
