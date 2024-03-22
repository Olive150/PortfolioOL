const projectLink = document.querySelectorAll('.projectLink');
const imgPaths = ['./resources/Screenshot 2024-03-21 at 6.30.50 PM.png']

const imgContainer = document.createElement('div');
imgContainer.classList.add('project-image');
document.querySelector('#projects').appendChild(imgContainer);

projectLink.forEach(function (link, index){
	link.addEventListener('mouseenter', function(){
		const imgProject = document.createElement('img');
		imgProject.classList.add('project-image');
		imgProject.src = imgPaths[index];
		imgContainer.innerHTML = '';
		imgContainer.appendChild(imgProject);
		
	})
	link.addEventListener('mouseleave', function(){
		imgContainer.innerHTML = '';
	})
})
	
