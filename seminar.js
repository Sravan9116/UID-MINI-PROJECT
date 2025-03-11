document.addEventListener("DOMContentLoaded", function () {
    loadUpcomingSeminars();
    loadPastSeminars();
});

// Function to load upcoming seminars
function loadUpcomingSeminars() {
    let seminars = [
        { title: "AI & Machine Learning Trends", date: "March 15, 2025", speaker: "Mrs.R.P.Sumithra, F.A", img: "ai.jpeg" },
        { title: "Quantum Computing Introduction", date: "April 2, 2025", speaker: "Dr.V.Thanammal Indu, A.P", img: "Quantum.jpeg" },
        { title: "Electronics and Electricals", date: "April 10, 2025", speaker: "Dr.Shyni P Nair,Assisant Professor", img: "block.jpg" },
        { title: "Cybersecurity Awareness", date: "April 20, 2025", speaker: "Mrs.K.Rejini, F.P", img: "cybersecurity.jpg" },
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
        { title: "Cybersecurity Awareness", date: "Jan 10, 2025", speaker: "Mrs.R.P.Sumithra, F.A", img: "cybersecurity.jpg" },
        { title: "Data Science Applications", date: "Feb 5, 2025", speaker: "Dr.V.Thanammal Indu, A.P", img: "data.jpg" }
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
