import Brudcrums from "../../components/Fontend/Brudcrums"
import APIs from '../../config.js';
import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link'

function dashboard() {
    return (
        <>
        <Brudcrums/>
      
        </>
    )
}

export default dashboard

export async function getServerSideProps(ctx){
   
    return { props: {}}
  
}
