import React, {useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth.js"

const Jokes = () => {

    useEffect(() => {
        axiosWithAuth()
        .get('/api/jokes')
        .then(res => {
            console.log({res})
            //setJokes(res.data)
        })
        .catch(err => {
            console.log({err})
        })
    }, [])

    return(
        <div>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default Jokes