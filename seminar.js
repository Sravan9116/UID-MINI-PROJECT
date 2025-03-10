document.addEventListener("DOMContentLoaded", function () {
    loadUpcomingSeminars();
    loadPastSeminars();
});

// Function to load upcoming seminars
function loadUpcomingSeminars() {
    let seminars = [
        { title: "AI & Machine Learning Trends", date: "March 15, 2025", speaker: "Dr. John Doe", img: "ai.jpg" },
        { title: "Quantum Computing Introduction", date: "April 2, 2025", speaker: "Dr. Jane Smith", img: "quantum.jpg" },
        { title: "Blockchain Technology", date: "April 10, 2025", speaker: "Dr. Mark Lee", img: "blockchain.jpg" }
    ];

    let seminarList = document.getElementById("seminar-list");
    seminarList.innerHTML = "";
    seminars.forEach(seminar => {
        let card = document.createElement("div");
        card.classList.add("seminar-card");
        card.innerHTML = `
            <img src="${seminar.img}" alt="${seminar.title}">
            <div class="seminar-info">
                <h3>${seminar.title}</h3>
                <p><strong>Date:</strong> ${seminar.date}</p>
                <p><strong>Speaker:</strong> ${seminar.speaker}</p>
            </div>
        `;
        seminarList.appendChild(card);
    });
}

// Function to load past seminars
function loadPastSeminars() {
    let pastSeminars = [
        { title: "Cybersecurity Awareness", date: "Jan 10, 2025", speaker: "Dr. Alan Turing", img: "cybersecurity.jpg" },
        { title: "Data Science Applications", date: "Feb 5, 2025", speaker: "Dr. Ada Lovelace", img: "data-science.jpg" }
    ];

    let pastSeminarList = document.getElementById("past-seminar-list");
    pastSeminarList.innerHTML = "";
    pastSeminars.forEach(seminar => {
        let card = document.createElement("div");
        card.classList.add("seminar-card");
        card.innerHTML = `
            <img src="${seminar.img}" alt="${seminar.title}">
            <div class="seminar-info">
                <h3>${seminar.title}</h3>
                <p><strong>Date:</strong> ${seminar.date}</p>
                <p><strong>Speaker:</strong> ${seminar.speaker}</p>
            </div>
        `;
        pastSeminarList.appendChild(card);
    });
}

// Function to show selected seminar section
function showSeminarSection(id) {
    document.getElementById("upcoming-seminars").style.display = "none";
    document.getElementById("past-seminars").style.display = "none";
    document.getElementById(id).style.display = "block";
}
