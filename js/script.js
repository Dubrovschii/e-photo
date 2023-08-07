document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


const imageElements = document.querySelectorAll('.layers__item[style*="background-image"]');
const imageCache = {};

imageElements.forEach(element => {
    const backgroundImageURL = element.style.backgroundImage.match(/url\("(.+)"\)/)[1];
    const cacheKey = backgroundImageURL;

    if (!imageCache[cacheKey]) {
        const img = new Image();
        img.src = backgroundImageURL;
        img.onload = () => {
            imageCache[cacheKey] = img;
        };
    }
});

// Позже, при необходимости использовать изображения:
const layer1Image = imageCache['img/bg.webp'];
const layer5Image = imageCache['img/5.1.webp'];
const layer6Image = imageCache['img/layer-6.webp'];

// Теперь вы можете использовать эти изображения, например:
const layer1Element = document.querySelector('.layer-1');
layer1Element.style.backgroundImage = `url(${layer1Image.src})`;

