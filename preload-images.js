const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

  // Перейдите на вашу страницу color.html (замените на ваш путь)
  await page.goto('http://127.0.0.1:5500/color.html');

  // Ожидаем некоторое время, чтобы страница загрузилась полностью (при необходимости)
  await page.waitForTimeout(3000); // Измените значение по своему усмотрению

  // Получаем массив путей к изображениям (замените на ваши пути)
  const imagePaths = [
    'img/color/1.webp',
    'img/color/2.webp',
    'img/color/3.webp',
    'img/color/4.webp',
    'img/color/5.webp',
    'img/color/6.webp',
    'img/color/7.webp',
    'img/color/8.webp',
    'img/color/9.webp',
    'img/color/10.webp',
    'img/color/11.webp',
    'img/color/12.webp',
    'img/color/13.webp',
    'img/color/14.webp',
    'img/color/15.webp',
    'img/color/16.webp',
    'img/color/17.webp',
    'img/color/18.webp',
    'img/color/19.webp',
    'img/color/20.webp',
    'img/color/21.webp',
    'img/color/22.webp',
    'img/color/23.webp',
    'img/color/24.webp',
    'img/color/25.webp',
    'img/color/26.webp',
    'img/color/27.webp',
    'img/color/28.webp',
    'img/color/29.webp',
    'img/color/30.webp',
    'img/color/31.webp',
    'img/color/32.webp',
    'img/color/33.webp',
    'img/color/34.webp',
    'img/color/35.webp',
    'img/color/36.webp',
    'img/color/37.webp',
    'img/color/38.webp',
    'img/color/39.webp',
    'img/color/40.webp',
    'img/color/41.webp',
    'img/color/42.webp',
    'img/color/43.webp',
    'img/color/44.webp',
    'img/color/45.webp',
    'img/color/46.webp',
    'img/color/47.webp',
    'img/color/48.webp',
    'img/color/49.webp',
    'img/color/50.webp',
    'img/color/51.webp',
    'img/color/52.webp',
    'img/color/53.webp',
    'img/color/54.webp',
    'img/color/55.webp',
    'img/color/56.webp',
    'img/color/57.webp',
    'img/color/58.webp',
    'img/color/59.webp',
    'img/color/60.webp',
    'img/color/61.webp',
    'img/color/62.webp',
    'img/color/63.webp',
    'img/color/64.webp',
    'img/color/65.webp',
    'img/color/66.webp',
    'img/color/67.webp',
    'img/color/68.webp',
    'img/color/69.webp',
    'img/color/70.webp',
    'img/color/71.webp',
    'img/color/72.webp',
    'img/color/73.webp',
    'img/color/74.webp',
    'img/color/75.webp',
    'img/color/76.webp',
    'img/color/77.webp',
    'img/color/78.webp',
    'img/color/79.webp',
    'img/color/80.webp',
    'img/color/81.webp',
    'img/color/82.webp',
    'img/color/83.webp',
    'img/color/84.webp',
    'img/color/85.webp',
    'img/color/86.webp',
    'img/color/87.webp',
    'img/color/88.webp',
    'img/color/89.webp',
    'img/color/90.webp',
    'img/color/91.webp',
    'img/color/92.webp',
    'img/color/93.webp',
    'img/color/94.webp',
    'img/color/95.webp',
    'img/color/96.webp',
    'img/color/97.webp',
    'img/color/98.webp',
    'img/color/99.webp',
  ];

  // Подготавливаем и загружаем изображения в браузере
  for (const imagePath of imagePaths) {
    await page.evaluate(async path => {
      const img = new Image();
      img.src = path;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
    }, imagePath);
  }

  await browser.close();
})();
