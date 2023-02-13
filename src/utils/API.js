import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  iframe: function() {
    return axios.get("https://giphy.com/embed/sULKEgDMX8LcI");
  },
  giphy: function() {
    return axios.get("https://giphy.com/gifs/sci-fi-matrix-cyberpunk-sULKEgDMX8LcI");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

{/* Responsive version
  <div style="width:100%;height:0;padding-bottom:47%;position:relative;">
  <iframe src="https://giphy.com/embed/sULKEgDMX8LcI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
  <p><a href="https://giphy.com/gifs/sci-fi-matrix-cyberpunk-sULKEgDMX8LcI">via GIPHY</a></p>

  Non-responsive version
  <iframe src="https://giphy.com/embed/sULKEgDMX8LcI" width="480" height="225" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  <p><a href="https://giphy.com/gifs/sci-fi-matrix-cyberpunk-sULKEgDMX8LcI">via GIPHY</a></p>  */}