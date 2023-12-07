function volume_sphere() {
    //Write your code here
	const rad = document.getElementById("radius");
const vol = document.getElementById("volume");
const button = document.getElementById("submit");
button.addEventListener("click", (event)=>{
  event.preventDefault();
  let volCircle = (4 * Math.PI * rad.value * rad.value * rad.value)/3;
  vol.value = volCircle.toFixed(4);
});
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
