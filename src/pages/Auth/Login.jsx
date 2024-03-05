import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { postData } from "../../services";

function Login() {
    const username = useRef()
    const password = useRef()
    const navigation = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault()
        const user = {
            email : username.current.value,
            password : password.current.value
        }   
        await postData(user, '/auth/sigin').then((res)=>{
            localStorage.setItem('token',res.token.access)
            if(localStorage.getItem('token')!== "undefined"){
                navigation('/')
            }else{
                console.log('your email or password incorrect');
            }
        })
    }

    return(
        <>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} class="container d-flex justify-content-center align-items-center py-5">
            <div class="card w-50">
                <div class="card-header text-light"style={{background:"#ff3d3d",color:"#fff",}}>
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSignIn}>
                        <input ref={username} placeholder="username" class="form-control mb-2" type="text"/>
                        <input ref={password} placeholder="password" class="form-control mb-2" type="text"/>
                        
                            <button class="btn float-end" style={{background:"#ff3d3d",color:"#fff"}}>send</button>
                        
                    </form>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default Login