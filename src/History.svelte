<script>
  import { formatDateTime } from './date.js';
  export let history;

  $:historyItems = history.reverse();
</script>

<ul>
  {#each historyItems as item}
    <li>
      {formatDateTime(new Date(item.timestamp))} {item.sum} {item.category}
      <button type="button" data-action="remove-item" data-timestamp={item.timestamp}>Remove</button>
    </li>
  {/each}
</ul>