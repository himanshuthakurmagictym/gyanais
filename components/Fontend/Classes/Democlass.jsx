import Image from 'next/image'
var moment = require('moment');
import APIs from '../../../config';
import Link from 'next/link'
const Democlass = ({ democlass })=>{

    return (
      <Link href={`democourse/${democlass._id}`}>
<div className="col-md-6 col-lg-3 row-item">
    <div className="wrapper">
      <div className="card-img pb-3 align-center">   
        <Image src={`${APIs.base_url_home}${democlass.demoImage.replace(/\\/g,'\/')}`} alt="class" width="200" height="100" />
        
      </div>
      <h4 className="mbr-fonts-style mbr-card-title align-center display-7"> {democlass.demoTitle}</h4>
      <h5> 
        {/* {democlass.demoLesson}  */}
      • Started at {moment(democlass.demoDate).format('MM Do')}</h5>
    </div>
       
</div>
</Link>
 
    )
}

export default Democlass