import HomePage from './pages/home'
import DetailPage from './pages/detail'
import ListDetailPage from './pages/list-detail'
import RegisterPage from './pages/auth/register'
import LoginPage from './pages/auth/login'
function App() {

  return (
    <div className='bg-dark-body min-h-screen flex justify-center'>
      <div className='bg-neutral-100 w-full screen-tablet:w-7/12 screen-dekstop:w-5/12'>
        {/* <HomePage/> */}
        {/* <DetailPage/> */}
        {/* <RegisterPage/> */}
        {/* <LoginPage/> */}
        <ListDetailPage/>
      </div>
    </div>
  )
}

export default App
