import {useState, useEffect} from 'react';
import BgImage from './BgImage';
import {useDispatch, useSelector} from 'react-redux';
import {postRegister} from '../../stores/asyncMethods/AuthMethods';
import toast, {Toaster} from 'react-hot-toast';



const Register = () =>{
    const dispatch = useDispatch();
    const [state,setState] = useState({
        name:'',
        email:'',
        password:'',
    });
    const {loading, registerErrors} = useSelector((state) => state.AuthReducer);
    console.log(loading);
    const handleChange = (e)=>{
            setState({
                ...state,
                [e.target.name] : [e.target.value]
            })
    
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch(postRegister(state));
        
            
    }
    // useEffect(()=>{
    //     if(registerErrors.length > 0){
    //         registerErrors.map((error)=>toast(error.msg));
    //     }
    // },[registerErrors])

    return <>
    <div className="row mt-80">
        <div className="col-8">
            <BgImage />
            {/* <Toaster position="top-center"
                reverseOrder={false} /> */}

          
            
        </div>  
        <div className="col-4">
            <div className="account">
                <div className="account__section">
            <form onSubmit={handleSubmit}>
                 <div className="group-class">
                    <h3 className="form-heading">Register In</h3>
                </div>
                <div className="group">
                    <input type="text" 
                    name="name"
                    className="group__control"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={handleChange}
                     />

                </div>

                <div className="group">
                    <input type="email" 
                    name="email" 
                    className="group__control"
                    placeholder="Enter Email" 
                    value={state.email}
                    onChange={handleChange}

/>
                    
                </div>

                <div className="group">
                    <input type="password" 
                    name="password" 
                    className="group__control"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}

 />
                    
                </div>
                 <div className="group">
                    <input type="submit" name=""
                     className="btn btn-default btn-block"
                    value={loading? "...":'Register'} />
                    
                </div>
            </form>
            </div>
            </div>
            </div>  
    </div>



    </>

}

export default Register;