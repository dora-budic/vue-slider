var app = new Vue ({
  el: "#root",
  data: {
    index: 0,
    imageSrc: [
      './img/abu_dhabi.jpg',
      './img/amsterdam.jpg',
      './img/cappadocia.jpg',
      './img/paris.jpg',
      './img/prague.jpg',
      './img/rio.jpg',
      './img/rome.jpg',
      './img/thailand.jpg'
    ],
    imageAlt: [
      'abu dhabi mosque sheikh zayed',
      'amsterdam',
      'cappadocia balloons',
      'paris',
      'prague',
      'rio de janeiro copacabana',
      'rome piazza navona',
      'thailand'
    ]
  },
  methods: {
    next: function() {
      if (this.index < this.imageSrc.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    previous: function() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.imageSrc.length - 1;
      }
    }
  }
});
