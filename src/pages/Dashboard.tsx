import { Navigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import DashboardUi from '../components/DashboardUi';

const Dashboard = () => {
    const events = [
        { id: 1, title: 'Event 1', time: '10:00 AM' },
        { id: 2, title: 'Event 2', time: '1:00 PM' }
    ];

    const officeHours = [
        {
            id: 1,
            day: 'sunday',
            startTime: '8:00 AM',
            endTime: '10:00 AM'
        },
        {
            id: 2,
            day: 'sunday',
            startTime: '8:00 AM',
            endTime: '10:00 AM'
        }
    ];

    return (
        <div>
            <DashboardUi events={events} officeHours={officeHours} />
        </div>
    );
};

export default Dashboard;
/*  
 
  {isAuthenticated ? (
                <Navigate to='/dashboard' />
            ) : (
                <AuthCard />
            )}

 */
