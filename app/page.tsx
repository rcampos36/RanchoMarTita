import Image from 'next/image';
import Header from './components/Header';
import ReservationSection from './components/Reservations';
import CTA from './components/CTA';
import RoomsSection from './components/Rooms';
import Footer from './components/Footer';
import HeaderNav from './components/Header-nav';
import Events from './components/Events';

export default function Home() {
  return (
    <div className='main relative'>
      <Header />
      <HeaderNav />
      <ReservationSection />
      <Events />
      <CTA />
      <RoomsSection />
      <Footer />
    </div>
  )
}
