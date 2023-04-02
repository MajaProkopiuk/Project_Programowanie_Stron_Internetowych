// Adds date in the footer
const currentDate = new Date().getFullYear();
document.getElementById('current-date').textContent = currentDate;

// Builds skills section from json file
fetch('/resources/skills.json')
    .then(response => response.json())
    .then(data => {
        const sortedSkills = Object.keys(data).sort((a, b) => data[b] - data[a]);
        sortedSkills.forEach(skill => {
            const skillName = skill;
            const skillLevel = data[skill];

            const row = document.createElement("div");
            row.classList.add("row", "mb-2");

            const col1 = document.createElement("div");
            col1.classList.add("col-4", "text-end");
            col1.textContent = skillName + ":";

            const col2 = document.createElement("div");
            col2.classList.add("col-8");

            const progressBar = document.createElement("div");
            progressBar.classList.add("progress", "w-75");

            const progressBarInner = document.createElement("div");
            progressBarInner.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated", "progress-skills-color");
            progressBarInner.style.width = skillLevel + "%";
            progressBarInner.style.backgroundColor = "#ffd1dc";
            progressBarInner.setAttribute("role", "progressbar");
            progressBarInner.setAttribute("aria-valuenow", skillLevel);
            progressBarInner.setAttribute("aria-valuemin", "0");
            progressBarInner.setAttribute("aria-valuemax", "100");

            progressBar.appendChild(progressBarInner);
            col2.appendChild(progressBar);

            row.appendChild(col1);
            row.appendChild(col2);

            document.querySelector("#skills-container").appendChild(row);
        });
    })
    .catch(error => console.error(error));
