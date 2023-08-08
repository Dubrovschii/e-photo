document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


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

// async function loadImages() {
//     const layer1ImageURL = 'img/bg.webp';
//     const layer5ImageURL = 'img/5.1.webp';
//     const layer6ImageURL = 'img/layer-6.webp';

//     const layer1Image = await getCachedImage(layer1ImageURL);
//     const layer5Image = await getCachedImage(layer5ImageURL);
//     const layer6Image = await getCachedImage(layer6ImageURL);

//     if (layer1Image && layer1Image.src) {
//         const layer1Element = document.querySelector('.layer-1');
//         // layer1Element.style.backgroundImage = `url(${layer1Image.src})`;
//     }

//     // Подобным образом можно использовать остальные изображения
// }

// loadImages();
