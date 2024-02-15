import Cookies from 'js-cookie'
import Header from '../Header'

const Profile = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="bg-profile-container">
        <h1>Account</h1>
        <hr />
        <p>Member ship</p>
        <p>rahul@gmail.com</p>
        <p>Password : *********</p>
        <hr />
        <p>Plan details</p>
        <p>
          Premium <span>Ultra HD</span>
        </p>
        <hr />
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </>
  )
}
export default Profile
