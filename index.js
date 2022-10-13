let navLinks=document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
	

  const scriptURL = 'https://script.google.com/macros/s/AKfycby4F2BXOUGmFGeT-RfW9Jbv-I2C2fVM6BgmhwsAqYPwyxseLwWdnDDMbX0FN99c-FB5iQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg  = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
          msg.innerHTML="Message sent successfully"
          setTimeout(function(){
              msg.innerHTML=""
          },5000)
          form.reset()
           
      })
      .catch(error => console.error('Error!', error.message))
  });	
	

     
