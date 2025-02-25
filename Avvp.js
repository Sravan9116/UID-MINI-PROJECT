function showContent(id) {
    const contents = document.querySelectorAll('.content, .faculty-container');
    contents.forEach(function (content) {
    content.classList.remove('active');
});

document.getElementById(id).classList.add('active');
}


        const syllabusData = {
            aids: {
                sem1: "AIDS Semester 1 Syllabus",
                sem2: "AIDS Semester 2 Syllabus",
                sem3: "AIDS Semester 3 Syllabus",
                sem4: "AIDS Semester 4 Syllabus",
                sem5: "AIDS Semester 5 Syllabus",
                sem6: "AIDS Semester 6 Syllabus",
                sem7: "AIDS Semester 7 Syllabus",
                sem8: "AIDS Semester 8 Syllabus",
            },
            cse: {
                sem1: "CSE Semester 1 Syllabus",
                sem2: "CSE Semester 2 Syllabus",
                sem3: "CSE Semester 3 Syllabus",
                sem4: "CSE Semester 4 Syllabus",
                sem5: "CSE Semester 5 Syllabus",
                sem6: "CSE Semester 6 Syllabus",
                sem7: "CSE Semester 7 Syllabus",
                sem8: "CSE Semester 8 Syllabus",
            },
            ece: {
                sem1: "ECE Semester 1 Syllabus",
                sem2: "ECE Semester 2 Syllabus",
                sem3: "ECE Semester 3 Syllabus",
                sem4: "ECE Semester 4 Syllabus",
                sem5: "ECE Semester 5 Syllabus",
                sem6: "ECE Semester 6 Syllabus",
                sem7: "ECE Semester 7 Syllabus",
                sem8: "ECE Semester 8 Syllabus",
            }
        };

        function loadSemesters() {
            const course = document.getElementById("course-select").value;
            const semesterSelect = document.getElementById("semester-select");
            const syllabusContent = document.getElementById("syllabus-content");

            if (course) {
                semesterSelect.innerHTML = '<option value="">Select a semester</option>';
                for (let i = 1; i <= 8; i++) {
                    semesterSelect.innerHTML += `<option value="sem${i}">Semester ${i}</option>`;
                }
                semesterSelect.style.display = "block"; // Show semester dropdown
                syllabusContent.innerHTML = ''; // Clear previous syllabus
            } else {
                semesterSelect.style.display = "none"; // Hide semester dropdown if no course selected
                syllabusContent.innerHTML = ''; // Clear syllabus content
            }
        }

        function loadSyllabus() {
            const course = document.getElementById("course-select").value;
            const semester = document.getElementById("semester-select").value;
            const syllabusContent = document.getElementById("syllabus-content");

            if (course && semester && syllabusData[course][semester]) {
                syllabusContent.innerHTML = `
                <h3>${course.toUpperCase()} - ${semester.toUpperCase()} Syllabus</h3>
                <p>${syllabusData[course][semester]}</p>
            `;
            } else {
                syllabusContent.innerHTML = '<p>Please select a semester to view the syllabus.</p>';
            }
        }