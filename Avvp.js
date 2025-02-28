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
            { code: "Amrita Value Programme II", title: "Amrita Value Programme II", l: 1, t: 0, p: 0, credits: 1 },
            { code: "Free Elective I**", title: "Free Elective I**", l: 2, t: 0, p: 0, credits: 2 },
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
            { code: "23LIV390", title: "Live-in –Labs I***", l: 3, t: 0, p: 0, credits: 3, Evaluation: "" },
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
            { code: "23LIV490", title: "Live-in –Labs II***", l: 3, t: 0, p: 0, credits: 3, Evaluation: "" }
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
            { code: "ECE101", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE102", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE103", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE104", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE105", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE106", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE107", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE108", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem2: [
            { code: "ECE201", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE202", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE203", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE204", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE205", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE206", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE207", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE208", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem3: [
            { code: "ECE301", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE302", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE303", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE304", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE305", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE306", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE307", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE308", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem4: [
            { code: "ECE401", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE402", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE403", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE404", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE405", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE406", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE407", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE408", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem5: [
            { code: "ECE501", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE502", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE503", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE504", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE505", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE506", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE507", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE508", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem6: [
            { code: "ECE601", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE602", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE603", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE604", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE605", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE606", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE607", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE608", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem7: [
            { code: "ECE701", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE702", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE703", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE704", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE705", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE706", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE707", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE708", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
        ],
        sem8: [
            { code: "ECE801", title: "ECE Subject 1", l: 1, t: 2, p: 1, credits: 3,Evaluation: " " },
            { code: "ECE802", title: "ECE Subject 2", l: 2, t: 1, p: 2, credits: 4,Evaluation: " " },
            { code: "ECE803", title: "ECE Subject 3", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE804", title: "ECE Subject 4", l: 3, t: 0, p: 0, credits: 3,Evaluation: " "},
            { code: "ECE805", title: "ECE Subject 5", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE806", title: "ECE Subject 6", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE807", title: "ECE Subject 7", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " },
            { code: "ECE808", title: "ECE Subject 8", l: 3, t: 0, p: 0, credits: 3,Evaluation: " " }
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
                <td>${subject.Evaluation}</td>
            `;
            syllabusBody.appendChild(row);
        });

        syllabusTable.style.display = "table";
    } else {
        syllabusTable.style.display = "none";
    }
}