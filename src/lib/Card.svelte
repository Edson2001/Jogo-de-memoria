<script lang="ts">
    export let srcImage: string
    export let isNotOpen: boolean = false
    export let id: number
    import {fade} from "svelte/transition"
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()

    let rotate = false

    function toggleCard(){
        dispatch("toggleCard",{srcImage, isNotOpen, id})
        rotate = !rotate
    }
    
</script>
<div transition:fade class="card" class:rotate on:click="{toggleCard}" class:isNotOpen>
    <div class="card-image" >
        {#if !isNotOpen}
        <img src={srcImage} alt="">
        {:else}
        <span>?</span>
        {/if}
    </div>
</div>
<style>
    .rotate{
        animation: rotate ease .7s ;
    }
    @keyframes rotate{
        from{
            transform: rotate3d(0, 1, 0, 128deg);
        }
        to{
            transform: rotate3d(0, 1, 0, 0deg);
        }
    }
</style>