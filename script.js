// Get course name from URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course"); // html, css, js

//course page
const completeBtn = document.getElementById("completeBtn");

if (completeBtn && course) {

    // Set heading based on course
    const titleMap = {
        html: "HTML Basics",
        css: "CSS Styling",
        js: "JavaScript Basics"
    };

    document.getElementById("courseTitle").textContent = titleMap[course];

    completeBtn.addEventListener("click", () => {

        // Read progress for this course
        let progress = Number(localStorage.getItem(course + "_progress")) || 0;

        if (progress < 100) {
            progress += 20;
            if (progress > 100) progress = 100;

            localStorage.setItem(course + "_progress", progress);
            alert(titleMap[course] + " progress: " + progress + "%");
        } else {
            alert("Course already completed");
        }
    });
}

//progress page
document.addEventListener("DOMContentLoaded", () => {

    const courses = ["html", "css", "js"];

    courses.forEach(c => {
        const value = Number(localStorage.getItem(c + "_progress")) || 0;

        const bar = document.getElementById(c + "-bar");
        const text = document.getElementById(c + "-text");

        if (bar && text) {
            bar.style.width = value + "%";
            text.textContent = value + "% Completed";
        }
    });
});

//reset progress
function resetAll() {
    localStorage.removeItem("html_progress");
    localStorage.removeItem("css_progress");
    localStorage.removeItem("js_progress");
    location.reload();
}
