function scrollBar() {
    let scrollButton = document.getElementById("scroll-to-top");
    window.onscroll = function() {scrollFunctions()};

    function scrollFunctions() {
    // Scroll Progress Bar
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";

    // Scroll to top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    } 
}

// Scroll to top (on button click)
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome etc
} 


// Popover toggle
function popOverToggle() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {html: true})
    })
}


// Collapse menu on click (mobile)
function collapseMainNav() {
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarCollapse')
    const bsCollapse = new bootstrap.Collapse(menuToggle)
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })
}