import App from './App.svelte';

const history = [];
const options = {
	end: Date.now(),
	sum: 0,
	active: false,
};

options.active = Date.now() < options.end;

const app = new App({
	target: document.body,
	props: {
		history,
		options,
	}
});

document.body.addEventListener('click', e => {
	if (e.target.nodeName !== 'BUTTON') return;
	const action = e.target.getAttribute('data-action');
	if (!action) return;
	switch (action) {

	}
});

document.body.addEventListener('submit', e => {
	const action = e.target.getAttribute('data-action');
	if (!action) return;
	e.preventDefault();
	console.log('submit action', action, e.target);
	switch (action) {
		case 'save-options':
		handleOptionsUpdate(e.target);
		break;
	}
});

function handleOptionsUpdate(form) {
	console.log('form.end.value', form.end.value);
	const end = (new Date(form.end.value)).getTime();
	console.log('end', end);
	const active = Date.now() < options.end;
	const sum = Number(form.sum.value);
	app.$set({
		options: {
			end,
			active,
			sum,
		}
	});
}

export default app;
