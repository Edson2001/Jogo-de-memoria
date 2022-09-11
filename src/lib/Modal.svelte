<script lang="ts">
export let modalIsOpen:boolean

function resetGame(){
  modalIsOpen = false
}

function closeModal(event){
  
  console.log(event.target.id === "modal")
  if(event.target.id === "modal"){
    modalIsOpen = false
  }
}
</script>
{#if modalIsOpen }
<div class="modal" id="modal"  on:click="{closeModal}" >
    <div class="modal-container">
        <h3>BUUH!!  </h3>
        <p>  
            Parabéns, você terminou esse jogo da memória. 
            Experimente jogar uma outra dificuldade ou jogue na mesma novamente.
        </p>
        <button on:click="{resetGame}">JOGAR NOVAMENTE</button>
        <img src="images/Web.png" alt="">
    </div>
</div>
{/if}
<style>
  
</style>