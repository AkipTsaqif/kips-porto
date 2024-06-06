import { login } from "./actions";

const Login = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-3/12 h-1/3 border-4 bg-white p-4">
                <h1 className="text-3xl text-center">Login</h1>
                <form className="flex flex-col p-4 w-full gap-2">
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="email">Email</label>
                        <input className="border-2 rounded-lg h-10 px-3" id="email" name="email" type="text" required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm">Password</label>
                        <input className="border-2 rounded-lg h-10 px-3" id="password" name="password" type="password" required/>
                    </div>
                    <button formAction={login} className="bg-blue-500 text-white p-2 rounded-md mt-4">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;