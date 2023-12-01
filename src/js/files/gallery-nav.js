const tabLinks = document.getElementsByClassName('project__tab-link');

for (const tab in tabLinks) {
  if (Object.hasOwnProperty.call(tabLinks, tab)) {
    tabLinks[tab].addEventListener('click', e => {
      [...tabLinks].forEach(i => i.classList.remove('project__tab-link_active'));
      const link = e.target;
      link.classList.add('project__tab-link_active');
      initGallery(link.getAttribute('data-sort'));
    });
  }
}

const initGallery = (sortType) => {
  const gallery = document.getElementsByClassName("project__grid")[0];
  const categories = ['mobile-ui', 'web-ui', 'branding'];
  gallery.innerHTML = null;

  for (let i = 1; i <= 4; i++) {
    let galleryItem = new Image();
    let wrap = document.createElement('div');
    wrap.className = 'project__item';

    if (sortType == 'all') {
      const category = categories[~~(Math.random() * categories.length)];
      galleryItem.src = `../../img/project/${category}/0${i}.png`;
    } else galleryItem.src = `../../img/project/${sortType}/0${i}.png`;
    
    galleryItem.alt = `Picture ${i}`;
    wrap.append(galleryItem);
    gallery.append(wrap);
  }
}

initGallery('all');