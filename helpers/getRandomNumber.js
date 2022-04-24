export default function getRandomNumber (min, max) {
	const minValue = Math.ceil(min);
	const maxValue = Math.floor(max);

	return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};
