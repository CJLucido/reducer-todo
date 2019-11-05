import React, {useReducer} from 'react';

//components
import SomeCard from "../molecules/SomeCard"
import SomeMap from "../molecules/SomeMap"

//reducers
import appReducer, { initialState } from "./reducers/reducer"


function SomeList() {
    const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <div >
        {
            //somestate.map
            () =>{ <SomeCard/>}

        }
    </div>
  );
}

export default SomeList;
