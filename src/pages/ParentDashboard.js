import React from 'react';

const ParentDashboard = () => {
    return (
        <div>
            <h1>Parent Dashboard</h1>
            <section>
                <h2>Monitor Children's Homeworks</h2>
                <p>Details about homework assignments will be displayed here.</p>
            </section>
            <section>
                <h2>Grades</h2>
                <p>Information about student's grades will be shown here.</p>
            </section>
            <section>
                <h2>Absences</h2>
                <p>Record of absences will be presented here.</p>
            </section>
        </div>
    );
};

export default ParentDashboard;