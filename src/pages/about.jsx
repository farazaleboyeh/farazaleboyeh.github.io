import { useLocation } from 'react-router'

export function About(){
    let location = useLocation()
    console.log(location.pathname)

    

    return(
        <p>about</p>
    )
}

export default About