function showContent(id) {
    // Hide the welcome section and all other sections
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById("seminar-hall").style.display = "none";
    document.getElementById("committee-meetings").style.display = "none";
    document.getElementById("Club-Activity").style.display = "none"; // Hide Club Activities section

    // Select and hide all relevant content sections
    const sections = document.querySelectorAll('.content, .faculty-container, .seminarcontent, .facultycontent, .clubcontent');
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    // Show the selected section
    let selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.style.display = "grid";
    }

    // Handle Footer Visibility
    const footer = document.querySelector("footer");
    if (id === "welcome-section") {
        footer.style.display = "block";  // Restore footer when going back to welcome section
        setTimeout(() => {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }, 100);
    } else {
        footer.style.opacity = "0"; // Fade out
        footer.style.transform = "translateY(100px)"; // Move it down
        setTimeout(() => {
            footer.style.display = "none"; // Hide completely after animation
        }, 500);
    }
}


// Function to load semesters dynamically
function loadSemesters() {
    const course = document.getElementById("course-select").value;
    const semesterSelect = document.getElementById("semester-select");

    semesterSelect.innerHTML = '<option value="">Select a Semester</option>';

    if (course && syllabusData[course]) {
        const semesters = Object.keys(syllabusData[course]); // Get available semesters dynamically

        semesters.forEach(sem => {
            semesterSelect.innerHTML += `<option value="${sem}">${sem.replace("sem", "Semester ")}</option>`;
        });

        semesterSelect.style.display = "block";
    } else {
        semesterSelect.style.display = "none";
    }
}

// Function to load syllabus dynamically
function loadSyllabus() {
    const course = document.getElementById("course-select").value;
    const semester = document.getElementById("semester-select").value;
    const syllabusTable = document.getElementById("syllabus-table");
    const syllabusBody = syllabusTable.querySelector("tbody");

    syllabusBody.innerHTML = "";

    if (course && semester && syllabusData[course] && syllabusData[course][semester]) {
        syllabusData[course][semester].forEach(subject => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${subject.code}</td> <!-- Code -->
                <td>${subject.title}</td> <!-- Title -->
                <td>${subject.l}</td>   <!-- Lecture (L) -->
                <td>${subject.t}</td>   <!-- Tutorial (T) -->
                <td>${subject.p}</td>   <!-- Practical (P) -->
                <td>${subject.credits}</td> <!-- Credits -->
                <td>${subject.Evaluation}</td> <!-- Evaluation -->
            `;
            syllabusBody.appendChild(row);
        });

        syllabusTable.style.display = "table";
    } else {
        syllabusTable.style.display = "none";
    }
}

// Load Seminar Data
function loadSeminarData() {
    let seminars = [
        { title: "AI & Machine Learning Trends", date: "March 15, 2025", speaker: "Mrs.R.P.Sumithra, F.A" },
        { title: "Quantum Computing Introduction", date: "April 2, 2025", speaker: "Dr.V.Thanammal Indu, A.P" },
        { title: "Electronic's and Enggineering", date: "April 10, 2025", speaker: "Dr. Shyni P Nair, A.P" }
    ];

    let seminarList = document.getElementById("seminar-list");
    seminarList.innerHTML = ""; // Clear existing data

    seminars.forEach(seminar => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${seminar.title}</strong> - ${seminar.date} (Speaker: ${seminar.speaker})`;
        seminarList.appendChild(li);
    });
}

