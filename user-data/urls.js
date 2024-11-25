const githubUsername = "haratimo";  // Your GitHub username
const xUsername = "parastoohm";     // Your X.com (formerly Twitter) username
const linkedinUsername = "parastoo-harati"; // Your LinkedIn username (usually your slug URL)

const createGitHubURL = (username) => `https://github.com/${username}`;
const createXURL = (username) => `https://x.com/${username}`;
const createLinkedInURL = (username) => `https://linkedin.com/in/${username}`;

export const URLs = {
    github: createGitHubURL(githubUsername),
    x: createXURL(xUsername),
    linkedin: createLinkedInURL(linkedinUsername)
};
