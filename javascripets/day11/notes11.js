let para = document.querySelector('p');
{
    let solarImg = document.querySelector('img');
    let idName = solarImg.getAttribute('id');
    console.log(idName);

    //e2
    solarImg.setAttribute('id', 'galaxyImg');

    //e3
    solarImg.setAttribute('src', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800');

    //e4
    let link = document.querySelector('a');
    console.log(link.getAttribute('href')); 
    link.setAttribute('href', 'https://www.nasa.gov/');

    //e5
    let heading = document.getElementById('h1');
    // let headId = heading.getAttribute('id');
    // console.log(headId);


}

{
    let heading = document.querySelector('h1');
    heading.style.color = 'orange';

    //e2
    heading.style.backgroundColor = 'black';

    //e3
    let para = document.querySelector('p');
    para.style.color ='white';
    para.style.fontSize = '20px';
    para.style.padding = '15px';

    //e4
    let img = document.querySelector('img');
    img.style.width = '400px';
    img.style.borderRadius = '10px';

    //e5
    let box = document.querySelector('.box');
    // box.style.display = 'none';


}
{
    para.classList.add('green');
    console.log(para);    

    //e2
    para.classList.remove('green');

    //e3
    console.log(para.classList.contains('green'));

    //e4
    para.classList.toggle('green');
    para.classList.toggle('green');

    //e5
    let box = document.querySelector('.box');
    let btn = document.querySelector('button');

    btn.addEventListener('click', function(){
        box.classList.toggle('highlight');
    })
    
}

{
    let box = document.querySelector('.box');
    let boxChildren = box.children;
    console.log(boxChildren);

    //e2
    let list = document.querySelector('ul');
    console.log(list.parentElement);

    //e3
    let firstItem = list.children[0];
    let secondItem = firstItem.nextElementSibling;
    console.log(secondItem.innerText);

    //e4
    console.log(box.children[0]);
    console.log(box.children[box.children.length - 1]);
    
    //e5
    let heading1 = document.querySelector('#heading1');
    let nextEln = heading1.nextElementSibling;
    let afterThat = nextEln.nextElementSibling;
    console.log(afterThat.innerText);
}
{
    let newBtn = document.createElement('button');
    newBtn.innerText = 'Explore Universe!';

    let box = document.querySelector('.box');
    box.appendChild(newBtn);

    //e2
    let heading = document.createElement('h3');
    heading.innerText = "Welcome to Space!";
    let body = document.querySelector('body');
    body.prepend(heading);

    //e3
    let newPara = document.createElement('p');
    newPara.innerText = "The universe is vast and mysterious.";
    newPara.style.color = 'cyan';
    newPara.style.fontSize = '18px';
    
    box.appendChild(newPara);

    //e4
    let badge = document.createElement('span');
    badge.innerText = " 🌟 New!";
    let heading3 = document.querySelector('h1');
    heading3.insertAdjacentElement('beforeend', badge);

    //e5
    let list = document.querySelector('ul');
    let item1 = document.createElement('li');
    item1.innerText = "Neptune: Ice Giant";
    let item2 = document.createElement('li');
    item2.innerText = "Uranus: Ice Giant";
    list.appendChild(item1);
    list.appendChild(item2);


}

{
    let warning = document.createElement('p');
    warning.innerText = "⚠️ Content may change";
    let desc = document.querySelector('#description');
    desc.insertAdjacentElement('beforebegin', warning);

    //e2
    let icon = document.createElement('span');
    icon.innerText = "🌍 ";
    let heading = document.querySelector('h1');
    heading.insertAdjacentElement('afterbegin', icon);

    //e3
    let arrow = document.createElement('span');
    arrow.innerText = " →";
    let heading2 = document.querySelector('h2');
    heading2.insertAdjacentElement('beforeend', arrow);


}

{
    let oldImg = document.querySelector('.oldImg');
    oldImg.remove();

    //e2
    let imageContainer = document.querySelector('.images');
    imageContainer.removeChild(oldImg);

    //e3
    let oldImages = document.querySelectorAll('.oldImg');
    for (let img of oldImages) {
    img.remove();
    }

    //e4
    let btn = document.querySelector('button');
    let box = document.querySelector('.box');
    btn.addEventListener('click', function() {
    box.remove(); // Box disappears when button is clicked
    });

    //e5
    let list = document.querySelector('ul');
    let firstItem = list.children[0];
    firstItem.remove();
}


