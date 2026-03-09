fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").textContent = data.basics.name;
    document.getElementById("label").textContent = data.basics.label;
    document.getElementById("summary").textContent = data.basics.summary;

    // skills
    const skillsList = document.getElementById("skills");
    data.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill.name + " - " + skill.keywords.join(", ");
      skillsList.appendChild(li);
    });

    // work
    const workDiv = document.getElementById("work");
    data.work.forEach((job) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${job.position} - ${job.name}</h3>
        <p>${job.startDate} - ${job.endDate}</p>
        <p>${job.summary}</p>
      `;

      workDiv.appendChild(div);
    });

    // education
    const educationDiv = document.getElementById("education");
    data.education.forEach((study) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${study.area} - ${study.institution}</h3>
        <p>${study.startDate} - ${study.endDate}</p>
        <p>${study.studyType}</p>
      `;

      educationDiv.appendChild(div);
    });
  });
