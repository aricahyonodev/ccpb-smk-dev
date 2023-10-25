import HomePage from './pages/home'
import DetailPage from './pages/detail'
function App() {

  return (
    <div className='bg-dark-body min-h-screen flex justify-center'>
      <div className='bg-neutral-100 w-full screen-tablet:w-7/12 screen-dekstop:w-5/12'>
        {/* <HomePage/> */}
        <DetailPage/>
      </div>
    </div>
  )
}

export default App
