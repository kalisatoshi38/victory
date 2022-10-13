let navLinks=document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
	
	
	

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ5VCCyNGjKPycXYkS0GaLMCZ6ajD8Ab7FXVW2SjW1a3ea10SzkU7m0_Ki7EcUBM9Hrg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg  = document.getElementById("mg")
      
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                mg.innerHTML="Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
                 
            })
            .catch(error => console.error('Error!', error.message))
        })
