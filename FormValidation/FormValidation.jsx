import { useState } from "react"

const FormValidation = () => {

const [userName,setUserName]=useState('');
const [userPassword,setUserPassword]=useState('');
const [userEmail,setUserEmail]=useState('');
const [userconfirmPassword,setUserConfirmPassword]=useState('')


const [erroruserName,seterrorUserName]=useState('');
const [erroruserPassword,seterrorUserPassword]=useState('');
const [erroruserEmail,seterrorUserEmail]=useState('');
const [erroruserconfirmPassword,seterrorUserConfirmPassword]=useState('')

const [userNameColor,setUserNameColor]=useState('');
const [userPasswordColor,setUserPasswordColor]=useState('');
const [userEmailColor,setUserEmailColor]=useState('');
const [userconfirmPasswordColor,setUserConfirmPasswordColor]=useState('')

const validate=(e)=>{
e.preventDefault()

if(userName.length > 8){
seterrorUserName('');
setUserNameColor('green')
}
else{
    seterrorUserName('Username must be at least eight letters..')
    setUserNameColor('red')
}

if(userEmail.includes("@gmail")){
seterrorUserEmail('')
    setUserEmailColor('green')
}
else{
    seterrorUserEmail("email should contain @gmail")
    setUserEmailColor('red')
}

if(userPassword.length > 8){
    seterrorUserPassword('');
    setUserPasswordColor('green')
    }
    else{
        seterrorUserPassword('Password must be more than length eight ..')
        setUserPasswordColor('red')
    }
    if(userconfirmPassword != '' && userPassword == userconfirmPassword){
        seterrorUserConfirmPassword('');
        setUserConfirmPasswordColor('green')
        }
        else{
            seterrorUserConfirmPassword('User password didnt match');
        setUserConfirmPasswordColor('red')
        }
}

  return (
   <div className="card">
    <div className="card-image"></div>
   <form>
<input type="text" placeholder="Enter name" style={{borderColor:userNameColor}} value={userName} onChange={(e)=>setUserName(e.target.value)} />

<p className="error">{erroruserName}</p>

<input type="email" placeholder="Enter email" value={userEmail} style={{borderColor:userEmailColor}} onChange={(e)=>setUserEmail(e.target.value)} />
<p className="error">{erroruserEmail}</p>
<input type="password" placeholder="Enter password" value={userPassword} style={{borderColor:userPasswordColor}} onChange={(e)=>setUserPassword(e.target.value)} />
<p className="error">{erroruserPassword}</p>
<input type="password" value={userconfirmPassword} placeholder="Confirm Password" style={{borderColor:userconfirmPasswordColor}} onChange={(e)=>setUserConfirmPassword(e.target.value)} />
<p className="error">{erroruserconfirmPassword}</p>

<button className="submit-btn" onClick={validate}>Submit</button>
   </form>
   </div>
  )
}

export default FormValidation