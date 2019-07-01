   // Get the current year for the copyright
   $('#year').text(new Date().getFullYear());

   // Init Scrollspy
   $(document).ready(function() {
       $("#predictionButon").on('click', function() {
           $('#predictionControl').show(2000);
       })
   })

   $(document).ready(function() {
       $("#cancel").on('click', function() {
           $('#predictionControl').hide(2000);
       })
   })
   $(document).ready(function() {
       $("#resPrediction").on('click', function() {
           $('#predictionControl').hide(2000);
       })
   });
   const fortuneName = document.getElementById("fortuneName");
   const age = document.getElementById("age");
   const loadPrediction = document.getElementById('resPrediction');

   loadPrediction.addEventListener('click', showPrediction)

   function showPrediction() {
       event.preventDefault();
       event.stopPropagation();
       let age = age.value
       if (age <= 8) {
           document.body.predictionShow.style.backgroundImage = "url(../images/1.jpg"
       }
   }
   /*
      function setBgGreet() {
          let today = new Date(),
              hour = today.getHours();

          if (hour < 12) {
              // Morning
              document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
              greeting.textContent = 'Good Morning, ';
          } else if (hour < 18) {
              // Afternoon
              document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
              greeting.textContent = 'Good Afternoon, ';
          } else {
              // Evening
              document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
              greeting.textContent = 'Good Evening, ';
              document.body.style.color = 'white';
          }
      }*/