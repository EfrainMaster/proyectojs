$(document).ready(()=>{
//                                <Efrain>
  // SLIDER
  if(window.location.href.indexOf('index')>-1){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive:true
      });
}
  // POSTS
if(window.location.href.indexOf('index')>-1){

              var posts=[
                {
                  title: 'Pruba de Título 1',
                  date: 'Publicado el día: '+moment().date()+' de '+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis eget felis bibendum malesuada id a elit. Nam fringilla magna ac sapien gravida feugiat. Aenean ultricies tortor non dolor porttitor interdum. Nunc sit amet nunc mollis, tempor nisl a, aliquet nulla. Curabitur quis ligula hendrerit, feugiat arcu quis, elementum massa. Aliquam erat volutpat. Vivamus eget nibh nec magna porta sagittis. Sed et massa vitae libero auctor placerat.'
                },
                {
                  title: 'Pruba de Título 2',
                  date: 'Publicado el día: '+moment().date()+' de '+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis eget felis bibendum malesuada id a elit. Nam fringilla magna ac sapien gravida feugiat. Aenean ultricies tortor non dolor porttitor interdum. Nunc sit amet nunc mollis, tempor nisl a, aliquet nulla. Curabitur quis ligula hendrerit, feugiat arcu quis, elementum massa. Aliquam erat volutpat. Vivamus eget nibh nec magna porta sagittis. Sed et massa vitae libero auctor placerat.'
                },
                {
                  title: 'Pruba de Título 3',
                  date: 'Publicado el día: '+moment().date()+' de '+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis eget felis bibendum malesuada id a elit. Nam fringilla magna ac sapien gravida feugiat. Aenean ultricies tortor non dolor porttitor interdum. Nunc sit amet nunc mollis, tempor nisl a, aliquet nulla. Curabitur quis ligula hendrerit, feugiat arcu quis, elementum massa. Aliquam erat volutpat. Vivamus eget nibh nec magna porta sagittis. Sed et massa vitae libero auctor placerat.'
                },
                {
                  title: 'Pruba de Título 4',
                  date: 'Publicado el día: '+moment().date()+' de '+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis eget felis bibendum malesuada id a elit. Nam fringilla magna ac sapien gravida feugiat. Aenean ultricies tortor non dolor porttitor interdum. Nunc sit amet nunc mollis, tempor nisl a, aliquet nulla. Curabitur quis ligula hendrerit, feugiat arcu quis, elementum massa. Aliquam erat volutpat. Vivamus eget nibh nec magna porta sagittis. Sed et massa vitae libero auctor placerat.'
                },
                {
                  title: 'Pruba de Título 5',
                  date: 'Publicado el día: '+moment().date()+' de '+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu felis eget felis bibendum malesuada id a elit. Nam fringilla magna ac sapien gravida feugiat. Aenean ultricies tortor non dolor porttitor interdum. Nunc sit amet nunc mollis, tempor nisl a, aliquet nulla. Curabitur quis ligula hendrerit, feugiat arcu quis, elementum massa. Aliquam erat volutpat. Vivamus eget nibh nec magna porta sagittis. Sed et massa vitae libero auctor placerat.'
                }

              ];
              
              posts.forEach((item, index)=>{
                var post= `
                          <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                        ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                      </article>

            `;
                  $('#posts').append(post);
                      
              });
}
  // Selector de Tema
  var tema=$('#theme');

    $('#to-green').click(()=>{
      tema.attr("href", "css/green.css");
    });
      $('#to-blue').click(()=>{
      tema.attr("href", "css/blue.css");
    });
        $('#to-red').click(()=>{
      tema.attr("href", "css/red.css");
    });

// SCROLL ARRIBA DE LA WEB
  $('.subir').click((e)=>{
    e.preventDefault();
    $('html, body').animate({   // PARA SUBIR ARRIBA
      scrollTop: 0
    },500);
    return false;
  });

  // LOGIN FALSO

  $('#login form').submit(()=>{
    var form_name= $('#form_name').val();
    localStorage.setItem('form_name', form_name);

  });
  var form_name= localStorage.getItem('form_name');

  if(form_name!= null && form_name!='undefined'){
    var about_p=$('#about p');
  about_p.html('<br><strong>Bienvenido, '+form_name+'</strong>');
  about_p.append('<a href="#" id="logout"> Cerrar Sesión </a>');
  $('#login form').hide();
  $('#logout').click(()=>{
    localStorage.clear();
    location.reload();
  });

  }
  // ACORDEON

  if(window.location.href.indexOf('about')>-1){   /// CONDICION PARA VER SI EXISTE LA DIRECCION
    $('#acordeon').accordion();


  }
  // RELOJ
    if(window.location.href.indexOf('reloj')>-1){

      setInterval(()=>{
      var reloj= moment().format('hh:mm:ss');
      $('#reloj').html(reloj);

      },1000);
      // var reloj= moment().format('hh:mm:ss');
      // $('#reloj').html(reloj);
  
}

// VALIDACION
 if(window.location.href.indexOf('contact')>-1){
  $("form input[name='date']").datepicker({
    dateFormat: 'dd-mm-yy'
  });
  $.validate({
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });
}

});