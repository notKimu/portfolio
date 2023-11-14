<script lang="ts">
    import { isWindowOpen } from "$lib";

    export let data: { title: string, content: any };

    const closeWindow = () => {
        isWindowOpen.set(false);
        document.body.classList.remove("overflow-hidden");
    }
</script>

<main class="window__container fixed screen grid p-center">
    <article class="window overflow-hidden">
        <div class="window__titlebar flex a-center j-between g-x">
            <h4>{data.title}.md</h4>

            <div class="window__buttons flex">
                <button class="window__button hoverable">󰖰</button>
                <button class="window__button hoverable">󰝣</button>
                <button
                    on:click={() => { closeWindow() }}
                    class="window__button hoverable"
                >󰖭</button>
            </div>
        </div>

        <div class="window__content p-m">
            <svelte:component this={data.content} />
        </div>
    </article>

    <button class="unset window_bg fixed screen" on:click={() => { closeWindow() }} />
</main>

<style>
    .window__container {
        top:              0;
        left:             0;

        background-color: #00000099;
        backdrop-filter:  blur(2px);
        z-index:          20;
    }

    .window__titlebar {
        background-color:   var(--color-bg);
        padding:            0 .2rem;
    }

    .window__button {
        height:            2rem;
        width:             2rem;

        background-color:  transparent;
        border-color:      var(--color-accent);
        border-width:      0 0 0 .15rem;
    }

    .window {
        max-height:         90dvh;

        display:            grid;
        grid-template-rows: 2rem 1fr;

        background-color:   var(--color-bg-window);
    }

    .window__content {
        overflow-y: scroll;
    }

    .window_bg {
        top:     0;
        left:    0;
        z-index: -1;
    }
</style>