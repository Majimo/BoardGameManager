<script lang="ts">
    import "../node_modules/svelte-material-ui/bare.css"
	import BoardGame from "./board-game/BoardGame.svelte";
</script>

<main>
	<h1>Board Game Manager</h1>
	<BoardGame />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>