var app = {
  // Application Constructor
  initialize: function() {
      this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
      app.receivedEvent('deviceready');
  },
  /* 
      INIT CORDOVA
  */
  receivedEvent: function(id) {
      //init();
  }
};

/* 
  INIT JQUERY
*/
(function ($) {
init();
}($));

//window.location.href='blank.html';


/* 
  INITIALIZATION
*/
function init(){
  'use strict';  

  //DRAWER
  var action = $('.hamburger-action'),
    hamburger = $('#hamburger'),
    content = $('#content'),
    overlay = $('<div>').attr({
      id: 'hamburger-overlay',
    }).insertAfter(content),
    nav = $('nav'),  
    onClick = function() {
      var contentWidth = content.width(),
        current = nav.css('margin-left'),
        val = '0%',
        layer = 'block',
        opacity = 0.5,
        ham = -10;  
      content.css('width', contentWidth);
      if(current === '0px') {
        val = '100%';
        layer = 'none';
        opacity = 0;
        ham = 0;
      } else {
        overlay.css('display', layer);
      }  
      nav.animate({'margin-left': [val]}, {
        duration: 300
      });  
      hamburger.animate({'left': [ham]}, {
        duration: 300
      });  
      overlay.animate({'opacity': [opacity]}, {
        duration: 300,
        complete: function() {
          overlay.css('display', layer);
        }
      });
    };  
  action.click(onClick);
  overlay.click(onClick);
  hamburger.click(onClick);

  //SWIPER IN THE FOOTER
  var swiper = new Swiper('.swiper-container');

  //FIX MIN HEIGHT IN GENERAL CONTENT
  $('#content').css('min-height',$(window).height()-$('footer').height()-$('header').height());
 




  //loadPage('galeria',false);
 loadPage('goldenlifestyle',false);


 
   /*
    SPOTIFY
  */
 fixSpotify();
 $('#spotify_iframe').attr('src','https://open.spotify.com/user/millersounds');



 

    /*
      Galeria
    */
  jQuery(document).ready(function () {
   
  });






  $('.revisar_goldenpoints').css('bottom',$('footer').height());

  /*
    CALENDAR
  */
  



 

  


  /*
  setTimeout(function(){
    calendar.fullCalendar('next');
  },4000);
*/
/*
  if(window.localStorage.getItem("loggedIn") == 1) {
    // Logged In
    // Redirect to first page after logged in.
    alert("si hay");
    }
    else
    {
    // Redirect to login page.
    alert("no hay");
    window.localStorage.setItem("loggedIn", 1);
    }
*/



}





/*
Methods
*/



function touchDrawer(){
//alert(1);
console.log("click");
$('#hamburger').click();
}


function fixSpotify(){
// alert(0);
$('#spotify').height( $(window).height() - ($('footer').height()+$('header').height()) -20 );
$('#spotify_iframe').height( $(window).height() - ($('footer').height()+$('header').height()) -10  );
}







/*
NAVIGATION
*/

var actualPage="goldenlifestyle";

function loadPage(pantalla,willTouchDrawer){
if(willTouchDrawer){
  touchDrawer();
}


$('#safeinthecity').css('display','none');
$('#spotify').css('display','none');
$('#micomunidad').css('display','none');
$('#galeria').css('display','none');
$('#eventos').css('display','none');
$('#goldenlifestyle').css('display','none');
$('#goldenstore').css('display','none');

switch(pantalla) {
  case 'safeinthecity':
      $('#screen_title').html('SAFE IN THE CITY');
  break;    
  case 'spotify':
  $('#screen_title').html('SPOTIFY');
      
  break;    
  case 'micomunidad':
  $('#screen_title').html('MI COMUNIDAD');
      
  break;
  case 'galeria':
  $('#screen_title').html('GALERIA');
  initGaleria();


  
  break;
  case 'eventos':
  $('#screen_title').html('EVENTOS');
  initEventos();
  break;
  case 'goldenlifestyle':
  $('#screen_title').html('GOLDEN LIFESTYLE');
  initGoldenLifeStyle();
  break;
  case 'goldenstore':
  $('#screen_title').html('GOLDEN STORE');
  
  break;
  default:

  break;
}
$('#'+pantalla).css('display','block'); 
actualPage=pantalla;

}


/*
CALENDARIO
*/
var alreadyEventos=false;

