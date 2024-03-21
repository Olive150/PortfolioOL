
console.log('hello there');
const textContent = {
    en: {
        aboutMe: "About Me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        aboutMeContent: "Hello there, my name is Olivier. I am an apprentice web developer following the Codecademy full-stack career path. I focus on web development languages such as JavaScript, CSS, and HTML. I have only done a few projects so far, but these projects are amazing."
        // Other text content...
    },
    fr: {
        aboutMe: "À propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
        aboutMeContent: "Bonjour, je m'appelle Olivier. Je suis un apprenti développeur web suivant le parcours complet du Codecademy. Je me concentre sur les langages de développement web tels que JavaScript, CSS et HTML. J'ai seulement réalisé quelques projets jusqu'à présent, mais ils sont merveilleux."
        // Other text content...s
    },
    it: {
        aboutMe: "Su di me",
        projects: "Progetti",
        skills: "Competenze",
        contact: "Contatto",
        aboutMeContent: "Ciao, mi chiamo Olivier. Sono un apprendista sviluppatore web che segue il percorso completo del Codecademy. Mi concentro sui linguaggi di sviluppo web come JavaScript, CSS e HTML. Finora ho realizzato solo alcuni progetti, ma questi progetti sono magnifici."
    }
    
        // Other text content...
    }
    

function switchLanguage(lang){
    
        let elements = document.querySelectorAll('.aboutMeSwitch')
        elements.forEach(element => {
            element.textContent = textContent[lang]['aboutMe'];});
       
        elements = document.querySelectorAll('.projectsSwitch');
        elements.forEach(element => {
            element.textContent = textContent[lang]['projects'];});

        elements = document.querySelectorAll('.skillsSwitch');
        elements.forEach(element => {
            element.textContent = textContent[lang]['skills'];});

        elements = document.querySelectorAll('.contactSwitch');
        elements.forEach(element => {
            element.textContent = textContent[lang]['contact'];});

        let texte = document.getElementById('bigP');
        if (texte) {
            texte.textContent = textContent[lang]['aboutMeContent'];
        }
}

const flags = document.querySelectorAll('.flags');
console.log(flags);
flags.forEach(flag =>{
    flag.addEventListener('click', function(){
        const lang = flag.getAttribute('title');
        console.log(lang);
        switchLanguage(lang);
    });
})

        


