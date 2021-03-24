var app = new Vue ({
  el: "#root",
  data: {
    index: 0,
    imageSrc: [
      './img/abu_dhabi.jpg',
      './img/cappadocia.jpg',
      './img/paris.jpg',
      './img/thailand.jpg',
      './img/amsterdam.jpg',
      './img/prague.jpg',
      './img/rio.jpg',
      './img/rome.jpg',
    ],
    imageAlt: [
      'abu dhabi mosque sheikh zayed',
      'cappadocia balloons',
      'paris',
      'thailand',
      'amsterdam',
      'prague',
      'rio de janeiro',
      'rome'
    ],
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
    },
    showImage: function(position) {
      this.index = position;
    }
  },
  created: function() {
    setInterval(this.next, 3000);
  }
});
