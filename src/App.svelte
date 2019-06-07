<script>
	import Options from './Options.svelte';
	import History from './History.svelte';
	import AddItem from './AddItem.svelte';

	import { formatHumanDate, getDateTimestamp } from './date.js';

	export let options;
	export let history;
	export let showOptions;
	export let showHistory;

	$:start = formatHumanDate(options.start);
	$:end = formatHumanDate(options.end);
	$:days = Math.floor((options.end - options.start) / (24 * 60 * 60 * 1000));
	$:spentDays = Math.ceil( (getDateTimestamp(Date.now()) - getDateTimestamp(options.start)) / (24 * 60 * 60 * 1000) );
	$:perDay = Math.round(options.budget / days);
	$:spent = history.reduce((total, item) => total + item.sum, 0);
	$:maxSpentForToday = spentDays * perDay;
	$:todayBudget = perDay - (spent - maxSpentForToday);

	$:daysBarStyle = `width: ${spentDays/days*100}%`;
	$:moneyBarStyle = `width: ${spent/options.budget*100}%`;

</script>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		width: 100%;
	}
	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.bar-container {
		width: 100%;
		position: relative;
		border: 1px solid #ccc;
		height: 3px;
	}
	.bar {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		max-width: 100%;
		background-color: #389;
	}
</style>

<main>
	<div class="flex-row">
		<p>{start} - {end}</p>
		<p>Day {spentDays + 1} of {days}</p>
	</div>
	<div class="bar-container">
		<div class="bar" style={daysBarStyle}></div>
	</div>
	<div class="flex-row">
		<p>Per day: {perDay}</p>
		<p>Spent: {spent} of {options.budget}</p>
	</div>
	<div class="bar-container">
		<div class="bar" style={moneyBarStyle}></div>
	</div>
	<h2>Budget for today: {todayBudget}</h2>

	<AddItem />
	<div class="flex-row">
		<button type="button" data-action="toggle-options">Options</button>
		<button type="button" data-action="toggle-history">History</button>
	</div>
	{#if showOptions}
		<Options {options} />
	{/if}
	{#if showHistory}
		<History {history} />
	{/if}
</main>
