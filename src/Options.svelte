<script>
  export let options;
  let dateString = '';
  $: {
    const date = new Date(options.end);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    console.log('dateString', dateString);
  }
</script>

<form data-action="save-options">
  <label for="end">Date to: </label>
  <input type="date" value={dateString} id="end">
  <label for="sum">Budget: </label>
  <input type="number" value={options.sum} id="sum">
  <button>Save</button>
</form>
