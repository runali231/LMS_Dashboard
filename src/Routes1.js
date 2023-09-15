import HomePage from './Dashboard/HomePage';
import Courses from './Components/Course/Courses';
import AddCourse from './Components/AddCourse/AddCourse';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Session from './Components/Session/Session';
import Instructor from './Components/Instructor/Instructor';
import TestForm from './Components/Test/TestForm';
import TestDetails from './Components/Test/TestDetails';
import Certificate from './Components/Certificate/Certificate';
import ParameterMaster from './Components/ParameterMaster/ParameterMaster';
import ParameterValueMaster from './Components/ParameterMaster/ParameterValueMaster';
import EmployeeMaster from './Components/EmployeeMaster/EmployeeMaster';
import UserMaster from './Components/UserMaster/UserMaster';
import CourseMaster from './Components/CourseMaster/CourseMaster';
import EnrollmentMaster from './Components/EnrollmentMaster/EnrollmentMaster';
import AssignmentMaster from './Components/Assignment Master/AssignmentMaster';
import ContentMaster from './Components/ContentMaster/ContentMaster';
import Course1 from './Components/Course/Course1';
import Mentor from './Components/Mentor/Mentor';
import CourseDetails1 from './Components/CourseDetails/CourseDetails1';
import MentorDetails from './Components/Mentor/MentorDetails';
import MentorChat from './Components/Mentor/MentorChat';
import MessagingInterface from './Components/Mentor/MessagingInterface';
import Profile from './Components/Profile/Profile';
import Scheduling from './Components/Scheduling/Scheduling';
import MeetingCalendar from './Components/Scheduling/MeetingCalendar';

const routes1=[
    { path: '/dashboard', exact: true, name: 'Home', element:HomePage },

    { path: '/courses', name: 'Courses', element:Courses},
    { path: '/addCourse', name: 'AddCourse', element:AddCourse},
    { path: '/courseDetails', name: 'CourseDetails', element:CourseDetails},
    { path: '/session', name: 'Session', element:Session},
    { path: '/test/:id', name: 'Test', element:TestForm},
    { path: '/instructor', name: 'Instructor', element:Instructor},
    { path: '/testDetails/:id', name: 'TestDetails', element:TestDetails},
    { path: '/certificate', name: 'Certificate', element:Certificate},
    { path: '/parameterMaster', name: 'ParameterMaster', element:ParameterMaster},
    { path: '/parameterValueMaster', name: 'ParameterValueMaster', element:ParameterValueMaster},
    { path: '/employeeMaster', name: 'EmployeeMaster', element:EmployeeMaster},
    { path: '/userMaster', name: 'UserMaster', element:UserMaster},
    { path: '/courseMaster', name: 'CourseMaster', element:CourseMaster},
    { path: '/enrollmentMaster', name: 'EnrollmentMaster', element:EnrollmentMaster},
    { path: '/assignmentMaster', name: 'AssignmentMaster', element:AssignmentMaster},
    { path: '/contentMaster', name: 'ContentMaster', element:ContentMaster},
    { path: '/course1', name: 'Course1', element:Course1},
    { path: '/mentor', name: 'Mentor', element:Mentor},
    { path: '/mentorDetails', name: 'MentorDetails', element:MentorDetails},
    { path: '/courseDetails1', name: 'CourseDetails1', element:CourseDetails1},
    { path: '/mentorChat', name: 'MentorChat', element:MentorChat},
    { path: '/messagingInterface', name: 'MessagingInterface', element:MessagingInterface},
    { path: '/profile', name: 'Profile', element:Profile},
    { path: '/scheduling', name: 'Scheduling', element:Scheduling},
    { path: '/meetingCalendar', name: 'MeetingCalendar', element:MeetingCalendar},

]
export default routes1