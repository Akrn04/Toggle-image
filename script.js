function toggleImage() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    if (image1.classList.contains('active')) {
        image1.classList.remove('active');
        image2.classList.add('active');
    } else {
        image1.classList.add('active');
        image2.classList.remove('active');
    }
} 
