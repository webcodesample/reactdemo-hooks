export default function ValidateUser(){
    const isLoggedin = false;

    return(
        <>
            {isLoggedin ? <h5>User</h5> : <h5>Logged User</h5>}
        </>
    )
}