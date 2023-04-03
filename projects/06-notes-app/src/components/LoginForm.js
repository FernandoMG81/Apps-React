import Togglable from "./Togglable";
import PropTypes from 'prop-types'

export default function LoginForm({handleSubmit, ...props}) {
  return (
    <Togglable buttonLabel='Show login'> 
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type='text'
              value={props.username}
              name='username'
              placeholder='Username'
              onChange={props.handleUsernameChange}
            ></input>
          </div>
          <div>
            <input 
              type='password'
              value={props.password}
              name='password'
              placeholder='Password'
              onChange={props.handlePasswordChange}
            ></input>
          </div> <br/>
          <button>Login</button>
        </form>
    </Togglable>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string
}