// Load Meeting Data
function loadMeetingData() {
    let meetings = [
        { topic: "Academic Review", date: "March 20, 2025", time: "10:00 AM" },
        { topic: "Research Proposals", date: "March 25, 2025", time: "2:00 PM" },
        { topic: "Budget Planning", date: "March 30, 2025", time: "11:30 AM" }
    ];

    let meetingList = document.getElementById("meetings-list");
    meetingList.innerHTML = ""; // Clear existing data

    meetings.forEach(meeting => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${meeting.topic}</strong> - ${meeting.date} at ${meeting.time}`;
        meetingList.appendChild(li);
    });
}

// Load seminar and meeting data when the page loads
document.addEventListener("DOMContentLoaded", function () {
    loadSeminarData();
    loadMeetingData();
});



const syllabusData = {
    aids: {
        sem1: [
            { code: "22MAT110", title: "Mathematics for Computing 1", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22PHY106", title: "Computational Physics", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE101", title: "Problem Solving & C Programming", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE102", title: "Elements of Computing Systems 1", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22MAT121", title: "Discrete Mathematics", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22ADM101", title: "Foundations of Indian Heritage", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " },
            { code: "19ENG111", title: "Technical Communication", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AVP103", title: "Mastery Over Mind (MAOM)", l: 1, t: 0, p: 2, credits: 2, Evaluation: " " }

        ],
        sem2: [
            { code: "22MAT122", title: "Mathematics for Computing 2", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE111", title: "Object Oriented Programming in Java", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE112", title: "Data Structures & Algorithms 1", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE113", title: "Elements of Computing Systems 2", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE114", title: "Introduction to Electrical and Electronics Engineering", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE115", title: "User Interface Design", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22ADM111", title: "Glimpses of Glorious India", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " }
        ],
        sem3: [
            { code: "22MAT220", title: "Mathematics for Computing 3", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE201", title: "Fundamentals of AI", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE202", title: "Operating Systems", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE203", title: "Data Structures & Algorithms 2", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE204", title: "Introduction to Computer Networks", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE205", title: "Introduction to Python", l: 1, t: 0, p: 3, credits: 2, Evaluation: " " },
            { code: "22BIO201", title: "Intelligence of Biological Systems – 1", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " },
            { code: "Free Elective 1", title: "Free Elective 1", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " },
            { code: "Amrita Values Program", title: "Amrita Values Program", l: 1, t: 0, p: 0, credits: 1, Evaluation: " " }
        ],
        sem4: [
            { code: "22MAT230", title: "Mathematics for Computing 4", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE211", title: "Introduction to Communication & IoT", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE212", title: "Design and Analysis of Algorithms", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE213", title: "Machine Learning", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE214", title: "Introduction to AI Robotics", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22BIO211", title: "Intelligence of Biological Systems 2", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "Amrita Values Program", title: "Amrita Values Program", l: 1, t: 0, p: 0, credits: 1, Evaluation: " " },
            { code: "19ENV300", title: "Environmental Science", l: "", t: "", p: "", credits: "P/F", Evaluation: " " },
        ],
        sem5: [
            { code: "22AIE301", title: "Probabilistic Reasoning", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE302", title: "Formal language and Automata", l: 2, t: 1, p: 0, credits: 3, Evaluation: " " },
            { code: "22AIE303", title: "Database Management Systems", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE304", title: "Deep Learning", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE305", title: "Introduction to Cloud Computing", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: " ", title: "Professional Elective 1*", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "19SSK301", title: "Soft Skills II", l: 1, t: 0, p: 3, credits: 2, Evaluation: " " },
            { code: "19LIV390", title: "Live-in-Labs I", l: "", t: "", p: "", credits: 3, Evaluation: " " }
        ],
        sem6: [
            { code: "22AIE311", title: "Software Engineering (Project-Based)", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE312", title: "Big Data Analytics", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE313", title: "Computer Vision & Image Processing", l: 2, t: 1, p: 3, credits: 4, Evaluation: " " },
            { code: "22AIE314", title: "Computer Security", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22AIE315", title: "Natural Language Processing", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: " ", title: "Professional Elective 2*", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "19SSK311", title: "Soft Skills III", l: 1, t: 0, p: 3, credits: 2, Evaluation: " " },
            { code: "19LIV490", title: "Live-in-Labs II", l: "", t: "", p: "", credits: 3, Evaluation: " " }
        ],
        sem7: [
            { code: "22AIE401", title: "Reinforcement Learning", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "ENGG", title: "Professional Elective 3*", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "ENGG", title: "Professional Elective 4*", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "19LAW300", title: "Indian Constitution", l: 1, t: 0, p: 0, credits: "P/F", Evaluation: " " },
            { code: "ENGG", title: "Free Elective 2**", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "22AIE498", title: "Project Phase 1", l: "", t: "", p: 6, credits: "", Evaluation: " " }
        ],
        sem8: [
            { code: "22AIE499", title: "Project Phase 2", l: "", t: "", p: "", credits: 10, Evaluation: " " }       
        ]
    },
    cse: {
        sem1: [
            { code: "23ENG101", title: "Technical Communication", l: 2, t: 0, p: 3, credits: 3, Evaluation: "70:30" },
            { code: "23MAT107", title: "Calculus", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE101", title: "Computational Problem Solving", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23EEE104", title: "Introduction to Electrical and Electronics Engineering", l: 3, t: 0, p: 0, credits: 3, Evaluation: "50:50" },
            { code: "23EEE184", title: "Basic Electrical and Electronics Engineering Practice", l: 0, t: 0, p: 2, credits: 1, Evaluation: "80:20" },
            { code: "23CSE102", title: "Computer Hardware Essentials", l: 1, t: 0, p: 2, credits: 2, Evaluation: "70:30" },
            { code: "22ADM101", title: "Foundations of Indian Heritage", l: 2, t: 0, p: 1, credits: 2, Evaluation: "50:50" },
            { code: "22AVP103", title: "Mastery Over Mind", l: 1, t: 0, p: 2, credits: 2, Evaluation: "80:20" }
        ],
        sem2: [
            { code: "23MAT116", title: "Discrete Mathematics", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23MAT117", title: "Linear Algebra", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE111", title: "Object Oriented Programming", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23PHY115", title: "Modern Physics", l: 2, t: 1, p: 0, credits: 3, Evaluation: "50:50" },
            { code: "23CSE113", title: "User Interface Design", l: 2, t: 0, p: 2, credits: 3, Evaluation: "70:30" },
            { code: "23MEE115", title: "Manufacturing Practice", l: 0, t: 0, p: 3, credits: 1, Evaluation: "80:20" },
            { code: "22ADM111", title: "Glimpses of Glorious India", l: 2, t: 0, p: 1, credits: 2, Evaluation: "50:50" }
        ],
        sem3: [
            { code: "23MAT206", title: "Optimization Techniques", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE201", title: "Procedural Programming using C", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE202", title: "Database Management Systems", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE203", title: "Data Structures and Algorithms", l: 3, t: 1, p: 2, credits: 5, Evaluation: "70:30" },
            { code: "23CSE205", title: "Digital Electronics", l: 3, t: 0, p: 0, credits: 3, Evaluation: "60:40" },
            { code: "23CSE285", title: "Digital Electronics Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: "80:20" },
            { code: "23LSE201", title: "Life Skills for Engineers I", l: 1, t: 0, p: 2, credits: "P/F", Evaluation: "50:50" }
        ],
        sem4: [
            { code: "23MAT216", title: "Probability and Random Processes", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE211", title: "Design and Analysis of Algorithms", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE212", title: "Principles of Functional Languages", l: 2, t: 0, p: 2, credits: 3, Evaluation: "70:30" },
            { code: "23CSE213", title: "Computer Organization and Architecture", l: 3, t: 1, p: 0, credits: 4, Evaluation: "50:50" },
            { code: "23CSE214", title: "Operating Systems", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "Amrita Value Programme II", title: "Amrita Value Programme II", l: 1, t: 0, p: 0, credits: 1,Evaluation: " " },
            { code: "Free Elective I**", title: "Free Elective I**", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " },
            { code: "23LSE211", title: "Life Skills for Engineers II", l: 1, t: 0, p: 2, credits: 2, Evaluation: "50:50" }
        ],
        sem5: [
            { code: "23CSE301", title: "Machine Learning", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "", title: "Professional Elective I", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "23CSE302", title: "Computer Networks", l: 3, t: 1, p: 2, credits: 5, Evaluation: "70:30" },
            { code: "23CSE303", title: "Theory of Computation", l: 3, t: 1, p: 0, credits: 4, Evaluation: "50:50" },
            { code: "23CSE304", title: "Embedded Systems", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "", title: "Professional Elective II", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "23LSE301", title: "Life Skills for Engineers III", l: 1, t: 0, p: 2, credits: 2, Evaluation: "50:50" },
            { code: "23LIV390", title: "Live-in –Labs I***", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ENV300", title: "Environmental Science", l: 0, t: 0, p: 0, credits: 0, Evaluation: "P/F" } 
        ],

        sem6: [
            { code: "23CSE311", title: "Software Engineering", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE312", title: "Distributed Systems", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE313", title: "Foundations of Cyber Security", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "", title: "Professional Elective III", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "23CSE314", title: "Compiler Design", l: 3, t: 0, p: 2, credits: 4, Evaluation: "70:30" },
            { code: "23CSE399", title: "Project Phase-I", l: 0, t: 0, p: 6, credits: 3, Evaluation: "70:30" },
            { code: "23LSE311", title: "Life Skills for Engineers IV", l: 1, t: 0, p: 2, credits: 2, Evaluation: "50:50" },
            { code: "23LIV490", title: "Live-in –Labs II***", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " }
        ],
        sem7: [
            { code: "", title: "Professional Elective IV", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "", title: "Professional Elective V", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "", title: "Professional Elective VI", l: 3, t: 0, p: 0, credits: 3, Evaluation: "70:30" },
            { code: "", title: "Free Elective II**", l: 2, t: 0, p: 0, credits: 2, Evaluation: "" },
            { code: "23CSE401", title: "Fundamentals of Artificial Intelligence", l: 2, t: 0, p: 2, credits: 3, Evaluation: "70:30" },
            { code: "23CSE498", title: "Project – Phase II", l: 0, t: 0, p: 12, credits: 6, Evaluation: "70:30" },
            { code: "23LAW300", title: "Indian Constitution", l: 0, t: 0, p: 0, credits: 0, Evaluation: "P/F" }
        ],
        sem8: [
            { code: "23CSE499", title: "Project – Phase III", l: 0, t: 0, p: 12, credits: 6, Evaluation: "70:30" }
        ]
    },
    ece: {
        sem1: [
            { code: "23ECE101", title: "Nature Inspired Engineering", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23MAT124", title: "Engineering Mathematics I", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23ECE102", title: "Problem Solving and Algorithmic Thinking", l: 1, t: 0, p: 3, credits: 2, Evaluation: " " },
            { code: "23ECE103", title: "Fundamentals of Electrical Engineering", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE104", title: "Physics of Semiconductors", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE105", title: "Computer Programming", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE181", title: "Electrical Engineering Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE182", title: "Computer Programming Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "22ADM101", title: "Foundations of Indian Heritage", l: 2, t: 0, p: 1, credits: 2, Evaluation: " " },
            { code: "22AVP103", title: "Mastery Over Mind (MAOM)", l: 1, t: 0, p: 2, credits: 2, Evaluation: " " }
        ],
        sem2: [
            { code: "23MAT130", title: "Engineering Mathematics II", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23ECE111", title: "Electronic Devices and Circuits", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE112", title: "Signal Processing I", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23MAT132", title: "Transforms", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE113", title: "Signals and Systems", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE114", title: "Network Analysis", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23MAT127", title: "Laplace Transforms", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE115", title: "Circuit Analysis", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE183", title: "Signal Processing-I Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE184", title: "Introduction to Internet of Things", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE185", title: "Electronic Devices & Circuits Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ENG101", title: "Technical Communication", l: 2, t: 0, p: 3, credits: 3, Evaluation: " " },
            { code: "22ADM111", title: "Glimpses of Glorious India", l: 2, t: 0, p: 1, credits: 2, Evaluation: " " }
            ],
        sem3: [
            { code: "23ECE201", title: "Digital Electronics", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE202", title: "Analog Electronics I", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE203", title: "Signal Processing II", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE204", title: "Electromagnetic Theory and Waves", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23ECE205", title: "Foundations of Data Science", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23MAT223", title: "Probability and Statistics", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE206", title: "Data Processing", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE281", title: "Digital Electronics Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE282", title: "Analog Electronics Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE283", title: "Digital Signal Processing Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "AVP1", title: "Amrita Value Programme-1", l: 1, t: 0, p: 0, credits: 1, Evaluation: " " },
            { code: "23CHY109", title: "Engineering Chemistry B", l: 2, t: 1, p: 0, credits: 3, Evaluation: " " },
            { code: "23ENV300", title: "Environmental Science", l: 0, t: 0, p: 0, credits: "P/F", Evaluation: " " },
            { code: "23LSE201", title: "Life Skills for Engineers I", l: 1, t: 0, p: 2, credits: "P/F", Evaluation: " " }
        ],
        sem4: [
            { code: "23ECE211", title: "Microcontrollers & Interfacing", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE212", title: "Analog Electronics II", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE213", title: "Communication Theory", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23MAT227", title: "Random Variables and Processes", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE214", title: "Analog Communication", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE215", title: "Control Systems", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "23ECE216", title: "Machine Learning", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23MAT218", title: "Optimization Techniques", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE217", title: "Machine Learning Models", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE284", title: "Microcontrollers & Interfacing Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE285", title: "Machine Learning Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE286", title: "Circuits and Communication Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23LSE211", title: "Life Skills for Engineers II", l: 1, t: 0, p: 2, credits: 2, Evaluation: " " },
            { code: "AVP2", title: "Amrita Value Program 2", l: 1, t: 0, p: 0, credits: 1, Evaluation: " " },
            { code: "23LAW300", title: "Indian Constitution", l: 0, t: 0, p: 0, credits: "P/F", Evaluation: " " }
        ],
        sem5: [
            { code: "23ECE301", title: "Computer Systems and Architecture", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE302", title: "VLSI Design", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE303", title: "Radio Frequency and Microwave Engineering", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE304", title: "Digital Communication", l: 3, t: 1, p: 0, credits: 4, Evaluation: " " },
            { code: "PE1", title: "Professional Elective I", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE381", title: "Open Laboratory I", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE382", title: "Radio Frequency and Microwave Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE383", title: "VLSI Design Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE384", title: "Communication Systems Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23LSE301", title: "Life Skills for Engineers III", l: 1, t: 0, p: 2, credits: 2, Evaluation: " " },
            { code: "23LIV390", title: "Live-in – Lab I", l: 0, t: 0, p: 0, credits: 3, Evaluation: " " }
        ],
        sem6: [
            { code: "23ECE311", title: "Wireless Communication & Networks", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE312", title: "Computer Networks and Protocols", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE313", title: "Embedded Systems", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "PE2", title: "Professional Elective II", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "PE3", title: "Professional Elective III", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE385", title: "Open Laboratory II", l: 0, t: 0, p: 6, credits: 2, Evaluation: " " },
            { code: "23ECE386", title: "Wireless Communication and Networks Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23ECE387", title: "Embedded Systems Laboratory", l: 0, t: 0, p: 3, credits: 1, Evaluation: " " },
            { code: "23LSE311", title: "Life Skills for Engineers IV", l: 1, t: 0, p: 2, credits: 2, Evaluation: " " },
            { code: "23LIV490", title: "Live-in – Lab II", l: 0, t: 0, p: 0, credits: 3, Evaluation: " " }
        ],
        sem7: [
            { code: "PE4", title: "Professional Elective IV", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "PE5", title: "Professional Elective V", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "PE6", title: "Professional Elective VI", l: 3, t: 0, p: 0, credits: 3, Evaluation: " " },
            { code: "23ECE498", title: "Project Phase I", l: 0, t: 0, p: 24, credits: 8, Evaluation: " " },
            { code: "FE", title: "Free Elective", l: 2, t: 0, p: 0, credits: 2, Evaluation: " " },
            { code: "23ECE497", title: "Technical Writing", l: 0, t: 0, p: 0, credits: "P/F", Evaluation: " " }
        ],
    sem8: [
            { code: "23ECE499", title: "Project Phase II", l: 0, t: 0, p: 18, credits: 6, Evaluation: " " }
        ]

    }
};