document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
//for srcoll-up on color.html !!!!!!

if ($(window).scrollTop() >= 150) $("#ToTop").fadeIn(800);
$(window).scroll(function(){
	if ($(window).scrollTop() <= 150) $("#ToTop").fadeOut(800);
	else $("#ToTop").fadeIn(800);
});

if ($(window).scrollTop() <= $(document).height()) $("#OnBottom").fadeIn(800);
$(window).scroll(function(){
	if ($(window).scrollTop() >= $(document).height()) $("#OnBottom").fadeOut(800);
	else $("#OnBottom").fadeIn(800);
});

$("#ToTop").click(function(){$("html,body").animate({scrollTop:0}, 800)});
$("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()}, 800)});	


Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      autoStart: true,
    },
  });
//for srcoll-up on color.html and bw.html !!!!!!

const imageCache = {};

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

async function getCachedImage(url) {
    const cacheKey = `image:${url}`;

    if (imageCache[cacheKey]) {
        return imageCache[cacheKey];
    } else {
        try {
            const img = await loadImage(url);
            imageCache[cacheKey] = img;
            return img;
        } catch (error) {
            console.error(`Failed to load image from ${url}:`, error);
            return null;
        }
    }
}

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css';
document.head.appendChild(link);