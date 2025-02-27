function showContent(id) {
    const contents = document.querySelectorAll('.content, .faculty-container');
    contents.forEach(function (content) {
    content.classList.remove('active');
});

document.getElementById(id).classList.add('active');
}


const syllabusData = {
    aids: {
        sem1: [
            { code: "22MAT110", title: "Mathematics for Computing 1", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22PHY106", title: "Computational Physics", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE101", title: "Problem Solving & C Programming", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE102", title: "Elements of Computing Systems 1", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22MAT121", title: "Discrete Mathematics", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22ADM101", title: "Foundations of Indian Heritage", l: 2, t: 0, p: 0, credits: 2 },
            { code: "19ENG111", title: "Technical Communication", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AVP103", title: "Mastery Over Mind (MAOM)", l: 1, t: 0, p: 2, credits: 2 }
        ],
        sem2: [
            { code: "22MAT122", title: "Mathematics for Computing 2", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE111", title: "Object Oriented Programming in Java", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE112", title: "Data Structures & Algorithms 1", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE113", title: "Elements of Computing Systems 2", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE114", title: "Introduction to Electrical and Electronics Engineering", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE115", title: "User Interface Design", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22ADM111", title: "Glimpses of Glorious India", l: 2, t: 0, p: 0, credits: 2 }
        ],
        sem3: [
            { code: "22MAT220", title: "Mathematics for Computing 3", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE201", title: "Fundamentals of AI", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE202", title: "Operating Systems", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE203", title: "Data Structures & Algorithms 2", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE204", title: "Introduction to Computer Networks", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE205", title: "Introduction to Python", l: 1, t: 0, p: 3, credits: 2 },
            { code: "22BIO201", title: "Intelligence of Biological Systems – 1", l: 2, t: 0, p: 0, credits: 2 },
            { code: "Free Elective 1", title: "Free Elective 1", l: 2, t: 0, p: 0, credits: 2 },
            { code: "Amrita Values Program", title: "Amrita Values Program", l: 1, t: 0, p: 0, credits: 1 }
        ],
        sem4: [
            { code: "22MAT230", title: "Mathematics for Computing 4", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE211", title: "Introduction to Communication & IoT", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE212", title: "Design and Analysis of Algorithms", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE213", title: "Machine Learning", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE214", title: "Introduction to AI Robotics", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22BIO211", title: "Intelligence of Biological Systems 2", l: 2, t: 0, p: 3, credits: 3 },
            { code: "Amrita Values Program", title: "Amrita Values Program", l: 1, t: 0, p: 0, credits: 1 },
            { code: "19ENV300", title: "Environmental Science", l: "", t: "", p: "", credits: "P/F" },
            { code: "19SSK211", title: "Soft Skills I", l: 1, t: 0, p: 3, credits: 2 }
        ],
        sem5: [
            { code: "22AIE301", title: "Probabilistic Reasoning", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE302", title: "Formal language and Automata", l: 2, t: 1, p: 0, credits: 3 },
            { code: "22AIE303", title: "Database Management Systems", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE304", title: "Deep Learning", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE305", title: "Introduction to Cloud Computing", l: 2, t: 0, p: 3, credits: 3 },
            { code: " ", title: "Professional Elective 1*", l: 2, t: 0, p: 3, credits: 3 },
            { code: "19SSK301", title: "Soft Skills II", l: 1, t: 0, p: 3, credits: 2 },
            { code: "19LIV390", title: "Live-in-Labs I", l: "", t: "", p: "", credits: 3 }
        ],
        sem6: [
            { code: "22AIE311", title: "Software Engineering (Project-Based)", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE312", title: "Big Data Analytics", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE313", title: "Computer Vision & Image Processing", l: 2, t: 1, p: 3, credits: 4 },
            { code: "22AIE314", title: "Computer Security", l: 2, t: 0, p: 3, credits: 3 },
            { code: "22AIE315", title: "Natural Language Processing", l: 2, t: 0, p: 3, credits: 3 },
            { code: " ", title: "Professional Elective 2*", l: 2, t: 0, p: 3, credits: 3 },
            { code: "19SSK311", title: "Soft Skills III", l: 1, t: 0, p: 3, credits: 2 },
            { code: "19LIV490", title: "Live-in-Labs II", l: "", t: "", p: "", credits: 3 }
        ],
        sem7: [
            { code: "22AIE401", title: "Reinforcement Learning", l: 2, t: 0, p: 3, credits: 3 },
            { code: "ENGG", title: "Professional Elective 3*", l: 2, t: 0, p: 3, credits: 3 },
            { code: "ENGG", title: "Professional Elective 4*", l: 2, t: 0, p: 3, credits: 3 },
            { code: "19LAW300", title: "Indian Constitution", l: 1, t: 0, p: 0, credits: "P/F" },
            { code: "ENGG", title: "Free Elective 2**", l: 3, t: 0, p: 0, credits: 3 },
            { code: "22AIE498", title: "Project Phase 1", l: "", t: "", p: 6, credits: "" }
        ],
        sem8: [
            { code: "22AIE499", title: "Project Phase 2", l: "", t: "", p: "", credits: 10 }
        ]
    },
    cse: {
        sem1: [
            { code: "CSE101", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE102", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE103", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE104", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE105", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE106", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE107", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE108", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem2: [
            { code: "CSE201", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE202", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE203", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE204", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE205", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE206", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE207", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE208", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE208", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem3: [
            { code: "CSE301", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE302", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE303", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE304", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE305", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE306", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE307", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE308", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem4: [
            { code: "CSE401", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE402", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE403", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE404", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE405", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE406", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE407", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE408", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem5: [
            { code: "CSE501", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE502", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE503", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE504", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE505", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE506", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE507", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE508", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem6: [
            { code: "CSE601", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE602", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE603", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE604", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE605", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE606", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE607", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE608", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem7: [
            { code: "CSE701", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE702", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE703", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE704", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE705", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE706", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE707", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE708", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem8: [
            { code: "CSE801", title: "CSE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "CSE802", title: "CSE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "CSE803", title: "CSE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE804", title: "CSE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE805", title: "CSE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE806", title: "CSE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE807", title: "CSE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "CSE808", title: "CSE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ]
    },
    ece: {
        sem1: [
            { code: "ECE101", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE102", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE103", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE104", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE105", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE106", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE107", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE108", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem2: [
            { code: "ECE201", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE202", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE203", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE204", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE205", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE206", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE207", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE208", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem3: [
            { code: "ECE301", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE302", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE303", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE304", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE305", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE306", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE307", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE308", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem4: [
            { code: "ECE401", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE402", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE403", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE404", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE405", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE406", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE407", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE408", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem5: [
            { code: "ECE501", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE502", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE503", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE504", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE505", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE506", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE507", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE508", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem6: [
            { code: "ECE601", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE602", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE603", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE604", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE605", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE606", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE607", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE608", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem7: [
            { code: "ECE701", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE702", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE703", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE704", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE705", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE706", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE707", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE708", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ],
        sem8: [
            { code: "ECE801", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3 },
            { code: "ECE802", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4 },
            { code: "ECE803", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE804", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE805", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE806", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE807", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3 },
            { code: "ECE808", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3 }
        ]
    }
};


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


function loadSyllabus() {
    const course = document.getElementById("course-select").value;
    const semester = document.getElementById("semester-select").value;
    const syllabusTable = document.getElementById("syllabus-table");
    const syllabusBody = syllabusTable.querySelector("tbody");

    console.log("Selected Course:", course);
    console.log("Selected Semester:", semester);
    console.log("Available Data:", syllabusData[course] ? syllabusData[course][semester] : "No data");

    syllabusBody.innerHTML = "";

    if (course && semester && syllabusData[course] && syllabusData[course][semester]) {
        syllabusData[course][semester].forEach(subject => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${subject.code}</td>
                <td>${subject.title}</td>
                <td>${subject.l}</td>   <!-- Lecture (L) -->
                <td>${subject.t}</td>   <!-- Tutorial (T) -->
                <td>${subject.p}</td>   <!-- Practical (P) -->
                <td>${subject.credits}</td>
            `;
            syllabusBody.appendChild(row);
        });

        syllabusTable.style.display = "table";
    } else {
        syllabusTable.style.display = "none";
    }
}