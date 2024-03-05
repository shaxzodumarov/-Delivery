import { Link } from "react-router-dom";
import Sidebar from "../../components/MainComponents/Sidebar";

function ChangePassword() {
    return(
        <>
        <Sidebar/>
        <div style={{marginLeft:"150px"}} class="container d-flex justify-content-center align-items-center py-5">
            <div class="card w-50">
                <div class="card-header text-light"style={{background:"#ff3d3d",color:"#fff",}}>
                    <h3>Change password</h3>
                </div>
                <div class="card-body">
                    <form>
                        <input  placeholder="old password" class="form-control mb-2" type="text"/>
                        <input  placeholder="new password" class="form-control mb-2" type="text"/>
                        <Link to={"/settings"}>
                            <button class="btn float-end" style={{background:"#ff3d3d",color:"#fff"}}>send</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default ChangePassword