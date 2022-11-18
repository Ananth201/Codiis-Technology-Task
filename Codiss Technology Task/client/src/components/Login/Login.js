import "./Login.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faX } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  
    if (props.trigger) {
       return  (
      <div className='popup'>
        <div className="popup-inner">
          <button className="close-btn" onClick={()=> props.setTrigger(false)}><FontAwesomeIcon icon={faX} /></button>
          {props.children}
        </div>
      </div>
    )
    }
}
export default Login;