export default function AdminDashboard(){
    const adminFlag = true;

    return(
        <>
        {adminFlag && <h5>Admin Dashboard</h5>}
        </>
    )
}