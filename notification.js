const unreadMessages = document.querySelectorAll(".unread");
const number = document.querySelector(".notification-number");
const markAll = document.querySelector(".markAll");

// background change
const darkSwitch = document.querySelector(".dark-mode");

// Changing the background color of body
darkSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle("active");
    darkSwitch.style.backgroundColor = "aliceblue";
});



// Main container
unreadMessages.forEach((unreadMessage) => {
    unreadMessage.addEventListener("click", ()=> {
        unreadMessage.classList.remove("unread");
		let newNumber = document.querySelectorAll(".unread").length;
		
		number.textContent = newNumber;
	});
});

markAll.addEventListener('click', ()=> {
	unreadMessages.forEach((message) => {
		message.classList.remove("unread");
	})
	let newNumber = document.querySelectorAll(".unread").length;
	
	number.textContent = newNumber;
}) 