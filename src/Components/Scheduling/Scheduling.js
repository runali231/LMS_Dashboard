import React, { useState } from 'react';
// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';

function Scheduling() {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const SCOPES = ['https://www.googleapis.com/auth/calendar'];

//   function authorize() {
//     const oAuth2Client = new OAuth2Client(
//       'YOUR_CLIENT_ID',
//       'YOUR_CLIENT_SECRET',
//       'YOUR_REDIRECT_URI'
//     );
  
//     // Generate an authentication URL and redirect users to it.
//     const authUrl = oAuth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: SCOPES,
//     });
  
//     // Redirect users to the auth URL
//     window.location.href = authUrl;
//   }
//   async function handleOAuthCallback(code) {
//     const oAuth2Client = new OAuth2Client(
//         '655200562679-901caeirq3kt1a6rgc97lbota7hhlklk.apps.googleusercontent.com',
//             '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',
//             'http://localhost:3000'
//     );
  
//     const { tokens } = await oAuth2Client.getToken(code);
//     oAuth2Client.setCredentials(tokens);
  
//     // You can now use the oAuth2Client to make requests to the Google Calendar API.
//   }
//   const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

// Example: List calendar events
// async function listCalendarEvents() {
//   const events = await calendar.events.list({
//     calendarId: 'primary', // Use 'primary' for the user's primary calendar
//   });

//   console.log('Calendar Events:', events.data.items);
// }
  const openCalendar =  () => {
    // Implement logic to open the user's calendar.
    // You can use external calendar APIs for this.
    // For example, you can use Google Calendar API to fetch events.
    // Update calendarEvents with the fetched events.
    // Example:
    // fetchGoogleCalendarEvents().then((events) => setCalendarEvents(events));

        // try {
        //   // Initialize the OAuth client with your credentials
        //   const oauth2Client = new google.auth.OAuth2(
        //     '655200562679-901caeirq3kt1a6rgc97lbota7hhlklk.apps.googleusercontent.com',
        //     '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',
        //     'http://localhost:3000'
        //   );
    
        //   // Set the scope to Google Calendar
        //   const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    
        //   // Generate the authentication URL
        //   const authUrl = oauth2Client.generateAuthUrl({
        //     access_type: 'offline',
        //     scope: SCOPES,
        //   });
    
        //   // Open the authentication URL in a new tab
        //   window.open(authUrl, '_blank');
        // } catch (error) {
        //   console.error('Error opening Google Calendar:', error);
        // }
      };


  const addEvent = () => {
    if (newEvent) {
      // Create a new event object
      const event = {
        id: Date.now(),
        title: newEvent,
      };

      // Add the event to the calendarEvents array
      setCalendarEvents([...calendarEvents, event]);

      // Clear the input field
      setNewEvent('');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">CALENDAR APPLICATION</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={openCalendar}>
            Open Calendar
          </button>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add New Event"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
            />
            <button className="btn btn-success" onClick={addEvent}>
              Add Event
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          {calendarEvents.length > 0 ? (
            <div>
              <h3>Calendar Events</h3>
              <ul>
                {calendarEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No events to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scheduling;
