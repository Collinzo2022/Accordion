document.querySelectorAll('.question').forEach(section => {
  section.addEventListener('click', () => {
    const smallSection = section.parentNode;// Get the parent `.small-section` div
    smallSection.classList.toggle('active');// Add or remove the 'active' class for styling changes

    // Get the associated '.reply' div within the clicked '.small-section'ls
  
    const reply = smallSection.querySelector('.reply');
    // Check if the section is now active
    if (smallSection.classList.contains('active')) {
      // Set max-height to the scroll height to fully expand the content
      reply.style.maxHeight = reply.scrollHeight + "px";
    } else {
      // Set max-height to 0 to collapse the content
      reply.style.maxHeight = "0";
    }
  });
});