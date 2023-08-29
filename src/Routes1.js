import HomePage from './Dashboard/HomePage';
import Courses from './Components/Course/Courses';
import AddCourse from './Components/AddCourse/AddCourse';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Session from './Components/Session/Session';
import Instructor from './Components/Instructor/Instructor';
import TestForm from './Components/Test/TestForm';

const routes1=[
    { path: '/dashboard', exact: true, name: 'Home', element:HomePage },

    { path: '/courses', name: 'Courses', element:Courses},
    { path: '/addCourse', name: 'AddCourse', element:AddCourse},
    { path: '/courseDetails', name: 'CourseDetails', element:CourseDetails},
    { path: '/session', name: 'Session', element:Session},
    { path: '/test', name: 'Test', element:TestForm},
    { path: '/instructor', name: 'Test', element:Instructor},
    

]
export default routes1