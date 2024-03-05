import User from "../../assets/user.avif";
import { Link } from "react-router-dom";
import Sidebar from "../../components/MainComponents/Sidebar";

const UpdateProfile = () => {
  return (
      <>
        <Sidebar/>
        <div className="container" style={{ width: "100vh",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"500px" }}>
          <div style={{ width: "100%" }} className="py-5 d-flex align-items-start justify-content-start gap-3">
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
            <div className="card shadow p-4 " style={{width:"400px"}}>
              <div className="d-flex align-items-start gap-2 mb-3 flex-column">
                <p className="m-0 w-25">Firstname :</p>
                <input type="text" className="form-control" value={"Shaxzod"} />
              </div>
              <div className="d-flex align-items-start gap-2 mb-3 flex-column">
                <p className="m-0 w-25">Lastname :</p>
                <input type="text" className="form-control" value={"Umarov"} />
              </div>
              <div className="d-flex align-items-start gap-2 mb-3 flex-column">
                <p className="m-0 w-25">Email :</p>
                <input
                  type="text"
                  className="form-control"
                  value={"Shaxzod@gmail.com"}
                />
              </div>
              <div className="d-flex align-items-start gap-2 mb-3 flex-column">
                <p className="m-0 w-25">Phone :</p>
                <input
                  type="text"
                  className="form-control"
                  value={"+998 (90) 000 - 00 - 00"}
                />
              </div>
              <div className="d-flex align-items-start gap-2 mb-3 flex-column">
                <p className="m-0 w-25">Address :</p>
                <input
                  type="text"
                  className="form-control"
                  value={"Islom Karimov 1-uy"}
                />
              </div>
              <div class="w-100 d-flex justify-content-center">
              <Link to={"/settings"}>
                <button className="btn btn-danger w-15 mx-auto">
                  save
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default UpdateProfile;
