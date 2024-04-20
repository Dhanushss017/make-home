
  $(document).ready(function(){
    $(".buildingsNeighbor").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 50,
          dots:false,
        },
        600: {
          items: 3,
          dots:false,
        },
        1000: {
          items: 5,
        },
        1300: {
            items: 6,
            stagePadding: 30,
            // center:true
          },
      },
    });
  });


  
  $(document).ready(function(){
    $(".propertiesSale").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
          dots:false,
          stagePadding: 30,
        },
        600: {
          items: 2,
          dots:false,
        },
        1300: {
            items: 3,
           
            // center:true
          },
      },
    });
  });
  $(document).ready(function(){
    $(".dreamHome").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
          dots:false,
          stagePadding: 30,
        },
        600: {
          items: 2,
        
        },
        1000: {
            items: 3,
            
          },
        1200: {
            items: 4,
           
          },
      },
    });
  });
  


