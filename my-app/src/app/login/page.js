import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";
export default function LoginPage() {
    return (
        <div> 
            <div className="p-4 max-w-xs mx-auto"> 
            <h1 className="text-4xl font-bold text-center mb-2"> 
                Sign In 
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Sign in to your Account using one of the methods below. 
            </p>
            <LoginWithGoogle /> 



            {/* <div className="py-4"> 
            <button className=" bg-white shadow text-center w-full py-4 flex gap-2 justify-center"> 
                <FontAwesomeIcon icon= {faGoogle} className="w-6" />
                <span> Sign in with Github. </span>  
            </button>
            </div> */}



            </div>
        </div> 
    );
}