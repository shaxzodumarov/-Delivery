import User from "../../assets/user.avif";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center">About Shaxzod</h2>
      <div className="py-5 d-flex align-items-start justify-content-center gap-3">
        <div
          style={{ width: "20%" }}
          className="card rounded-3 p-3 d-flex flex-column justify-content-center shadow align-items-center"
        >
          <img
            style={{ width: "50%", borderRadius: "50%" }}
            className="shadow"
            src={User}
            alt=""
          />
          <h3>Shaxzod</h3>
        </div>
        <div className="card shadow p-3 w-50">
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="m-0 w-25">Firstname :</p>
            <input type="text" className="form-control" value={"Shaxzod"} />
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="m-0 w-25">Lastname :</p>
            <input type="text" className="form-control" value={"Umarov"} />
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="m-0 w-25">Email :</p>
            <input
              type="text"
              className="form-control"
              value={"Shaxzod@gmail.com"}
            />
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="m-0 w-25">Phone :</p>
            <input
              type="text"
              className="form-control"
              value={"+998 (90) 000 - 00 - 00"}
            />
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="m-0 w-25">Address :</p>
            <input
              type="text"
              className="form-control"
              value={"Islom Karimov 1-uy"}
            />
          </div>
          <div style={{width:"100%",height:"40px" ,display:"flex", alignItems:"center" , justifyContent:"space-between"}}>
            <Link to="/update-profile" className="btn btn-danger w-25 mx-auto">
              Update profile
            </Link>
            <Link to="/change-password" style={{color:"#ff3d3d"}} className="w-25 mx-auto">
              change-password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
