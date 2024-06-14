import { Alert } from "react-bootstrap"

const NoContent = ({ message }) => {
    return (
        <>
            <center>
                <img src='./images/no-content.png' width='350' className='mb-2'></img>
                <h5>
                    🐾  &nbsp; {message}
                </h5>
            </center>
        </>
    )

}

export default NoContent