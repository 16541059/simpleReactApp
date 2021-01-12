import React from 'react'
import {  CardFooter, Card } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Foter() {
    return (
        <div className="text-center" >

            <Card color="dark" style={{marginLeft:"0px",width:"100%"}}>


                <CardFooter >
               
                        <a href="https://www.linkedin.com/in/bekiryildirim/"  target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={['fab',"linkedin"]}></FontAwesomeIcon> </a>
                        <a href="!#" onClick={(e)=>e.preventDefault()} ><FontAwesomeIcon icon={['fab',"instagram"]}style={{color:"#f58787"}}></FontAwesomeIcon> </a>
                        <a href="https://twitter.com/ath1rsizitimoti"  target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={['fab',"twitter"]}></FontAwesomeIcon> </a>
  
                
                </CardFooter>
            </Card>


        </div>
    )
}
