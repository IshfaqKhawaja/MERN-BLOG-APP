
import BgImage from './BgImage';
const Login = () =>{
    return <>
    <div className="row mt-80">
        <div className="col-8">
            <BgImage />
          
            
        </div>  
        <div className="col-4">
            <div className="account">
                <div className="account__section">
            <form>
                <div className="group-class">
                    <h3 className="form-heading">Log In</h3>
                </div>
                <div className="group">
                    <input type="email" name="" className="group__control"
                    placeholder="Enter Email" />
                    
                </div>

                <div className="group">
                    <input type="password" name="" className="group__control"
                    placeholder="Password" />
                    
                </div>
                 <div className="group">
                    <input type="submit" name=""
                     className="btn btn-default btn-block"
                    value="Register" />
                    
                </div>
            </form>
            </div>
            </div>
            </div>  
    </div>



    </>

}

export default Login;