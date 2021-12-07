import Image from 'next/image'
var moment = require('moment');
const Democlass = ({ democlass })=>{

    return (
       
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">   
        <Image src={`/assets/images/democlasses/${democlass.demoImage}`} alt="class" width="200" height="100" />
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {democlass.title}</h4>
      <h5> {democlass.demoLesson} • Started at {moment(democlass.demoDate).format('MM Do')}</h5>
    </div>
       
</div>
 
    )
}

export default Democlass