var data = [
{name:"Residence Hanin",
place:"La Soukra",
img :"https://i.pinimg.com/originals/70/7f/b5/707fb53d718963d3eb6e6636e9f56d35.jpg",
category:"appartement",
price: "350 000dt"
},

{name:"Residence Bacha",
place:"La Marsa",
img:"https://www.resabo.com/cr.fwk/images/hotels/Hotel-8558-20211206-052026.jpg",
category:"appartement",
price: "430 000dt"
},

{name:"Residence Khadija",
place:"Jardins de Carthage",
img:"https://property.thelandlord.tn/wp-content/uploads/2023/03/location-courte-duree-la-marsa-central-equipe-meuble-short-term-rental-holidays-rental-furnished-golden-tulip-gammarth-plage06-1.jpeg",
category:"appartement",
price: "520 000dt"},

{name:"Residence Amine",
place:"Gammarth",
img:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/336264720.jpg?k=1926020a5d44884fea94f3de10013d0840d7ab9beb449775dcd1e33bf2e18658&o=", 
category:"appartement",
price: "525 000dt",
},
{name:"Residence Bacha",
place:"La Marsa",
img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/302845793.jpg?k=e0731b4fd2e491ef29e196cf3afcb29dae1b46a1e319412c17bc45c3cd9943b1&o=&hp=1",
category:"appartement",
price: "690 00dt"
},
{name:"Residence Bacha",
place:"La Marsa",
img:"https://previews.123rf.com/images/piovesempre/piovesempre1808/piovesempre180800103/106034840-int%C3%A9rieur-de-l-appartement-de-luxe-moderne-grenier-vide-espace-ouvert-de-cuisine.jpg",
category:"appartement",
price: "485 000 dt"
},
{name: "Villa Didon",
place:"La Marsa",
img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/367980480.jpg?k=5ef459e33492388e26ef9e9b7839f2891fc67e19898ecd9f4815151fa927e92e&o=&hp=1",
category:"House",
price: "1 000 000 dt"
},
{name: "Dar Maryem",
place:"Morneg",
img:"https://imagescdn.amarantelva.com/w_665,h_444/http://images.amarantelva.com.s3-website-eu-west-1.amazonaws.com/property/88973502/88973502_10.jpg", 
category:"House",
price: "920 000 dt"
},
{name: "Villa Manzah",
place:"Manzah",
img:"https://www.mgvillas.fr/imagenes/upload/mgvillas/mgvillas-propiedades_60215fa691eed-681x532.jpg",
category:"House",
price: "850 000 dt"
},
{name: "Villa gammarth",
place:"Gammarth",
img:"https://www.solmarvillas.com/sites/default/files/styles/villa_main_small/public/Villa%20Lux%20-%20Costa%20Blanca-1035.jpg?itok=4Cm4IZgk",
category:"House",
price: "997 000 dt"
},
{name: "Villa Marsa",
place:"La Marsa",
img:"https://content.avito.ma/images/10/10061270301.jpg",
category:"House",
price: "1 000 500 dt"
},
{name: "Villa soukra",
place:" La Soukra",
img:"https://images.posarellivillas.com/property_posarelli/95860/xwide/dji-0100-edit.jpg",
category:"House",
price: "850 000 dt"
},
{name: "Terrain 1",
place:"Gammarth",
img:"https://images.prismic.io/pmdc-edito/f2023bd0-ca29-443b-85c9-05753e16b478_Algar+conseils+achat+terrain+%281%29.jpg?auto=compress,format",
category:"Terrain",
price: "850 000 dt"
},
{name: "Terrain 2",
place:"La Marsa",
img:"https://agence-immobiliere-tunisie.net/images_immo/tunis_immobilier22041823161.jpg",
category:"Terrain",
price: "950 000dt"
},
{name: "Terrain 3",
place:" La Soukra",
img:"https://files.zimmo.be/wADJasU3FgUF81LDoZ_MXCw2dQY=/828x618/filters:image-format(pjpg)/ec/bc/68e1-d9b3-4fc4-b07e-56d9056c7208/43397764.jpg",
category:"Terrain",
price: "750 000 dt"
},
{name: "Terrain 4",
place:"manzah",
img:"https://agence-immobiliere-tunisie.net/images_immo/tunis_immobilier2201188980ff81-76b7-472e-8aaa-d12a31f011dc.jpg",
category:"Terrain",
price: "650 000 dt"
},
{name: "Terrain 5",
place:"La Marsa",
img:"https://remax.azureedge.net/userimages/1048/L_7b22d1f0312c44b3850d6e33544168ba.jpg",
category:"Terrain",
price: "750 000 dt"
},
{name: "Terrain 6",
place:"La Marsa",
img:"https://imganuncios.mitula.net/terrain_touristique_gammart_7990123691159611010.jpg",
category:"Terrain",
price: "850 000 dt"
}
]

