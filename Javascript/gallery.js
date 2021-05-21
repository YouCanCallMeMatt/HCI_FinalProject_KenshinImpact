var modal = document.getElementById('my-modal');
var images = document.getElementsByClassName('my-images');
var modalImg = document.getElementById("img-01");


for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var closeIcon = document.getElementsByClassName("close")[0];

closeIcon.onclick = function() {
  modal.style.display = "none";
}