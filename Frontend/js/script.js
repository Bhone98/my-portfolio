document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code to fetch and display projects
    fetch('http://localhost:8080/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.url}">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        });
});