function initEventos(){
if(!alreadyEventos){
var calendar = $('#calendar').fullCalendar({
  defaultView: 'month',
  editable: false,
  height: getCalendarHeight(),
  eventLimit: true, // allow "more" link when too many events
  events: [
    {
      title: '',
      start: '2018-03-16'
    }
  ],
  dayClick: function(date, allDay, jsEvent, view) {
      //$('.fc-day.fc-widget-content').css('background-color','#000000');
      //$(this).css('background-color', 'rgb(152, 24, 24)');
  }
});    
var pivotCalendarSwipe=true;
var myElement = document.getElementById('calendar');
var mc = new Hammer(myElement);      
mc.on("panleft", function(ev) {
  if(pivotCalendarSwipe){
    calendar.fullCalendar('next');
    pivotCalendarSwipe=false;
    setTimeout(function(){
      pivotCalendarSwipe=true;
    },500);
  }
});
mc.on("panright", function(ev) {
  if(pivotCalendarSwipe){
    calendar.fullCalendar('prev');
    pivotCalendarSwipe=false;
    setTimeout(function(){
      pivotCalendarSwipe=true;
    },500);
  }
});
$('#calendar').height(getCalendarHeight());
fixEventosList();
alreadyEventos=true;
}
}


function getCalendarHeight(){
return (getContentHeight()/2)+35;
}

function getContentHeight(){
var hei=$(window).height()-$('footer').height()-$('header').height();

return hei;
}
function fixEventosList(){

var heightCells = $('.fc-row.fc-week.fc-widget-content.fc-rigid').height();
//$('.fc-row.fc-week.fc-widget-content.fc-rigid').height(heightCells-6);
//$('.fc-scroller.fc-day-grid-container').css('height','auto');  
var calendarHEgith = (getContentHeight()/2)+35;
$('.eventos-list').height($(window).height()-$('footer').height()-$('header').height()-getCalendarHeight()-1); //1px el border top de eventos-list
}



/*
GOLDEN LIFESTYLE
*/
function initGoldenLifeStyle(){
$('#goldenlifestyle_list ul li .cell-picture').css('visibility','hidden');
setTimeout(function(){
  $('#goldenlifestyle_list ul li .cell-picture').css('height',$('#goldenlifestyle_list ul li .cell-picture').width());

  $('#goldenlifestyle_list ul li .cell-picture').css('visibility','visible');
},500);
}




/*
Galeria
*/
//var alreadyGaleria=false;

function initGaleria(){


  document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};


//if(!alreadyGaleria){



/*
jQuery("#galeria").nanogallery2({
  items:[
    // album 1
    {
        src:   'img/gallery/cover_album1.png',		     // image url
        srct:  'img/gallery/cover_album1.png',	     // thumbnail url
        title: 'MGD BEACH PARTY',   // item title
        ID: 1,                       // item ID
        kind: 'album'                // item kind
    },
    { src: 'img/gallery/cover_album1.png', srct: 'img/gallery/cover_album1.png', title: 'Foto 1', ID: 10, albumID: 1},
    { src: 'img/gallery/photo1.jpg', srct: 'img/gallery/photo1.jpg', title: 'Foto 2', ID: 11, albumID: 1},

    // album 1
    {
      src:   'img/gallery/cover_album2.png',		     // image url
      srct:  'img/gallery/cover_album2.png',	     // thumbnail url
      title: 'HALLOWEEN PARTY',   // item title
      ID: 2,                       // item ID
      kind: 'album'                // item kind
  },
  { src: 'img/gallery/cover_album2.png', srct: 'img/gallery/cover_album2.png', title: 'Foto 2', ID: 12, albumID: 2},
  { src: 'img/gallery/photo2.jpg', srct: 'img/gallery/photo2.jpg', title: 'Foto 2', ID: 13, albumID: 2},

  // album 1
  {
    src:   'img/gallery/cover_album3.png',		     // image url
    srct:  'img/gallery/cover_album3.png',	     // thumbnail url
    title: 'DEADMAU5',   // item title
    ID: 3,                       // item ID
    kind: 'album'                // item kind
},
{ src: 'img/gallery/cover_album3.png', srct: 'img/gallery/cover_album3.png', title: 'Foto 3', ID: 14, albumID: 3},
{ src: 'img/gallery/photo3.jpg', srct: 'img/gallery/photo3.jpg', title: 'Foto 3', ID: 15, albumID: 3},

// album 1
{
  src:   'img/gallery/cover_album4.png',		     // image url
  srct:  'img/gallery/cover_album4.png',	     // thumbnail url
  title: 'TURN ON THE NIGHT',   // item title
  ID: 4,                       // item ID
  kind: 'album'                // item kind
},
{ src: 'img/gallery/cover_album4.png', srct: 'img/gallery/cover_album4.png', title: 'Foto 4', ID: 16, albumID: 4},
{ src: 'img/gallery/photo4.jpg', srct: 'img/gallery/photo4.jpg', title: 'Foto 4', ID: 17, albumID: 4}

    
    


  ],
  thumbnailWidth:  'auto',
  thumbnailHeight: 170,
  //itemsBaseURL:    'http://appdoyoudo.com/miller/content/gallery/',
 // itemsBaseURL:    'img/gallery/',
  locationHash:    false,
  hoverin: false,
  hoverout:false,
  touchAnimation:false
});

*/
//alreadyGaleria=true;
//}
}



