function display_random_image() 
{
     var theImages = [{
        src: "https://d2w9rnfcy7mm78.cloudfront.net/15725323/original_54f91f783779b9b056aa9a28dab11075.png?1648070466?bc=0",
        width: "300",
        height: "500"
    }, {
        src: "https://d2w9rnfcy7mm78.cloudfront.net/15725339/original_e96e84a1350e4c924281d239fb833af3.jpg?1648070509?bc=0",
        width: "300",
        height: "500"
    }, {
        src: "https://d2w9rnfcy7mm78.cloudfront.net/15754551/original_cb7ba03c901be9308a5ac1ffa1aa852d.jpg?1648219323?bc=0",
        width: "300",
        height: "500"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}







window.addEventListener('DOMContentLoaded', () => {
  const channel = 'receipts-w-xyabskm1y';

  fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      renderTitle(data);
      renderBlocks(data);
      
    });
  
});

const renderTitle = (data) => {
  let title = data['title'];
  document.getElementById('channel-title').innerText = title;
};

const renderBlocks = (data) => {
  let blocks = data['contents'];
  let hue = 0;
  blocks.forEach((block) => {
    let blockClass = block['class'];
    if (blockClass == 'Image') {
      renderImage(block, hue);
    }
    hue = hue + 25;
  });
};

const renderImage = (block, hue) => {
  let imageUrl = block['image']['display']['url'];
  let imageBlockTemplate = document.getElementById('image-block');
  let clone = imageBlockTemplate.content.cloneNode(true);

  clone.querySelector('img').src = imageUrl;
  clone.querySelector('p').innerText = block['title'];

  let randomHue = Math.random()*255;
  let randomColor = 'hsl(' + randomHue + ', 100%, 50%)';
  let textColor = 'hsl(' + hue + ', 100%, 50%)';
  clone.querySelector('li').style.setProperty('--color', randomColor);
  clone.querySelector('li').style.setProperty('--text-color', textColor);

  let randomWidth = Math.random()*20;
  let randomWidthValue = randomWidth + '%';
  clone.querySelector('li').style.setProperty('--width', randomWidthValue);

  document.getElementById('contents').appendChild(clone);
};


