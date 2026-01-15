{
    console.log(document);
    //shows the entire html document
    console.dir(document);
    //shows the document as an object

}
{
    let mainImage = document.getElementById("mainImg");
    console.log(mainImage);

    //e2
    let heading = document.getElementById("heading1");
    console.log(heading);

    //e3
    let element = document.getElementById("jsljj");
    console.log(element);//null

}

{
     let oldImages = document.getElementsByClassName("oldImg");
     console.log(oldImages);
     console.log(oldImages.length);

     //e2
     console.log(oldImages[0]);
     console.log(oldImages[1]);
     console.log(oldImages[2]);


     //e3
     for (let i = 0; i < oldImages.length; i++) {
         console.log(oldImages[i]);
     }

     //e4
     let boxLinks = document.getElementsByClassName("boxLink");
     console.log(boxLinks);

}
{
    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);

    //e2
    console.log(paragraphs.length);

    //e3
    let allLinks = document.getElementsByTagName("a");
    console.log(allLinks);
    console.log(allLinks.length);


    //e4
    let allImages = document.getElementsByTagName("img");
    console.log(allImages);

}
{
    let heading =document.querySelector("#heading1");
    console.log(heading);

    //e2
    let firstOldimg = document.querySelector(".oldImg");
    console.log(firstOldimg);

    //e3
    let allOldimg = document.querySelectorAll(".oldImg");
    console.log(allOldimg);

    //e4
    let firstPara = document.querySelector("p");
    console.log(firstPara);

    //e5
    let boxLinks = document.querySelectorAll(".box a");
    console.log(boxLinks);


}

{
    let para = document.querySelector("#description");
    console.log(para.innerText);

    //e2
    let heading = document.querySelector("#heading1");
    heading.innerText = "Our Amazing Solar System";

    //e3
    let firstPara = document.querySelector("p");
    console.log(firstPara.innerText);

}
{
    let para = document.querySelector("#description");
    console.log(para.textContent);

    //e2
    let heading = document.querySelector("h1");
    heading.textContent = "you are hacked!";

    //e3
    let element = document.querySelector("#description");
    console.log(element.innerText);
    console.log(element.textContent);


}
{
    let para = document.querySelector("p");
    console.log(para.innerHTML);
     
    //e2
    let heading = document.querySelector("#heading1");
    heading.innerHTML = "<u>The Solar System</u>";

    //e3
    let headingAll = document.querySelector("h1");
    headingAll.innerHTML = "The <span style='color:gold';>Solar</span> System";

    //e4
    console.log(para.innerHTML);

}
{
    let mainImage = document.querySelector("#mainImg");

    let allImages = document.getElementsByClassName("oldImg");

    let allParas = document.getElementsByTagName("p");

    let discreptionPara = document.querySelector("#description");

    let boxLinkes = document.querySelectorAll(".box div");
}

{
    // 1. Get the text of the main heading
    let mainHeading = document.querySelector("h1");
    console.log(mainHeading.innerText);

    // 2. Change the heading to "Exploring Our Solar System"
    mainHeading.innerText = "Exploring Our Solar System";

    // 3. Get the innerHTML of the first paragraph
    let firstPara = document.querySelector("p");
    console.log(firstPara.innerHTML);

    // 4. Change the first h2 to include a star emoji ⭐
    let firstH2 = document.querySelector("h2");
    firstH2.innerHTML = firstH2.innerHTML + " ⭐";

    // 5. Log the innerText of the description paragraph
    let descriptionPara = document.querySelector("#description");
    console.log(descriptionPara.innerText);
}

{
    // 1. Select all images with class "oldImg"
    let oldImages = document.querySelectorAll(".oldImg");
    
    // 2. Log how many images you found
    console.log(oldImages.length);
    
    // 3. Select the first paragraph and get its text
    let firstParagraph = document.querySelector("p");
    console.log(firstParagraph.innerText);
    
    // 4. Change the main heading using innerHTML to include <strong> tags
    let mainHeading = document.querySelector("h1");
    mainHeading.innerHTML = "<strong>Exploring Our Solar System</strong>";
    
    // 5. Select all boxLinks and log their count
    let boxLinks = document.querySelectorAll(".boxLink");
    console.log(boxLinks.length);
}