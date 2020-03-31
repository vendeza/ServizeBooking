import HomeScreen from './HomeScreen';
import AppointmentScreen from './Appointment';
import ServiceScreen from './ServiceScreen';
import EmployeeScreen from './EmployeeScreen';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import AboutScreen from './AboutScreen';
import ContactsScreen from './ContactsScreen';
import BookingScreen from './BookingScreen';

const ROUTING = {
    Home: HomeScreen,
    Employee: EmployeeScreen,
    Service: ServiceScreen,
    DateAndTime: AppointmentScreen,
    Profile: ProfileScreen,
    History: HistoryScreen,
    About: AboutScreen,
    Contacts: ContactsScreen,
    Booking: BookingScreen,
};

export { ROUTING };
