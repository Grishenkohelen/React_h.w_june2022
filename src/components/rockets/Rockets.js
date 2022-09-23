import {useEffect, useState} from "react";

import {Rocket} from "../rocket/Rocket";
import {rocketService} from "../../services/rocket.services";

const Rockets = ()=> {

    const [rockets, setRockets]=useState([]);
    useEffect(()=>{
        rocketService.getAll().then(value => setRockets(value.data.filter(value=>value.launch_year !=='2020')))
    },[])
    return(
        <div>
            {
                rockets.map(rocket => <Rocket key={rocket.flight_number} rocket={rocket}/>)
            }

        </div>
    )
}
export {Rockets};
