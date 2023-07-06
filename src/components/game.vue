<template>
    <div class="rock-paper-scissors-widget">
      <h2>Batu Gunting Kertas</h2>
      <div class="choices">
        <button @click="handleClick('rock')">Batu</button>
        <button @click="handleClick('paper')">Kertas</button>
        <button @click="handleClick('scissors')">Gunting</button>
      </div>
      <p>{{ result }}</p>
      <button @click="resetGame">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        result: '',
        isGameEnded: false,
      };
    },
    methods: {
      handleClick(playerSelection) {
        if (!this.isGameEnded) {
          const computerSelection = this.computerPlay();
          this.result = this.playRound(playerSelection, computerSelection);
          this.isGameEnded = true;
        }
      },
      resetGame() {
        this.result = '';
        this.isGameEnded = false;
      },
      computerPlay() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      },
      playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
  
        if (playerSelection === computerSelection) {
          return "Seri";
        } else if (
          (playerSelection === 'rock' && computerSelection === 'scissors') ||
          (playerSelection === 'paper' && computerSelection === 'rock') ||
          (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
          return 'Kamu Menang!';
        } else {
          return 'Kamu Kalah!';
        }
      },
    },
  };
  </script>
  
  <style>
  .rock-paper-scissors-widget {
    border: 1px solid #ccc;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
      background-color: #f2f2f2;
      border-radius: 93px;
  }
  
  .choices {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  button {
    margin: 0 5px;
  }
  
  button:hover {
    cursor: pointer;
  }
  </style>

