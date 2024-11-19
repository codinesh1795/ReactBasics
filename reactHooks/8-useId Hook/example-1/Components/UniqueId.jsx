import {useId} from "react";

const UniqueId = () => {
    const id = useId()


    return <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}`} placeholder="Enter Email"/>

        <br/>
        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" id={`${id}`} placeholder="Enter Password"/>

    </div>
}
// check in console for label as well as input you will have id
// duplicate code below for password field and you will notice the ids are not unique
// a simple fix is adding postfix title to id like {id}-email
export default UniqueId;