<script lang="ts">

import Card from "./lib/Card.svelte"
import Modal from "./lib/Modal.svelte" 
import type{Cards} from "./types/Cards"
import {cards} from "./store/cards"

let cardsSelectd: Cards[] = []

function toggleCard(event: CustomEvent){
  cardsSelectd.push(event.detail)
  $cards.forEach(card=>{
    if(card.id == event.detail.id && cardsSelectd.length <= 2){
      if(card.isNotOpen){
        card.isNotOpen = false
      }
    }
  })
  cards.set($cards)
  if(cardsSelectd.length == 2){
    setTimeout(()=> {
      let card1 = cardsSelectd[0]
      let card2 = cardsSelectd[1]
      
      if(card1.srcImage == card2.srcImage){
        $cards.forEach(card=>{
          if((card.id == card1.id) || (card.id == card2.id)){
            card.srcImage = ''
          }
        })
      }else{
        $cards.forEach(card=>{
          if((card.id == card1.id) || (card.id == card2.id)){
            card.isNotOpen = true
          }
        })
      }
      
      cardsSelectd = []
      
      cards.set($cards) 
    }, 1000)
  }
}

$:{
  console.log(window.scrollX)
}

</script>
<svelte:head>
  <title>Ola</title>
</svelte:head>
<main>
  <h1>JOGO DA MEMORIA</h1>
  <select name="">
    <option value="">Nivel Fácil</option>
    <option value="">Nivel Dificil</option>
  </select>

  <div class="cards">
    {#each $cards as card}
      <Card on:toggleCard={toggleCard} {...card}/>
    {/each}
  </div>
  <Modal  modalIsOpen={true} />
</main>