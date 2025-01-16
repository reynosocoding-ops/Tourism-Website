function clearNewslettertextfield (){
    document.getElementById("emailSignUpEmail").value = ""
}

function submitNewsletter() {
    var newsLetterForm = document.getElementById("newsLetterForm");
    var confirmationMessage = document.getElementById("newslettersignupconfirmation");
    newsLetterForm.style.visibility = "hidden";
    confirmationMessage.style.visibility = "visible"
}

function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim(); 
    const mainContent = document.getElementById('mainContent');
  
    // Clear previous highlights
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
      highlight.outerHTML = highlight.innerHTML; 
    });
  
    if (searchTerm) {
      const walker = document.createTreeWalker(
        mainContent, 
        NodeFilter.SHOW_TEXT, 
        null 
      );
  
      while (node = walker.nextNode()) {
        if (node.nodeValue.includes(searchTerm)) {
          const parent = node.parentNode;
          const replacedText = node.nodeValue.replace(new RegExp(searchTerm, 'gi'), `<span class="highlight">${searchTerm}</span>`);
          parent.innerHTML = parent.innerHTML.replace(node.nodeValue, replacedText);
        }
      }
    }
  }