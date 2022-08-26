export function getQueryVariable(variable: string): string {
	const query = window.location.search.substring(1);
	const vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return '';
}

export function isMobile(): boolean {
	return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

export function openMetaMaskUrl(url: string): void {
	const a = document.createElement('a');
	a.href = url;
	a.target = '_self';
	document.body.appendChild(a);
	a.click();
	a.remove();
}
