@@ -0,0 +1,55 @@
const projects = [
  
  {
    title: "Responsive Landing Page",
    description: "Built a porttfolio, fully responsive landing page built with HTML, CSS, and JavaScript. ",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gsreenivasa-reddy/Responsive-landing-page-using-web-development.git"
  },
  {
    title: "Tic Tac Toe Web Application",
    description: "Tic Tac Toe game with both 2-player and AI (Minimax) modes for smart gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gsreenivasa-reddy/TIC-TAC-TOE-Web-application.git"
  },
  {
    title: "Stopwatch Web Application",
    description: "A digital stopwatch with start, pause, lap and reset functions, built using JavaScript DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gsreenivasa-reddy/Stopwatch-Web-Application.git"
  }

];

const container = document.querySelector('.projects-container');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
    <a href="${project.link}" target="_blank">Live Demo</a> |
    <a href="${project.github}" target="_blank">GitHub</a>
  `;
  container.appendChild(div);
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! Your message has been "sent" (mock only).');
  this.reset();
});