function each (coll,f){
    if(Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            f(coll[i],i)
        }
    }
    else {
        for(var key in coll){
            f(coll[key],key)
        }
    }

}
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}
 function filHouse (arr){
    return filter(arr,function(element){
        return element.category==="House"
    })
 }
 function filTerrain (arr){
    return filter(arr,function(element){
        return element.category==="Terrain"
    })
 }
 function filAapp (arr){
    return filter(arr,function(element){
        return element.category==="appartement"
    })
 }


each(filAapp(data),function(e){
   
    $(".app1").append(` <div class="app">
        <div class="card">
            <h3>${e.name}</h3>
            <p>Place:${e.place}</p> 
            <img src="${e.img}">
            <p> Category:${e.category }</p>
            <p>Price:${e.price}</p>
            <button class='contact'>CONTACT US</button>
               
        </div>
    </div>`)
})

each(filHouse(data),function(e){
   
    $(".app2").append(` <div class="app">
        <div class="card">
            <h3>${e.name}</h3>
            <img src="${e.img}">
            <p>Place:${e.place}</p>
            <p>price:${e.price}</p>
            <p>
            category:${e.category}</p>
            <button class='contact'  >CONTACT US</button>
        </div>
    </div>`)
})


each(filTerrain(data),function(e){
   
    $(".app3").append(` <div class="app">
        <div class="card">
            <h3>${e.name}</h3>
            <img src="${e.img}">
            <p>Place:${e.place}</p>
            <p>Price:${e.price}</p>
            <p>category:${e.category='Terrain'}</p>
            <button class='contact'  >CONTACT US</button>
        </div>
    </div>`)
    
})

$('.contact').on("click",function(){
    window.location.href='http://127.0.0.1:5500/LM6/contact.html'
})




$('.center').click(function(){ 
    var user=$('#place1').val()
      console.log(user)
    each(data,function(element,i){
if(element.place===user  && element.category==="appartement"){
$(".app1").empty()
$(".app1").append(` <div class="app">
<div class="card">
    <h3>${element.name}</h3>
    <p>Place:${element.place}</p> 
    <img src="${element.img}">
    <p> Category:${element.category }</p>
    <p>Price:${element.price}</p>
    
       
</div>
</div>`)
}

  })
    
    
})
$('.center1').click(function(){ 
    var users=$('#place2').val()
console.log(users)
    each(data,function(element,i){
if(element.place===users  && element.category==="House"){
$(".app2").empty()
$(".app2").append(` <div class="app">
<div class="card">
    <h3>${element.name}</h3>
    <p>Place:${element.place}</p> 
    <img src="${element.img}">
    <p> Category:${element.category }</p>
    <p>Price:${element.price}</p>
    
       
</div>
</div>`)
}

  })
    
    
})
$('.center3').click(function(){ 
    var user=$('#place3').val()
console.log(user)
    each(data,function(element,i){
if(element.place===user  && element.category==="Terrain"){
$(".app3").empty()
$(".app3").append(` <div class="app">
<div class="card">
    <h3>${element.name}</h3>
    <p>Place:${element.place}</p> 
    <img src="${element.img}">
    <p> Category:${element.category }</p>
    <p>Price:${element.price}</p>
    
       
</div>
</div>`)
}

  })
    
    
})

function msg(){
 var userName =$('#name').val()
 console.log(userName)
 if(userName!==""){
  $('.row').empty()
  $('.container').append( `<div id='welcome'><h1> welcome ${userName} to LM6 Agency 
</h1>
<h2 id='cen'> Your request has been reserved </h2>
 </div>`)
  }
}
