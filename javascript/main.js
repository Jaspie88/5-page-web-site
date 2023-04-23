
$(document).ready(function () {
	// HEADER FOOTER INIT
	$("header").load("/html/components/header.html", function () {
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("active");
			navMenu.classList.toggle("active");
		});

		document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
		}));
	});

	$("footer").load("/html/components/footer.html");

	// Get the current page's URL
	const currentPageURL = window.location.href;
	// Check if the current page's URL contains 'bookings.html'; this avoides console errors on other pages.
	if (currentPageURL.includes('bookings.html')) {
		// FORM CHOICES SCRIPT
		// Classes for each location
		const classOptions = {
			Ashgrove: [
				{ label: 'Body Attack', value: 'body-attack' },
				{ label: 'Zumba', value: 'zumba' },
				{ label: 'Body Pump', value: 'body-pump' },
				{ label: 'Body Balance', value: 'body-balance' },
				{ label: 'Body Combat', value: 'body-combat' },
				{ label: 'Body Jam', value: 'body-jam' },
				{ label: 'Body Vive', value: 'body-vive' },
				{ label: 'Cycle', value: 'cycle' },
				{ label: 'Pilates', value: 'pilates' },
				{ label: 'Yoga', value: 'yoga' },
				{ label: 'Aqua Fit & Aqua Mode', value: 'aqua' },
				{ label: 'Boxing & TAE Box', value: 'boxing' },
				{ label: 'Step Moves, Step Basic & Step Burner', value: 'step' },
				{ label: 'Rejuvenate, Low Impact & Gentle Fitness', value: 'gentle' },
				{ label: 'Body Balance', value: 'body-balance' },
				{ label: 'Body Combat', value: 'body-combat' }
			],
			BrisbaneCity: [
				{ label: 'RPM', value: 'rpm' },
				{ label: 'Body Pump', value: 'body-pump' },
				{ label: 'Body Balance', value: 'body-balance' },
				{ label: 'Body Combat', value: 'body-combat' },
				{ label: 'Body Jam', value: 'body-jam' },
				{ label: 'Body Vive', value: 'body-vive' },
				{ label: 'Cycle', value: 'cycle' },
				{ label: 'Pilates', value: 'pilates' },
				{ label: 'Yoga', value: 'yoga' },
				{ label: 'Aqua Fit & Aqua Mode', value: 'aqua' },
				{ label: 'Boxing & TAE Box', value: 'boxing' },
				{ label: 'Step Moves, Step Basic & Step Burner', value: 'step' },
				{ label: 'Rejuvenate, Low Impact & Gentle Fitness', value: 'gentle' },
				{ label: 'Body Balance', value: 'body-balance' },
				{ label: 'Body Combat', value: 'body-combat' }
			],
			Chermside: [
				{ label: 'Body Jam', value: 'body-jam' },
				{ label: 'Yoga', value: 'yoga' },
				{ label: 'Body Vive', value: 'body-vive' },
				{ label: 'Cycle', value: 'cycle' },
				{ label: 'Boxing & TAE Box', value: 'boxing' },
				{ label: 'Step Moves, Step Basic & Step Burner', value: 'step' },
				{ label: 'Rejuvenate, Low Impact & Gentle Fitness', value: 'gentle' }
			],
			Graceville: [
				{ label: 'Pilates', value: 'pilates' },
				{ label: 'Yoga', value: 'yoga' },
				{ label: 'Cycle', value: 'cycle' },
				{ label: 'Aqua Fit & Aqua Mode', value: 'aqua' },
				{ label: 'Rejuvenate, Low Impact & Gentle Fitness', value: 'gentle' }
			],
			Westlake: [
				{ label: 'Boxing & TAE Box', value: 'boxing' },
				{ label: 'Yoga', value: 'yoga' },
				{ label: 'Cycle', value: 'cycle' },
				{ label: 'Step Moves, Step Basic & Step Burner', value: 'step' },
				{ label: 'Rejuvenate, Low Impact & Gentle Fitness', value: 'gentle' }
			]
		};

		// Session times for each class
		const sessionOptions = {
			'body-attack': [
				{ label: 'Monday 06:00', value: 'mon-06' },
				{ label: 'Tuesday 17:30', value: 'tue-1730' },
				{ label: 'Thursday 08:00', value: 'thu-08' }
			],
			'zumba': [
				{ label: 'Monday 09:00', value: 'mon-09' },
				{ label: 'Wednesday 18:30', value: 'wed-1830' },
				{ label: 'Friday 17:00', value: 'fri-17' }
			],
			'body-pump': [
				{ label: 'Tuesday 06:30', value: 'tue-0630' },
				{ label: 'Thursday 17:30', value: 'thu-1730' },
				{ label: 'Saturday 09:00', value: 'sat-09' }
			],
			'body-balance': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'body-combat': [
				{ label: 'Tuesday 17:30', value: 'tue-1730' },
				{ label: 'Thursday 06:30', value: 'thu-0630' },
				{ label: 'Saturday 17:30', value: 'sat-1730' }
			],
			'body-jam': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'body-vive': [
				{ label: 'Tuesday 17:30', value: 'tue-1730' },
				{ label: 'Thursday 06:30', value: 'thu-0630' },
				{ label: 'Saturday 17:30', value: 'sat-1730' }
			],
			'cycle': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'pilates': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'yoga': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'aqua': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'boxing': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'step': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			],
			'gentle': [
				{ label: 'Monday 17:30', value: 'mon-1730' },
				{ label: 'Wednesday 06:30', value: 'wed-0630' },
				{ label: 'Friday 09:00', value: 'fri-09' }
			]

		};
		// References to the location, class, and session select elements
		const locationSelect = document.getElementById('location');
		const classSelect = document.getElementById('class');
		const sessionSelect = document.getElementById('session');

		// Update the options for the class and session selects based on the selected location
		function updateOptions() {
			// Get the selected location
			const location = locationSelect.value;
			// Clear the existing options for the class and session selects
			classSelect.innerHTML = '<option value="">// CHOOSE CLASS</option>';
			sessionSelect.innerHTML = '<option value="">// CHOOSE SESSION</option>';
			// Add the available class options for the selected location to the class select
			classOptions[location].forEach(option => {
				classSelect.innerHTML += `<option value="${option.value}">${option.label}</option>`;
			});
		}

		function updateSessionOptions() {
			// Get the selected class
			const classValue = classSelect.value;
			// Clear the existing options for the session select
			sessionSelect.innerHTML = '<option value="">// CHOOSE SESSION</option>';
			// Add the available session options for the selected class to the session select
			sessionOptions[classValue].forEach(option => {
				sessionSelect.innerHTML += `<option value="${option.value}">${option.label}</option>`;
			});
		}

		// Add event listeners to the location and class selects to update the options for the class and session selects
		locationSelect.addEventListener('change', updateOptions);
		classSelect.addEventListener('change', updateSessionOptions);
	}

});

