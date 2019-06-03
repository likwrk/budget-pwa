<script>
	export let options;
	export let history;
	import Options from './Options.svelte';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello</h1>
<Options {options} />