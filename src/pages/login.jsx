import React from 'react'

function Login() {
  return (
    <div>
        <div className="login_father">
  <div className="login_box">
    <input placeholder="Эл. адрес" className="login_mail" type="text" />
    <input placeholder="Пароль" className="login_mail" type="text" />
    <label className="login_file">
      <input className="login_file" type="file" style={{ display: "none" }} />
      место под капчу
    </label>
    <div className="voytiDiv">
      <button>Войти</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login