/*
GOLDEN STORE
*/
var actualGoldenStoreSection="categories";

function listProducts(categoryID,categoryName){
  $('#goldenstore_categories').hide();
  $('#goldenstore_list').show();
  actualGoldenStoreSection="list";
  $('#backbutton').css('visibility','visible');

  $('#goldenstore_list .list-title').html(categoryName);
  $('#goldenstore_list ul li').hide();
  $('#goldenstore_list ul li.'+categoryID).show();


}


function productInfo(productID){

  $('#goldenstore_list').hide();
  $('#goldenstore_item').show();
  actualGoldenStoreSection="info";
  $('#backbutton').css('visibility','visible');


  //displays product info
  $('#goldenstore_item .item-picture').css('background-image',$('.product-'+productID).find('.cell-picture').css('background-image'));
  $('#goldenstore_item .item-title').html($('.product-'+productID).find('.cell-title').html());
  $('#goldenstore_item .item-price').html($('.product-'+productID).find('.cell-price').html());
  $('#goldenstore_item .item-description').html($('.product-'+productID).find('.cell-description').html());

}


/*
GOLDEN LIFESTYLE
*/
var  actualLifeStyleSection="list";


function newsInfo(newsID){
  $('#goldenlifestyle_list').hide();
  $('#goldenlifestyle_item').show();
  actualLifeStyleSection="info";
  $('#backbutton').css('visibility','visible');

  //displays newsInfo

  $('#goldenlifestyle_item .item-picture').attr('src',$('.news-'+newsID).find('.cell-picture-path').html());
  $('#goldenlifestyle_item .item-title').html($('.news-'+newsID).find('.cell-title').html());
  $('#goldenlifestyle_item .item-detail').html($('.news-'+newsID).find('.cell-detail').html());


}



/*
BACK BUTTON
*/
function back(){
switch(actualPage) {
  case 'goldenstore':
      if(actualGoldenStoreSection=='info'){
        $('#goldenstore_item').hide();
        $('#goldenstore_list').show();
        actualGoldenStoreSection='list';
      }
      else if(actualGoldenStoreSection=='list'){
        $('#goldenstore_categories').show();
        $('#goldenstore_list').hide();
        $('#backbutton').css('visibility','hidden');
        actualGoldenStoreSection='categories';
      }
  break;    
  case 'goldenlifestyle':
      if(actualLifeStyleSection=='info'){
        $('#goldenlifestyle_item').hide();
        $('#goldenlifestyle_list').show();
        actualLifeStyleSection='list';
        $('#backbutton').css('visibility','hidden');
      }
  break;    
  default:

  break;
}
}


function addFriend(){

  swal({
    title: 'Ingresa el E-Mail de tu amigo/a:',
    input: 'email',
    showCancelButton: true,
    confirmButtonText: 'Invitar',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (email === 'jmendez.ec@gmail.com') {
            swal.showValidationError(
              'Ya has invitado a este amigo.'
            )
          }
          resolve()
        }, 2000)
      })
    },
    allowOutsideClick: () => !swal.isLoading()
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'MGD',
        html: 'Has invitado a ' + result.value+ ', debes esperar a que confirme su cuenta.'
      })
    }
  })


}


function addProducto(){

  swal({
    title: 'Ingresa el código del producto:',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    showLoaderOnConfirm: true,
    preConfirm: (text) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          
          resolve()
        }, 2000)
      })
    },
    allowOutsideClick: () => !swal.isLoading()
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'MGD',
        html: 'Has agregado correctamente el código ' + result.value+ ', en unos momentos se actualizarán tus GOLDEN POINTS'
      })
    }
  })


}

function displayGoldenPoints(){
  /*swal({
    title: 'Atención!',
    text: 'El username o password no se encuentran registrados, por favor inténtalo nuevamente',
    type: 'error',
    confirmButtonText: 'OK'
  });*/
  swal({
    title: 'MGD',
    text: 'Actualmente tienes 1200 GOLDEN POINTS',
    confirmButtonText: 'OK'
  });
}



function canjear(productID){
  swal({
    type: 'error',
    title: 'MGD',
    html: 'No cuentas con suficientes GoldenPoints para canjear este artículo.'
  })
}