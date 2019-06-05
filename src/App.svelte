<script>
	import Options from './Options.svelte';
	import History from './History.svelte';
	import AddItem from './AddItem.svelte';

	import { formatDate } from './date.js';

	export let options;
	export let history;
	export let showOptions;
	export let showHistory;

	$:start = formatDate(new Date(formatDate(new Date(options.start))));
	$:end = formatDate(new Date(formatDate(new Date(options.end))));
	$:days = Math.floor((options.end - options.start) / (24 * 60 * 60 * 1000));
	$:spentDays = Math.ceil(
		((new Date(formatDate(new Date(formatDate(new Date()))))).getTime()
		- (new Date(options.start)).getTime())
		/ (24 * 60 * 60 * 1000)
		);
	$:perDay = Math.round(options.budget / days);
	$:spent = history.reduce((total, item) => total + item.sum, 0);
	$:maxSpentForToday = spentDays * perDay;
	$:todayBudget = perDay - (spent - maxSpentForToday);

</script>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		width: 100%;
	}
</style>

<main>
	<p>{start} - {end}</p>
	<p>Day {spentDays + 1} of {days}</p>
	<p>Per day: {perDay}</p>
	<p>Spent: {spent}</p>
	<p>Budget for today: {todayBudget}</p>

	<AddItem />
	<button type="button" data-action="toggle-options">Options</button>
	<button type="button" data-action="toggle-history">History</button>
	{#if showOptions}
		<Options {options} />
	{/if}
	{#if showHistory}
		<History {history} />
	{/if}
</main>
