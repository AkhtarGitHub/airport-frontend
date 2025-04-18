**Airport Management System**
**Frontend Documentation**

**Project Overview**
The Airport Management System (Frontend) is a React-based web application designed to 
streamline airport operations for passengers, airline staff, and administrators. It integrates 
with a Java backend to provide real-time flight scheduling, booking, check-in, and management features.

**Key Features**
✅ Passenger Portal
Browse & book flights
Online check-in
View flight status
✅ Airline Staff Dashboard
Manage flight schedules
Assist passenger check-ins
✅ Admin Console
Add airports, aircraft, passengers
✅ Responsive Design
Works on desktop, tablet, and mobile
Clean, airport-themed UI

**Technologies Used**
Frontend: React.js, JavaScript
Styling: CSS
Routing: React Router
API Handling: Axios (for backend integration)

**Setup & Installation**
Prerequisites
    Node.js (v16+)
    npm 
    Java backend running on http://localhost:8080
Steps:
  Clone the repository: 
    git clone https://github.com/your-repo/airport-frontend.git

  Install dependencies:
    npm install

  Run the development server:
    npm start
    App will launch at: http://localhost:3000


**Project Structure**
src/  
├── components/      # Reusable UI components (FlightSchedule, BookingForm, etc.)  
├── pages/           # Main views (Passenger, Staff, Admin)  
├── services/        # API calls & mock data  
├── styles/          # Global CSS & themes  
├── App.js           # Main app router  
└── index.js         # React entry point  

**Mock Data Usage**
The frontend includes sample datasets for development:
Flights, airports, passengers, bookings (mockData.js)
Switch to real API by updating services/api.js.

Example API call:
import { getFlights } from './services/api';
// Fetches flight data (mock or real)
const fetchFlights = async () => {
  const flights = await getFlights();
  console.log(flights);
};


**Integration with Backend**
To connect to your Java API:
Ensure the backend is running (e.g., http://localhost:8080).
Update services/api.js with the correct endpoints:
const API_BASE_URL = "http://localhost:8080/api";

**Testing**
Unit Tests: Run with:
  npm test
Manual Testing:
  Verify all user flows (booking, check-in, admin).

**Deployment**
Deploy to AWS:
  Build the app (npm run build).
  Upload the build/ folder to hosting provider.

**Future Improvements**
  Real-time updates (WebSockets for flight status changes).
  Payment gateway integration for bookings.
  Enhanced analytics dashboard for admins.

**Support & Contact**
For questions or issues, contact:
  Email: mohammad.hossain@keyin.com
  GitHub: https://github.com/AkhtarGitHub/airport-frontend.git


© 2025 Airport Management System | 


**Developed by**
  Mohammad Hossain
  Matthew Verge
  Cameron Beanland
  Joshua Youden

**License**
  This project is licensed under the MIT License.

**This README.md provides a professional, client-ready overview of the frontend work.**
