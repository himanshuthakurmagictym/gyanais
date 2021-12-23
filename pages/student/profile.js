import React from 'react'
import Brudcrums from "../../components/Fontend/Brudcrums"
import { parseCookies } from 'nookies'

function profile() {

   

    return (
        <div>
            <Brudcrums/>
            hello student
        </div>
    )
}

export default profile

export async function getServerSideProps(ctx){
    
   const {user} = parseCookies(ctx)
   console.log("sdsd"+(user))

   return {
       props:{}
   }
}