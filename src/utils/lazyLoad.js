//懒加载
// 李建霆
// 2024.5.6

export default function lazyLoad() {
  const ob = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          ob.unobserve(img);
        }
      }
    },
    {
      root: null, //要观察的元素和谁进行交叉 只能填父元素
      // rootMargin: 0, // 视口向外扩展的范围 交叉的范围
      threshold: 0, //交叉到什么程度 进行回调
    }
  );

  const ob_imgs = document.querySelectorAll("img[data-src]");
  ob_imgs.forEach((img) => {
    ob.observe(img);
  });
}
