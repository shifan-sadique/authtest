import React from 'react'

const login = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="">Username</label>
            <input type="text" id="uname" name="uname" required /> <br /><br />

            <label htmlFor="">Password</label>
            <input type="password" id="uname" name="uname" required /> <br /><br />

            <input type="submit" value="Login"/>

        </form>
    </div>
  )
}

export default login
