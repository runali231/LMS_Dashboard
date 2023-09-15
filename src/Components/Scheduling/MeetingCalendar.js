import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Css/MeetingCalendar.css';

const localizer = momentLocalizer(moment);

function MeetingCalendar() {
    const [events, setEvents] = useState([]); // Store scheduled meetings
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetingTitle, setMeetingTitle] = useState('');
    const [meetingDate, setMeetingDate] = useState(''); // Change to empty string
    const [meetingTime, setMeetingTime] = useState('');

    // Your Zoom API credentials
    const ZOOM_API_KEY = 'YOUR_ZOOM_API_KEY';
    const ZOOM_API_SECRET = 'YOUR_ZOOM_API_SECRET';


    const closeModal = () => {
        setIsModalOpen(false);
    };

    //   useEffect(() => {
    //     // Function to create a Zoom meeting
    //     const createZoomMeeting = async () => {
    //       const startTime = new Date(`${meetingDate}T${meetingTime}`);
    //       const endTime = moment(startTime).add(1, 'hour').toDate();

    //       try {
    //         const response = await fetch('https://api.zoom.us/v2/users/me/meetings', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${ZOOM_API_SECRET}`,
    //           },
    //           body: JSON.stringify({
    //             topic: meetingTitle,
    //             type: 2, // Scheduled meeting
    //             start_time: startTime.toISOString(),
    //             duration: 60, // Meeting duration in minutes (1 hour)
    //             timezone: 'UTC', // Timezone
    //           }),
    //         });

    //         if (response.ok) {
    //           const data = await response.json();
    //           const newMeeting = {
    //             title: meetingTitle,
    //             start: startTime,
    //             end: endTime,
    //             desc: meetingTitle,
    //             zoomMeetingId: data.id,
    //           };
    //           setEvents([...events, newMeeting]);
    //           setIsModalOpen(false); // Close the modal after scheduling
    //         } else {
    //           // Handle errors
    //           alert('Failed to create a Zoom meeting. Please try again later.');
    //         }
    //       } catch (error) {
    //         console.error('Error creating Zoom meeting:', error);
    //         alert('An error occurred while creating the Zoom meeting.');
    //       }
    //     };

    //     if (isModalOpen && meetingTitle && meetingDate && meetingTime) {
    //       createZoomMeeting();
    //     }
    //   }, [isModalOpen, meetingTitle, meetingDate, meetingTime, events]);

    const handleSelectSlot = (slotInfo) => {
        setSelectedSlot(slotInfo);
        setIsModalOpen(true); // Open the modal for scheduling
    };

    const handleCreateMeeting = () => {
        if (meetingTitle && meetingDate && meetingTime) {
            const newMeeting = {
                title: meetingTitle,
                start: new Date(`${meetingDate}T${meetingTime}`),
                end: moment(`${meetingDate}T${meetingTime}`).add(1, 'hour').toDate(), // Meeting duration is 1 hour
                desc: meetingTitle,
            };
            setEvents([...events, newMeeting]);
            setIsModalOpen(false); // Close the modal after scheduling
        } else {
            // Handle validation or show an error message
            alert('Please fill in all fields.');
        }
    };

    const CustomModal = ({ isOpen, onClose }) => {
        return (
            <div className={`modal ${isOpen ? 'open' : ''}`}>
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Schedule a New Meeting</h5>
                            <button type="button" className="close" onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="meetingTitle" className="form-label">Meeting Title:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="meetingTitle"
                                                aria-describedby="meetingTitle"
                                                value={meetingTitle}
                                                onChange={(e) => setMeetingTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meetingDate" className="form-label">Date:</label>
                                            <input type="date" className="form-control" id="meetingDate" aria-describedby="meetingDate" value={meetingDate}
                                                onChange={(e) => setMeetingDate(e.target.value)} />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meetingTime" className="form-label">Time:</label>
                                            <input type="time" className="form-control" id="meetingTime" aria-describedby="meetingTime" value={meetingTime}
                                                onChange={(e) => setMeetingTime(e.target.value)} />

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleCreateMeeting}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div style={{ height: '100vh', padding: '10px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    selectable
                    onSelectSlot={handleSelectSlot}
                />

                {isModalOpen && <CustomModal isOpen={isModalOpen} onClose={closeModal} />}
            </div>
        </>
    );
}

export default MeetingCalendar;
