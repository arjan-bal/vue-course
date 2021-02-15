const getRandomValue = (minValue, maxValue) => {
  return Math.floor((maxValue - minValue) * Math.random() + minValue);
};

const app = new Vue({
  el: "#game",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  methods: {
    attackMonster() {
      ++this.currentRound;
      const damage = getRandomValue(5, 12);
      this.monsterHealth = Math.max(0, this.monsterHealth - damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth = Math.max(0, this.playerHealth - damage);
    },
    specialAttackMonster() {
      ++this.currentRound;
      const damage = getRandomValue(10, 25);
      this.monsterHealth = Math.max(0, this.monsterHealth - damage);
      this.movesTillSpecial = 3;
      this.attackPlayer();
    },
    healPlayer() {
      ++this.currentRound;
      const healAmount = getRandomValue(8, 20);
      this.playerHealth = Math.min(100, this.playerHealth + healAmount);
      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerBarStyles() {
      return {
        width: this.playerHealth + "%",
      };
    },
  },
  watch: {
    // currentRound() {
    //   console.log(this.currentRound);
    // },
    playerHealth(val) {
      if (val === 0) {
        if (this.monsterHealth === 0) {
          this.winner = "draw";
        } else {
          this.winner = "monster";
        }
      }
    },
    monsterHealth(val) {
      if (val === 0) {
        if (this.playerHealth === 0) {
          this.winner = "draw";
        } else {
          this.winner = "player";
        }
      }
    },
  },
});
