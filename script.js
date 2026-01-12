const work = document.getElementById("work");
const music = document.getElementById("music");
const fitness = document.getElementById("fitness")
const hardhaq = document.getElementById("hardhaq")
const enable = document.getElementById("enable")
const website = document.getElementById("website")

work.addEventListener('click', ( )=> {
    work.classList.toggle('expanded');
});

music.addEventListener('click', ( )=> {
    music.classList.toggle('expanded');
});
fitness.addEventListener('click', ( )=> {
    fitness.classList.toggle('expanded');
});
hardhaq.addEventListener('click', ( )=> {
    hardhaq.classList.toggle('expanded');
});

enable.addEventListener('click', ( )=> {
    enable.classList.toggle('expanded');
});
website.addEventListener('click', ( )=> {
    website.classList.toggle('expanded');
});