export function toggleMenu(){
    var checkbox = document.getElementById("nav-check");
    var label = document.querySelector("label[for='nav-check']");
    
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        label.innerHTML = ' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg> ';
      }else {
        label.innerHTML = ' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg> ';
      }
    });
       
}