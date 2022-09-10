const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeImageItems = (images) => {

  const imageEl = document.createElement("img");
  imageEl.src = images.url;
  imageEl.alt = images.alt;

  // imageEl.append(imageEl.src, imageEl.alt);

  return imageEl;

}



const imagesEls = images.map(makeImageItems);

const imagesList = document.querySelector(".gallery");
imagesList.append(imagesEls)

const makeImageList = (imagesEl) => {
  return imagesEl.map(image => {
  
    const imageListItem = document.createElement("li");

    return imageListItem;
    
  })
};




