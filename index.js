import {
    bio,
    skills,
    projects,
    education,
    experience,
    footer,
} from "./data.js";

/**
 * Populates bio to the HTML page.
 */
function populateBio(items, id) {
    const bioTag = document.getElementById(id);
    items.forEach((item) => {
        const p = document.createElement('p');
        p.textContent = item;
        bioTag.appendChild(p);
    });
}

/**
 * Populates skills to the HTML page.
 */
function populateSkills(items, id) {
    const skillsTag = document.getElementById(id);
    items.forEach((skill) => {
        const skillElement = document.createElement('div');
        skillElement.textContent = `${skill.name}: ${skill.level}`;
        skillsTag.appendChild(skillElement);
    });
}

/**
 * Populates projects to the HTML page.
 */
function populateProjects(items, id) {
    const projectsContainer = document.getElementById(id);
    items.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.textContent = project.name;
        projectsContainer.appendChild(projectElement);
    });
}

/**
 * Populates education and experience timeline to the HTML page.
 */
function populateTimeline(items, id) {
    const timeline = document.getElementById(id);
    items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.year} - ${item.title}`;
        timeline.appendChild(itemElement);
    });
}

/**
 * Populates footer to the HTML page.
 */
function populateFooter(items, id) {
    const footerElement = document.getElementById(id);
    items.forEach((item) => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        footerElement.appendChild(link);
    });
}

// Populate the content on page load
populateBio(bio, "bio");
populateSkills(skills, "skills");

populateProjects(projects.webProjects, "web-projects");
populateProjects(projects.softwareProjects, "software-projects");
populateProjects(projects.androidProjects, "android-projects");
populateProjects(projects.freelanceProjects, "freelance-projects");

populateTimeline(experience, "experience");
populateTimeline(education, "education");

populateFooter(footer, "footer");
