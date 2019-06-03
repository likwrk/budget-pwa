<script>
  import { formatDate } from './date.js';
  export let options;
  let dateString = '';
  let minDate = '';
  $: {
    dateString = formatDate(new Date(options.end));
    minDate = formatDate(new Date());
  }
</script>

<form data-action="save-options">
  <label for="end">Date to: </label>
  <input type="date" min={minDate} value={dateString} id="end" required>
  <label for="budget">Budget: </label>
  <input type="number" value={options.budget} id="budget" required>
  <button>Save</button>
</form>
