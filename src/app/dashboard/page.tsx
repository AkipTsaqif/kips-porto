const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <h1>Welcome back!</h1>
            <div className="grid-rows-6 w-full h-full">
                <div className="flex flex-col items-center justify-center border-4 bg-white p-4">
                    <h1>CMS Portfolio</h1>
                </div>
                <div className="flex flex-col items-center justify-center border-4 bg-white p-4">
                    <h1>Job Applications</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;