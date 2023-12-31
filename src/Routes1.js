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
import MeetingCalendar from './Components/Scheduling/MeetingCalendar';
import AssignmentList from './Components/Instructor/AssignmentList';
import GradeAnalytics from './Components/Instructor/GradeAnalytics';
import GradeRecording from './Components/Instructor/GradeRecording';
import FeedbackInterface from './Components/Instructor/FeedbackInterface';
import ResourceManagement from './Components/ResourceManagement/ResourceManagement';
import ResourceManagementAndSharing from './Components/ResourceManagement/RManagement3';
import ResourceOrganizer from './Components/ResourceManagement/ResourceOrganizar';
import NotificationMessage from './Components/Notification/NotificationMessage';
import Feedback from './Components/Feedback/Feedback';
import Assessment from './Components/Assessment/Assessment';
import CountDownTimer from './Components/Assessment/CountDownTimer';
import PdfViewer from './Components/pdf/PdfViewer';
import VideoLectures from './Components/pdf/VideoLectures';
import PptLectures from './Components/pdf/PptLectures';
import InstructorPayout from './Components/InstructorPayout/InstructorPayout';
import PaymentInformation from './Components/InstructorPayout/PaymentInformation';
import PendingPayout from './Components/InstructorPayout/PendingPayout';
import PendingPayout1 from './Components/InstructorPayout/PendingPayout1';
import PayToInstructor from './Components/InstructorPayout/PayToInstructor';
import Invoice from './Components/InstructorPayout/Invoice';
import CompletedPayout from './Components/InstructorPayout/CompletedPayout';
import BankDetails from './Components/InstructorPayout/BankDetails';
import AllMessages from './Components/InstructorPayout/AllMessages';
import Language from './Components/InstructorPayout/Language';
import SocialLoginSetting from './Components/SiteSetting/SocialLoginSetting';
import SiteSetting from './Components/SiteSetting/SiteSetting';
import ZoomSetting from './Components/ZoomLiveMeetings/ZoomSetting';
import CreateNewMeeting from './Components/ZoomLiveMeetings/CreareNewMeeting';
import ViewMeeting from './Components/ZoomLiveMeetings/ViewMeeting';
import AllMeetings from './Components/ZoomLiveMeetings/AllMeetings';
import Category from './Components/Category/Category';
import SubCategory from './Components/Category/SubCategory';
import ChildCategory from './Components/Category/ChildCategory';
import Course from './Container/Course';
import CourseInsertForm from './Container/CourseInsertForm';
import CoursesTab from './Container/CoursesTab';
import CourseInclude from './Container/CourseInclude';
import WhatLearns from './Container/WhatLearns';
import CourseChapter from './Container/CourseChapter';
import CourseClass from './Container/CourseClass';
import RelatedCourse from './Container/RelatedCourse';
import Question from './Container/Question';
import QuizTopic from './Container/QuizTopic';
import EditCourse from './Container/EditCourse';
import QuizQuestion from './Container/QuizQuestion';
import Answer from './Container/Answer';
import ReviewReport from './Container/ReviewReport';

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
    { path: '/meetingCalendar', name: 'MeetingCalendar', element:MeetingCalendar},
    { path: '/assignmentList', name: 'AssignmentList', element:AssignmentList},
    { path: '/gradeAnalytics', name: 'GradeAnalytics', element:GradeAnalytics},
    { path: '/gradeRecording', name: 'GradeRecording', element:GradeRecording},
    { path: '/feedbackInterface', name: 'FeedbackInterface', element:FeedbackInterface},
    { path: '/resourceManagement', name: 'ResourceManagement', element:ResourceManagement},
    { path: '/rManagement3', name: 'RManagement3', element:ResourceManagementAndSharing},
    { path: '/resourceOrganizer', name: 'ResourceOrganizer', element:ResourceOrganizer},
    { path: '/notificationMessage', name: 'NotificationMessage', element:NotificationMessage},
    { path: '/feedback', name: 'Feedback', element:Feedback},
    { path: '/assessment', name: 'Assessment', element:Assessment},
    { path: '/countDownTimer', name: 'CountDownTimer', element:CountDownTimer},
    { path: '/pdfViewer', name: 'PdfViewer', element:PdfViewer},
    { path: '/videoLectures', name: 'VideoLectures', element:VideoLectures},
    { path: '/pptLectures', name: 'PptLectures', element:PptLectures},
    { path: '/instructorPayout', name: 'InstructorPayout', element:InstructorPayout},
    { path: '/paymentInformation', name: 'PaymentInformation', element:PaymentInformation},
    { path: '/pendingPayout', name: 'PendingPayout', element:PendingPayout},
    { path: '/pendingPayout1', name: 'PendingPayout1', element:PendingPayout1},
    { path: '/payToInstructor', name: 'PayToInstructor', element:PayToInstructor},
    { path: '/invoice', name: 'Invoice', element:Invoice},
    { path: '/completedPayout', name: 'CompletedPayout', element:CompletedPayout},
    { path: '/bankDetails', name: 'BankDetails', element:BankDetails},
    { path: '/allMessages', name: 'AllMessages', element:AllMessages},
    { path: '/language', name: 'Language', element:Language},
    { path: '/siteSetting', name: 'SiteSetting', element:SiteSetting},
    { path: '/socialLoginSetting', name: 'SocialLoginSetting', element:SocialLoginSetting},
    { path: '/zoomSetting', name: 'ZoomSetting', element:ZoomSetting},
    { path: '/createNewMeeting', name: 'CreateNewMeeting', element:CreateNewMeeting},
    { path: '/viewMeeting', name: 'ViewMeeting', element:ViewMeeting},
    { path: '/allMeetings', name: 'AllMeetings', element:AllMeetings},
    { path: '/category', name: 'Category', element:Category},
    { path: '/subCategory', name: 'SubCategory', element:SubCategory},
    { path: '/childCategory', name: 'ChildCategory', element:ChildCategory},
    { path: '/cCourses', name: 'CCourses', element:Course},
    { path: '/courseInsertForm', name: 'CourseInsertForm', element:CourseInsertForm},
    { path: '/editCourse', name: 'EditCourse', element:EditCourse},
    { path: '/coursesTab', name: 'CoursesTab', element:CoursesTab},
    { path: '/courseInclude', name: 'CourseInclude', element:CourseInclude},
    { path: '/whatLearns', name: 'WhatLearns', element:WhatLearns},
    { path: '/courseChapter', name: 'CourseChapter', element:CourseChapter},
    { path: '/courseClass', name: 'CourseClass', element:CourseClass},
    { path: '/relatedCourse', name: 'RelatedCourse', element:RelatedCourse},
    { path: '/question', name: 'Question', element:Question},
    { path: '/quizTopic', name: 'QuizTopic', element:QuizTopic},
    { path: '/quizQuestion', name: 'QuizQuestion', element:QuizQuestion},
    { path: '/answer', name: 'Answer', element:Answer},
    { path: '/reviewReport', name: 'Answer', element:ReviewReport},

]
export default routes1