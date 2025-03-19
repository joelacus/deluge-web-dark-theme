/* 
    Access the torrent right click menu on a mobile device.
    Author: github.com/joelacus
*/
if (!document.getElementById('#btn-simulate-right-click')) {
	// Create "open menu" button
	const button = document.createElement('button');
	button.id = 'btn-simulate-right-click';
	button.classList.add('x-btn');
	button.addEventListener('click', function (e) {
		const element = document.querySelector('.x-grid3-row-selected');
		if (!element) return;
		simulateRightClick(element);
		// Get the selected row position and move the context menu to be underneath
		const x = getElementPosition(element).x + 'px';
		const y = getElementPosition(element).y + 28 + 'px';
		document.querySelector('#torrentMenu').style.left = x;
		document.querySelector('#torrentMenu').style.top = y;
		document.querySelector('.x-shadow').style.left = x;
		document.querySelector('.x-shadow').style.top = y;
	});
	const icon = document.createElement('div');
	icon.classList.add('icon-menu');
	button.append(icon);
	const span = document.createElement('span');
	span.textContent = 'Open Selected Row Menu';
	button.append(span);
	// Append the button to the top toolbar
	setTimeout(() => {
		document.querySelector('.x-toolbar-left-row')?.append(button);
	}, 1000);
	// Ensure the button is loaded
	setTimeout(() => {
		if (document.querySelector('#btn-simulate-right-click')) return;
		document.querySelector('.x-toolbar-left-row')?.append(button);
	}, 5000);
	setTimeout(() => {
		if (document.querySelector('#btn-simulate-right-click')) return;
		document.querySelector('.x-toolbar-left-row')?.append(button);
	}, 10000);
}

// Simulate a right click action on the selected row
function simulateRightClick(element) {
	const event = new MouseEvent('contextmenu', {
		bubbles: true,
		cancelable: true,
		view: window,
		button: 2,
	});
	element.dispatchEvent(event);
}

// Get the row position
function getElementPosition(element) {
	const rect = element.getBoundingClientRect();
	return {
		x: rect.left + window.scrollX,
		y: rect.top + window.scrollY,
	};
}
