// BMI
const formEl = document.getElementById('BMI-form');
const inputHeightEl = document.getElementById('BMI-height');
const inputWeightEl = document.getElementById('BMI-weight');

function createResultMessage(BMI, status) {
	const paraEl = document.createElement('p');
	paraEl.innerHTML = `
    <p>
			Your BMI is <strong class="text-primary">${BMI}</strong> and your status is <strong class="text-primary">${status}</strong>
		</p>
  `;
	formEl.insertAdjacentElement('afterend', paraEl);
}

function calculateBMI(e) {
	e.preventDefault();
	const enteredInputHeight = +inputHeightEl.value;
	const enteredInputWeight = +inputWeightEl.value;
	const BMI = (
		(enteredInputWeight / (enteredInputHeight * enteredInputHeight)) *
		10000
	).toFixed(1);
	let status;

	if (BMI <= 18.4) {
		status = 'Underweight';
	} else if (BMI >= 18.5 && BMI <= 24.9) {
		status = 'Normal';
	} else if (BMI >= 25.0 && BMI <= 39.9) {
		status = 'Overweight';
	} else if (BMI >= 40) {
		status = 'Obese';
	}

	createResultMessage(BMI, status);
}

formEl.addEventListener('submit', calculateBMI);

// FOOTER
const currentYearEl = document.getElementById('year');
const today = new Date();
currentYearEl.textContent = today.getFullYear();
