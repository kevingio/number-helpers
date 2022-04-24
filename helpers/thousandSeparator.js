export default function thousandSeparator(numb, sparator = '.') {
	if (!numb) {
		return '0';
	}

	const num = numb.toString().replace(/\D/g, '');

	if (num === '') {
		return '0';
	}

	if (num.length <= 3) {
		return num; // Return format 300 || 0
	}

	const result = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${sparator}`);

	return result; // Return format 3.000.000 || 4.500
}
