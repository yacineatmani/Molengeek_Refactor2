new Vue({
  el: '#app',
  data: {
    cards: [
      {
        title: 'Agenda',
        description: 'agenda',
        image: './public/img/agenda.png'  // Met à jour le chemin vers ton image
      },
      {
        title: 'Coworking',
        description: 'coworking',
        image: './public/img/coworking.jpg'
      },
      {
        title: '.Codeur',
        description: 'codeur',
        image: './public/img/codeur.png'
      },
      {
        title: 'WebDev',
        description: 'webDev',
        image: './public/img/webDev.png'
      }
    ],
    mouseX: 0,
    mouseY: 0,
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    }
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
    window.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
});
