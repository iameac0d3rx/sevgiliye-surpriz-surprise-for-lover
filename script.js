document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    document.getElementById('modern-page').classList.remove('hidden');
    
    document.querySelector('.container').style.display = 'none';
    
    
    showSlides();
    
    writeLoveStory();
});

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}

function writeLoveStory() {
    var loveStoryText = "Buraya Sevgiliniz İçin Seçtiğiniz En Güzel Cümleleri Yazınız";
    var loveStoryElement = document.getElementById("love-story");
    loveStoryElement.textContent = ''; 
    for (var i = 0; i < loveStoryText.length; i++) {
        var span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = loveStoryText.charAt(i);
        loveStoryElement.appendChild(span);
        if (loveStoryText.charAt(i) === '.') { 
            loveStoryElement.appendChild(document.createElement("br"));
        } else if (loveStoryText.charAt(i) === ' ') { 
            loveStoryElement.appendChild(document.createTextNode('\u00A0')); 
        }
    }
}