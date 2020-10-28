window.addEventListener('load', changeBackground);

function changeBackground(){

    const listImages=["cataratas.jpg", "machu-picchu.jpg", "perito_moreno.jpg" /*, "roquez.jpg", "tatacoa.jpg", "titicaca.jpg"*/]

    let index= Math.floor( Math.random()*3 );

    let someImages=listImages[index];

    pathImages="../images/"+ someImages;

    document.body.style.backgroundImage="url("+ pathImages + ")";

    if(index==0){

        document.getElementById("description").innerHTML="Cataratas de Iguazu, Argentina";

    }
    else if(index==1){

        document.getElementById("description").innerHTML="Machu Picchu, Peru";
        
    }
    else if(index==2){

        document.getElementById("description").innerHTML="Perito Moreno, Argentina";
        
    }


}