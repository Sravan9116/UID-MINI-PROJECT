document.addEventListener("DOMContentLoaded", function () {
    loadMeetings();
});

function loadMeetings() {
    let upcomingMeetings = [
        { topic: "New Curriculum Discussion", date: "April 10, 2025", time: "3:00 PM" },
        { topic: "Budget Allocation", date: "April 20, 2025", time: "11:00 AM" },
        { topic: "Research Paper Review", date: "April 25, 2025", time: "2:30 PM" }
    ];

    let pastMeetings = [
        { topic: "AI Ethics in Education", date: "March 5, 2025", time: "10:00 AM" },
        { topic: "Faculty Development Program", date: "March 15, 2025", time: "12:00 PM" },
        { topic: "Annual Review Meeting", date: "March 25, 2025", time: "4:00 PM" }
    ];

    let upcomingList = document.getElementById("upcoming-meetings-list");
    let pastList = document.getElementById("past-meetings-list");

    upcomingMeetings.forEach(meeting => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${meeting.topic}</strong> - ${meeting.date} at ${meeting.time}`;
        upcomingList.appendChild(li);
    });

    pastMeetings.forEach(meeting => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${meeting.topic}</strong> - ${meeting.date} at ${meeting.time}`;
        pastList.appendChild(li);
    });
}
