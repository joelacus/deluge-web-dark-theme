/* 
    Access the torrent right click menu on a mobile device.
    Author: github.com/joelacus
*/

if (!document.querySelector('.btn-simulate-right-click')) {
	// Create "open menu" button
	const button = document.createElement('button');
	button.textContent = 'Open Selected Row Menu';
	button.id = '#btn-simulate-right-click';
	button.classList.add('x-btn');
	button.setAttribute('style', 'color: #fff;padding: 6px;font-size: 12px;');
	button.addEventListener('click', function (e) {
		const element = document.querySelector('.x-grid3-row-selected');
		if (!element) return;
		simulateRightClick(element);
		// Get the selected row position and move the context menu to be underneath
		document.querySelector('#torrentMenu').style.left = getElementPosition(element).x + 'px';
		document.querySelector('#torrentMenu').style.top = getElementPosition(element).y + 28 + 'px';
	});
	// Append the button to the top toolbar
	document.querySelector('.x-toolbar-left-row')?.append(button);
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
