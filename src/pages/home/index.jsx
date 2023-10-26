import React from 'react'
import Header from './components/Header'
import Footer from '../../components/Footer'
import PopularBlog from './components/PopularBlog';
import UpcomingEvent from './components/UpcomingEvent';

const index = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section>
          <UpcomingEvent/>
        </section>
        <section>
          <PopularBlog/>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default index