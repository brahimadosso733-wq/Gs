import React from 'react';

const StudentDashboard = () => {
    // Sample data - in a real application, this would come from a server
    const homeworkAssignments = [
        { subject: 'Math', assignment: 'Calculate integrals', dueDate: '2026-03-30' },
        { subject: 'History', assignment: 'Write an essay on WWII', dueDate: '2026-04-01' }
    ];

    const grades = [
        { subject: 'Math', grade: 'A' },
        { subject: 'History', grade: 'B+' },
        { subject: 'Science', grade: 'A-' }
    ];

    const calendarEvents = [
        { title: 'Math Exam', date: '2026-04-15' },
        { title: 'History Project Due', date: '2026-04-01' } 
    ];

    return (
        <div>
            <h1>Student Dashboard</h1>
            <h2>Homework Assignments</h2>
            <ul>
                {homeworkAssignments.map((assignment, index) => (
                    <li key={index}>{assignment.subject}: {assignment.assignment} (Due: {assignment.dueDate})</li>
                ))}
            </ul>
            <h2>Grades</h2>
            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>{grade.subject}: {grade.grade}</li>
                ))}
            </ul>
            <h2>Calendar Events</h2>
            <ul>
                {calendarEvents.map((event, index) => (
                    <li key={index}>{event.title} on {event.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;