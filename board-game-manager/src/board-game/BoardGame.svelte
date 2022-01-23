<script lang="ts">
    import Button, { Label } from '@smui/button';
    import CharacterCounter from '@smui/textfield/character-counter';
    import Slider from '@smui/slider';
    import Textfield from '@smui/textfield';
    import type { BoardGame } from './board-game.interface';
import { boardGame, getBoardGame } from './store.js';

    const handleSubmit = () => {
        const newBoardGame: BoardGame = getBoardGame();
        const options = {
            method: 'POST',
            body: JSON.stringify(newBoardGame),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:3000/board-game/create`, options).then(resp => resp.json()).then(data => {console.log(data); boardGame.set(data)});
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="item">
        <div class="label">Nom du jeu</div>
        <Textfield bind:value={$boardGame.name} label="Nom du jeu" class="input">
            <!-- <HelperText slot="helper">Ex: QueenDomino</HelperText> -->
        </Textfield>
    </div>
    <div class="item slider">
        <div class="label">De {$boardGame.players.from} à  {$boardGame.players.to} joueurs</div>
        <div>
            <Slider
                bind:value={$boardGame.players.from}
                min={1}
                max={10}
                step={1}
                discrete
                tickMarks
                input$aria-label="Nombre de joueurs min"
                class="players-slider"
            />
            <Slider
                bind:value={$boardGame.players.to}
                min={1}
                max={10}
                step={1}
                discrete
                tickMarks
                input$aria-label="Nombre de joueurs max"
                class="players-slider"
            />
        </div>
    </div>
    <div class="item">
        <div class="label">Fournisseur</div>
        <Textfield bind:value={$boardGame.publisher} label="Fournisseur" class="input">
        </Textfield>
    </div>
    <div class="item">
        <div class="label">Description</div>
        <Textfield input$maxlength={250} textarea bind:value={$boardGame.description} label="Description" class="input">
            <CharacterCounter slot="internalCounter">0 / 250</CharacterCounter>
        </Textfield>
    </div>
    <Button variant="raised" type="submit">
        <Label>Créer jeu de société</Label>
    </Button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    .item {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }
    .label {
        width: 260px;
        text-align: initial;
    }
    :global(.players-slider) {
        width: 500px;
    }
    :global(.input) {
        width: 548px !important;
    }
</style>