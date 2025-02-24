var i = 0;
var slidesimage = ["slide image/cprogramming.png","slide image/java.jpg","slide image/python.jpg","slide image/htcss.jpg"];
var slideshow = function () {
    document.slideshow.src = slidesimage[i];
    if( i < slidesimage.length - 1 ){
        i++;
    } else{
        i=0 ;
    }
    setTimeout("slideshow()", 2000);
}

slideshow();