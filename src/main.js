import App from './App.svelte';
import { updateOptions, getOptions, getHistoryItems, getDefaultOptions, clearHistory, addHistoryItem, removeHistoryItem } from './store';

let showOptions = false;
let showHistory = false;

const app = new App({
	target: document.body,
	props: {
		history: [],
		options: getDefaultOptions(),
		showOptions,
		showHistory,
	}
});

document.body.addEventListener('click', e => {
	if (e.target.nodeName !== 'BUTTON') return;
	const action = e.target.getAttribute('data-action');
	if (!action) return;
	switch (action) {
		case 'remove-item':
			handleRemoveItem(e.target);
			break;
		case 'toggle-options':
			handleToggleOptions();
			break;
		case 'toggle-history':
			handleToggleHistory();
			break;
	}
});

document.body.addEventListener('submit', e => {
	if (e.target.nodeName !== 'FORM') return;
	const action = e.target.getAttribute('data-action');
	if (!action) return;
	e.preventDefault();
	switch (action) {
		case 'save-options':
			handleOptionsUpdate(e.target);
			break;
		case 'add-item':
			handleAddItem(e.target);
			break;
	}
});

async function init() {
	const [options, history] = await Promise.all([getOptions(), getHistoryItems()]);
	app.$set({
		options,
		history,
	});
}

function handleToggleOptions() {
	showOptions = !showOptions;
	app.$set({showOptions});
}
function handleToggleHistory() {
	showHistory = !showHistory;
	app.$set({showHistory});
}

async function handleRemoveItem(button) {
	const timestamp = Number(button.getAttribute('data-timestamp'));
	if (isNaN(timestamp)) return;
	const history = await removeHistoryItem(timestamp);
	app.$set({history});
}

async function handleAddItem(form) {
	const sum = Number(form.sum.value);
	const category = form.category.value || '';
	const history = await addHistoryItem({sum, category, timestamp: Date.now()});
	form.reset();
	app.$set({history});
}

async function handleOptionsUpdate(form) {
	const end = (new Date(form.end.value)).getTime();
	const active = Date.now() < end;
	const budget = Number(form.budget.value);
	const [options, history] = await Promise.all([
		updateOptions({end, active, budget, start: Date.now()}),
		clearHistory()
	]);
	showOptions = false;
	app.$set({
		options,
		history,
		showOptions,
	});
}

init();

export default app;
