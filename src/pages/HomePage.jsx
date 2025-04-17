import '../styles/theme.css';

/*
   HomePage is the landing page of this Airport Management System web application, and the page you should always see
   upon booting the program. Being the introductory page, this .jsx introduces users to the platform and highlights
   the main features of the system:

   - Allows for real-time management of flight scheduling
   - Allows for passengers to book flights quickly and easily
   - Offers an easy, streamlined check-in experience for travelers

   This page (alongside all others) has a very formal layout presented with CSS, which can be found in the /styles
   folder!
*/
const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to Airport Management System</h1>
        <p>Efficiently manage flights, passengers, and airport operations</p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <i className="fas fa-plane-departure"></i>
          <h3>Flight Schedules</h3>
          <p>View and manage all flight schedules in real-time</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-ticket-alt"></i>
          <h3>Booking System</h3>
          <p>Easy and quick flight booking for passengers</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-user-check"></i>
          <h3>Passenger Check-in</h3>
          <p>Streamlined check-in process for travelers</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;