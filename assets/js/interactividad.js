$(document).ready(function () {
  //TRACKING
  $("#audio1_pesv").on({
    play: function () {
      trackingManager.startTracking("audio1_pesv");
      trackingManager.stopTracking("audio1_pesv");
    },
  });

  $("#track2").on("click", function () {
    trackingManager.startTracking("track2");
    trackingManager.stopTracking("track2");
  });

  $("#track3").on("click", function () {
    trackingManager.startTracking("track3");
    trackingManager.stopTracking("track3");
  });

  $("#audio4_pesv").on({
    play: function () {
      trackingManager.startTracking("audio4_pesv");
      trackingManager.stopTracking("audio4_pesv");
    },
  });

  //track5
  $("#audio2_pesv").on({
    play: function () {
      trackingManager.startTracking("audio2_pesv");
      trackingManager.stopTracking("audio2_pesv");
    },
  });

  $("#track6").on("click", function () {
    trackingManager.startTracking("track6");
    trackingManager.stopTracking("track6");
  });

  //track7
  $("#audio1_factor").on({
    play: function () {
      trackingManager.startTracking("audio1_factor");
      trackingManager.stopTracking("audio1_factor");
    },
  });

  //track8
  $("#audio2_factor").on({
    play: function () {
      trackingManager.startTracking("audio2_factor");
      trackingManager.stopTracking("audio2_factor");
    },
  });

  //track9
  $("#audio1").on({
    play: function () {
      trackingManager.startTracking("audio1");
      trackingManager.stopTracking("audio1");
    },
  });

  $("#track10").on("click", function () {
    trackingManager.startTracking("track10");
    trackingManager.stopTracking("track10");
  });

  $("#track11").on("click", function () {
    trackingManager.startTracking("track11");
    trackingManager.stopTracking("track11");
  });


  $(".programas .nav-link").click(function () {
    // Pause all audio
    $(this)
      .closest(".d-flex")
      .find("audio")
      .each(function () {
        this.pause();
      });
    var targetId = $(this).attr("data-bs-target");
    $(targetId).find("audio").get(0).play();
  });

  $("#carouselExampleCaptions").carousel({
    interval: false, // Desactiva el cambio autom�tico de diapositivas
  });

  // Comportamiento de acorde�n en dispositivos m�viles
  $(".accordion-label").click(function () {
    $(this).siblings(".accordion-content").slideToggle();
  });

  setTimeout(() => {
    $(".actVorF .tol").html($(".itemQ").length);
  }, "2000");

  $("#drop1, #drop2, #drop3, #drop4, #drop5, #drop6").on(
    "droppable:drop",
    function (e) {
      $(this).addClass("corret");
      actualizarProgreso(); // Llama a la funci�n para actualizar el progreso
    }
  );

  $("#grupo_whatsapp").click(function () {
    window.open("https://chat.whatsapp.com/G91Vr9cBLlwAWaXGmS1cB9", "_blank");
  });

  var selects = document.querySelectorAll(".select-opcion");

  // Itera sobre cada select y agrega un evento de cambio
  selects.forEach(function (select) {
    select.addEventListener("change", function () {
      // Obt�n el valor y la imagen asociada de la opci�n seleccionada
      var selectedValue = select.value;
      var selectedImage =
        select.options[select.selectedIndex].getAttribute("data-image");

      // Obt�n la imagen dentro del div padre del select actual
      var image = select
        .closest(".actividad_slide_37")
        .querySelector(".img-estructura");

      // Cambia la fuente de la imagen seg�n la opci�n seleccionada
      image.src = "assets/img/" + selectedImage;
    });
  });

  // Guardar las im�genes originales de las im�genes draggables
  $(".actividadAimg").each(function () {
    var $listOpcDrag = $(this);
    $listOpcDrag.data("originalImages", $listOpcDrag.children().clone());
  });

  // Guardar las im�genes originales de las im�genes droppable
  $(".actividadBimg").each(function () {
    var $listOpcDrop = $(this);
    $listOpcDrop.data("originalImages", $listOpcDrop.children().clone());
  });

  //Actualizar el progreso del curso cada vez que se avanza en los slides
  $("#next").on("click", function () {
    updateProgress();
  });
  preguntas01();
  // preguntas02();
  audiosCarrusel();

  // firma();
  arrastrarElemento();
  arrastrarElemento2();
  arrastrarElemento3();
  // listaLlamadaIncorrecta();
  // listaLlamadaCorrecta();
  // actualizarGrafico();
  // actualizarGrafico2();
  pausarMultimedia();
  reproducirAudioImagen();
  carruselAudio();


  const audios = [
    { title: "1. Consumo de alcohol y drogas", src: "assets/audio/factor_1.mp3" },
    { title: "2. Seguridad en el trabajo", src: "assets/audio/factor_2.mp3" },
    { title: "3. Uso de cinturón de seguridad", src: "assets/audio/factor_3.mp3" },
    { title: "4. Uso de casco de motocicleta:", src: "assets/audio/factor_4.mp3" },
    { title: "5. Límites de velocidad y señales de tránsito", src: "assets/audio/factor_5.mp3" },
    { title: "6. Uso de elementos distractores:", src: "assets/audio/factor_6.mp3" }
  ];

  let currentAudioIndex = 0;
  const audioPlayer = document.getElementById("myAudio");
  const audioSource = document.getElementById("audioSource_sld9");
  const audioTitle = document.getElementById("audio-title");
  const startButton = document.getElementById("startButton");
  const audioControls = document.getElementById("audioControls");
  const prevButton = document.getElementById("prevAudio_sld9");
  const nextButton = document.getElementById("nextAudio_sld9");

  function updateAudio() {
    audioSource.src = audios[currentAudioIndex].src;
    audioTitle.textContent = audios[currentAudioIndex].title;
    audioPlayer.load(); // Carga el nuevo audio
    audioPlayer.play().then(() => {
      console.log("Reproducción iniciada correctamente.");
    }).catch(error => {
      console.error("Error al reproducir el audio:", error);
    });

    // Mostrar/Ocultar botones "Anterior" y "Siguiente" seg�n el �ndice actual
    if (currentAudioIndex === 0) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'inline-block';
    } else if (currentAudioIndex === audios.length - 1) {
      prevButton.style.display = 'inline-block';
      nextButton.style.display = 'none';
    } else {
      prevButton.style.display = 'inline-block';
      nextButton.style.display = 'inline-block';
    }
  }

  startButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    audioControls.style.display = 'block';
    updateAudio();
  });

  prevButton.addEventListener("click", () => {
    if (currentAudioIndex > 0) {
      currentAudioIndex--;
      updateAudio();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentAudioIndex < audios.length - 1) {
      currentAudioIndex++;
      updateAudio();
    }
  });



   /* Caja de cambios 11 */
   const gears = document.querySelectorAll(".gear");
   const boxes = document.querySelectorAll(".box-cambio");
  //  const audios = document.querySelectorAll(".track-element");
 
   // Agregar evento clic a los botones de la caja de cambios
   gears.forEach((gear) => {
     gear.addEventListener("click", function () {
       const gearNumber = this.getAttribute("data-gear");
       const audioId = `audio${gearNumber}_factor`; // ID del audio actualizado
       const boxToHighlight = document.getElementById(`box${gearNumber}`);
 
       // Reproducir audio correspondiente
       playGearSound(audioId);
 
       // Resaltar box en color amarillo y cambiar el color del texto a negro
       boxes.forEach((box) => {
         box.classList.remove("active");
         const paragraph = box.querySelector("p");
         if (paragraph) {
           paragraph.style.color = ""; // Restaurar color del texto
         }
       });
       if (boxToHighlight) {
         boxToHighlight.classList.add("active");
         const paragraph = boxToHighlight.querySelector("p");
         if (paragraph) {
           paragraph.style.color = "#000"; // Cambiar color del texto a negro
         }
       }
 
       // Agregar clase activa al bot�n de la caja de cambios
       gears.forEach((g) => g.classList.remove("active"));
       this.classList.add("active");
     });
   });
 
   // Agregar evento clic a los elementos de audio
  //  audios.forEach((audio) => {
  //    audio.addEventListener("play", function () {
  //      // pauseOtherAudios(audio);
  //    });
  //  });
 
   function playGearSound(audioId) {
     const audio = document.getElementById(audioId);
     if (audio) {
       console.log(`Reproduciendo audio: ${audioId}`);
       audio.currentTime = 0; // Reiniciar el audio
       audio.play();
     }
   }
 
   function pauseOtherAudios(currentAudio) {
    //  audios.forEach((audio) => {
    //    if (audio !== currentAudio) {
    //      audio.pause();
    //    }
    //  });
   }

});


var audioActual = null;
function carruselAudio(){
       $('.slider-right,.slider-left').click(function() {
        let  slideActivo = $('.slider-content').find('.active');
        if (slideActivo.length > 0) {
            if (audioActual !== null) {
                audioActual.pause(); 
            }
            let regla = slideActivo.data('regla');
            let audioPath = 'assets/audio/sld17_' + regla + '.MP3';
            let nuevoAudio = new Audio(audioPath);
            nuevoAudio.play(); 
            audioActual = nuevoAudio;
        }

        $('#next,#prev').click(function() {
            if (audioActual !== null && !audioActual.paused) {
                audioActual.pause();
            }
        });
        
    });
}

function firma() {
  var canvas = document.getElementById("firmaCanvas");
  var signaturePad = new SignaturePad(canvas);

  // Para borrar la firma
  $("#borrarFirmaBtn").on("click", function () {
    signaturePad.clear();
  });
}

function audiosCarrusel() {
  function setupCarouselAudio(carouselId, audioClass) {
    var carousel = $(carouselId);
    var audioCarrusel = $(audioClass);

    carousel.on("slid.bs.carousel", function () {
      var activeSlideIndex = carousel.find(".carousel-item.active").index();

      // Pausar todos los audios en los dem�s carousels
      $(".carouselExampleCaptions").each(function (index, element) {
        if (element !== carousel[0]) {
          $(element).find(".audioCarrusel").each(function () {
            this.pause();
            this.currentTime = 0;
          });
        }
      });

      // Reproducir el audio del slide activo si est� disponible
      var activeAudio = audioCarrusel.eq(activeSlideIndex).get(0);
      if (activeAudio) {
        activeAudio.play().catch(function (error) {
          console.log("Error al reproducir el audio:", error);
        });
      }
    });

    // Controlar los botones de siguiente y anterior
    carousel.on("click", ".carousel-control-next", function () {
      // Pausar todos los audios en los dem�s carousels
      $(".carouselExampleCaptions").each(function () {
        $(this).find(".audioCarrusel").each(function () {
          this.pause();
          this.currentTime = 0;
        });
      });
    });

    carousel.on("click", ".carousel-control-prev", function () {
      // Pausar todos los audios en los dem�s carousels
      $(".carouselExampleCaptions").each(function () {
        $(this).find(".audioCarrusel").each(function () {
          this.pause();
          this.currentTime = 0;
        });
      });
    });
  }

  setupCarouselAudio("#carouselExampleCaptions", ".audioCarruselAntes");
  setupCarouselAudio("#carouselExampleCaptions_2", ".audioCarruselDurante");
}

$("#video_slide_09").on({
  play: function () {
    trackingManager.startTracking("video_slide_09");
    trackingManager.stopTracking("video_slide_09");
  },
});

let currentAudio = null;

function playAudio(audioId) {
  const audioElement = document.getElementById(audioId);

  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause();
  }
  audioElement.play();
  currentAudio = audioElement;
}

function reproducirAudioImagen() {
  var audioActual = null;
  let rutaActual = "";
  var elementosInline = document.querySelectorAll(".inline");

  elementosInline.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      let rutaAudio = elemento.getAttribute("data-audio");

      if (audioActual !== null) {
        audioActual.pause();
      }

      let nuevoAudio = new Audio(rutaAudio);

      if (rutaAudio === rutaActual) {
        nuevoAudio.pause();
      } else {
        nuevoAudio.play();
        audioActual = nuevoAudio;
        rutaActual = rutaAudio;
      }

      $("#prev, #next").on("click", function () {
        nuevoAudio.pause();
      });
    });
  });
}

//Para generar el TOOLTIP para riesgos
$(function () {
  for (var count = 1; count <= 9; count++) {
    $("#boton-riesgos-" + count).each(function () {
      var descripcion;
      switch ($(this).attr("value")) {
        case "1":
          descripcion =
            "Ruido, iluminación, Vibración, Temperaturas extremas (Frio y calor).";
          break;
        case "2":
          descripcion =
            "Elementos o partes de maquinaria, herramientas, equipos.";
          break;
        case "3":
          descripcion =
            "Polvos, Líquidos, Gases y vapores, material particulado.";
          break;
        case "4":
          descripcion = "Alta y baja tensión.";
          break;
        case "5":
          descripcion =
            "Posturas prolongadas, esfuerzo, movimiento repetitivo.";
          break;
        case "6":
          descripcion = "Virus, Bacterias, Hongos, Picaduras, Mordeduras.";
          break;
        case "7":
          descripcion = "Pendiente";
          break;
        case "8":
          descripcion =
            "Estilo de mando, Pago, carga mental, rotación, horas extras.";
          break;
        case "9":
          descripcion = "Sismo, terremoto, inundación, Derrumbes.";
          break;
      }
      $(this).attr("title", descripcion).tooltip({
        html: true,
        track: true,
      });
    });
  }
});


var currentQuestion = 1; // Variable para rastrear la pregunta actual
var results = [];
var elements = [];
var results2 = [];
var elements2 = [];

document.addEventListener("DOMContentLoaded", function() {
    preguntas01();
});

function preguntas01() {
    var video = document.getElementById("preguntas_01");
    var actividad_h_01 = document.getElementById("actividad_h_01");

    video.addEventListener("timeupdate", function() {
        var currentTime = video.currentTime;
        if (currentQuestion === 1 && currentTime >= 60) {
            actividad_h_01.style.display = "block";
        }
    });

    video.addEventListener("ended", function() {
        var currentTime = video.currentTime;
        if (currentQuestion === 1 && currentTime >= video.duration) {
            actividad_h_01.style.display = "block";
        }
    });

    video.addEventListener("seeked", function() {
        var currentTime = video.currentTime;
        if (currentQuestion === 1 && currentTime >= 60 && !video.paused) {
            actividad_h_01.style.display = "block";
        }
    });
}

function Questions(el, e) {
    var index = elements.indexOf(el);
    if (index === -1) {
        elements.push(el);
        results.push(e);
        $(el).addClass("act");
    } else {
        elements.splice(index, 1);
        results.splice(index, 1);
        $(el).removeClass("act");
    }
}

function valid(numCorrect) {
    var correctCount = 0;

    if (elements.length === 0) {
        $("#respuesta_mal").html("No se seleccionó ninguna respuesta.").show();
        return;
    }

    if (elements.length > 3) {
        $("#respuesta_mal").html("Solo puedes seleccionar 3 respuestas.").show();
        return;
    }

    for (var i = 0; i < elements.length; i++) {
        if (results[i]) {
            $(elements[i]).addClass("true").append("<span class='mensajeCorrecto'> ¡Correcto!</span>");
            correctCount++;
        } else {
            $(elements[i]).addClass("false").append("<span class='mensajeIncorrecto'> ¡Incorrecto!</span>");
        }
    }

    // Ocultar mensaje de respuesta correcta y respuesta incorrecta
    $("#respuesta").hide();
    $("#respuesta_mal").hide();

    // Mostrar bot�n de siguiente independientemente del n�mero de respuestas correctas
    $("#btn-valid").hide(); // Ocultar bot�n de validar
    $("#siguiente").show(); // Mostrar bot�n de siguiente
    $("#siguiente").click(function() {
        mostrarSiguiente('actividad_h_01', 'actividad_h_02');
    });

    let correct = correctCount;
    let total = 3;
    let percentage_actividad = (correct / total) * 100;
    let activity_id = 2;

    getProgressActivity(userId, courseId, module_id, fullName, percentage_actividad, activity_id, correct, total);
    
}

function mostrarSiguiente(actividadActual, siguienteElemento) {
    if (actividadActual === "actividad_h_01") {
        // Ocultar la pregunta actual (actividad 1)
        $("#" + actividadActual).hide();

        // Mostrar la siguiente pregunta (actividad 2)
        $("#actividad_h_02").show();
    } else if (actividadActual === "actividad_h_02") {
        // Ocultar la pregunta actual (actividad 2)
        $("#" + actividadActual).hide();

        // Mostrar el contenedor de resultados
        $("#" + siguienteElemento).show();
    }
}

function Questions2(el, e) {
    var index = elements2.indexOf(el);
    if (index === -1) {
        elements2.push(el);
        results2.push(e);
        $(el).addClass("act");
    } else {
        elements2.splice(index, 1);
        results2.splice(index, 1);
        $(el).removeClass("act");
    }
}

function valid2(numCorrect) {
    var correctCount = 0;

    if (elements2.length === 0) {
        $("#respuesta_mal2").html("No se seleccionó ninguna respuesta.").show();
        return;
    }

    if (elements2.length > 3) {
        $("#respuesta_mal2").html("Solo puedes seleccionar 3 respuestas.").show();
        return;
    }

    for (var i = 0; i < elements2.length; i++) {
        if (results2[i]) {
            $(elements2[i]).addClass("true").append("<span class='mensajeCorrecto'> ¡Correcto!</span>");
            correctCount++;
        } else {
            $(elements2[i]).addClass("false").append("<span class='mensajeIncorrecto'> ¡Incorrecto!</span>");
        }
    }

    // Ocultar mensaje de respuesta correcta y respuesta incorrecta
    $("#respuesta2").hide();
    $("#respuesta_mal2").hide();

    // Mostrar bot�n de siguiente independientemente del n�mero de respuestas correctas
    $("#btn-valid2").hide(); // Ocultar bot�n de validar
    $("#verResultadoButton").show(); // Mostrar bot�n de siguiente
    $("#verResultadoButton").click(function() {
        mostrarResultados();
    });

    let correct = correctCount;
    let total = 3;
    let percentage_actividad = (correct / total) * 100;
    let activity_id = 3;

    getProgressActivity(userId, courseId, module_id, fullName, percentage_actividad, activity_id, correct, total);
    
}

function mostrarResultados() {
    // Ocultar la pregunta actual (actividad 2)
    $("#actividad_h_02").hide();

    // Mostrar el contenedor de resultados
    $("#verResultado").show();

    // Mostrar bot�n de reiniciar actividad completa
    $("#reiniciarFinal").show();

    // Mostrar resultados con formato y estilos seg�n las respuestas correctas
    var correctCount1 = results.filter(Boolean).length;
    var correctCount2 = results2.filter(Boolean).length;

    var resultado1 = "<span style='color: gray;'>El resultado de la pregunta 1 es </span>" + correctCount1 + "/3 respuestas correctas";
    var resultado2 = "<span style='color: gray;'>El resultado de la pregunta 2 es </span>" + correctCount2 + "/3 respuestas correctas";

    $("#resultado-1").html(resultado1);
    $("#resultado-2").html(resultado2);

    if (correctCount1 >= 3) {
        $("#resultado-1").css("color", "green");
    } else {
        $("#resultado-1").css("color", "red");
    }

    if (correctCount2 >= 3) {
        $("#resultado-2").css("color", "green");
    } else {
        $("#resultado-2").css("color", "red");
    }

    $(".titulo_activida_01").hide(); // Ocultar el texto inicial al mostrar los resultados
}

function reiniciarActividad(el, resultsArray, numCorrect, questionNumber) {
    if (questionNumber === 1) {
        elements = [];
        results = [];
        currentQuestion = 1;

        // Reiniciar clases y estados visuales de la pregunta 1
        el.find("p").each(function() {
            $(this).removeClass("true false act");
            $(this).text($(this).text().replace(" ¡Correcto!", "").replace(" ¡Incorrecto!", ""));
        });
        $("#respuesta").hide();
        $("#respuesta_mal").hide();
        $("#btn-valid").show();
        $("#reiniciar").hide();
        $("#siguiente").hide();

        // Mostrar la primera actividad y el texto inicial
        el.show();
        $(".titulo_activida_01").show();
    } else if (questionNumber === 2) {
        elements2 = [];
        results2 = [];

        // Reiniciar clases y estados visuales de la pregunta 2
        el.find("p").each(function() {
            $(this).removeClass("true false act");
            $(this).text($(this).text().replace(" ¡Correcto!", "").replace(" ¡Incorrecto!", ""));
        });
        $("#respuesta2").hide();
        $("#respuesta_mal2").hide();
        $("#btn-valid2").show();
        $("#reiniciar2").hide();
        $("#verResultadoButton").hide();

        // Mostrar la segunda actividad
        el.show();
    }
}

function reiniciarActividadCompleta() {
    elements = [];
    results = [];
    elements2 = [];
    results2 = [];
    currentQuestion = 1;

    // Reiniciar clases y estados visuales de la pregunta 1
    $(".ctItem#actividad_h_01 p").each(function() {
        $(this).removeClass("true false act");
        $(this).text($(this).text().replace("¡Correcto!", "").replace("¡Incorrecto!", ""));
    });
    $("#respuesta").hide();
    $("#respuesta_mal").hide();
    $("#btn-valid").show();
    $("#reiniciar").hide();
    $("#siguiente").hide();

    // Reiniciar clases y estados visuales de la pregunta 2
    $(".ctItem#actividad_h_02 p").each(function() {
        $(this).removeClass("true false act");
        $(this).text($(this).text().replace("¡Correcto!", "").replace("¡Incorrecto!", ""));
    });
    $("#respuesta2").hide();
    $("#respuesta_mal2").hide();
    $("#btn-valid2").show();
    $("#reiniciar2").hide();
    $("#verResultadoButton").hide();

    // Ocultar resultados finales
    $("#verResultado").hide();

    // Mostrar la primera actividad y el texto inicial
    $("#actividad_h_01").show();
    $(".titulo_activida_01").show();
}

function listaLlamadaIncorrecta() {
  let incorrect = document.getElementById("llamada-incorrecta");
  let listItems = document.querySelectorAll(".custom-list-incorrect li");

  let selectedLi = null;

  function clickli(event) {
    const selectedIndex = Array.from(listItems).indexOf(event.currentTarget);

    const existingIcon = event.currentTarget.querySelector(".fa");
    const existingBadge = event.currentTarget.querySelector(".badge");

    if (existingIcon) {
      event.currentTarget.removeChild(existingIcon);
    }
    if (existingBadge) {
      event.currentTarget.removeChild(existingBadge);
    }

    if (selectedIndex === 0 || selectedIndex === 2) {
      // event.currentTarget.classList.add("active");
      // event.currentTarget.style.backgroundColor = "#89cf89";
      const checkIcon = document.createElement("i");
      checkIcon.className = "fa fa-check";
      checkIcon.style.color = "#009200";
      checkIcon.setAttribute("aria-hidden", "true");
      event.currentTarget.insertBefore(
        checkIcon,
        event.currentTarget.firstChild
      );
    } else {
      // event.currentTarget.classList.add("desactive");
      // event.currentTarget.style.backgroundColor = "#db8a8a";
      const checkIcon = document.createElement("i");
      checkIcon.className = "fa fa-question";
      checkIcon.style.color = "#df2828";
      checkIcon.setAttribute("aria-hidden", "true");
      event.currentTarget.insertBefore(
        checkIcon,
        event.currentTarget.firstChild
      );
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.innerText = "Faltante";
      badge.style.backgroundColor = "#EF455F";
      badge.style.borderRadius = "9px";
      badge.style.padding = "6px";
      badge.style.margin = "6px";
      event.currentTarget.appendChild(badge);
    }

    selectedLi = selectedIndex;
  }

  incorrect.addEventListener("play", function () {
    textoIncorrecto = $("#textoIncorrecto");
    textoIncorrecto.css("display", "block");
    listItems.forEach((item, index) => {
      item.style.display = "block";
      item.addEventListener("click", clickli);
    });
  });
}

function listaLlamadaCorrecta() {
  const correct = document.getElementById("llamada-correcta");
  const listItems = document.querySelectorAll(".custom-list-correct li");

  const cues = [
    { time: 0, index: 0 },
    { time: 8, index: 1 },
    { time: 12, index: 2 },
    { time: 20, index: 3 },
    { time: 25, index: 4 },
    { time: 30, index: 5 },
    { time: 35, index: 6 },
    { time: 39, index: 7 },
  ];

  const executedCues = {};

  correct.addEventListener("timeupdate", function () {
    const currentTime = Math.floor(correct.currentTime);
    cues.forEach((cue) => {
      if (currentTime === cue.time && !executedCues[cue.index]) {
        listItems[cue.index].style.display = "block";
        listItems[cue.index].classList.add("active");
        const checkIcon = document.createElement("i");
        checkIcon.className = "fa fa-check";
        checkIcon.style.color = "#009200";
        checkIcon.setAttribute("aria-hidden", "true");
        listItems[cue.index].insertBefore(
          checkIcon,
          listItems[cue.index].firstChild
        );
        executedCues[cue.index] = true;
      }
    });
  });
}

function updateProgress() {
  let code_course = $("#course_code").val();
  let module_id = $("#module_id").val();
  $.ajax({
    type: "POST",
    url: "../../../functions_helpers.php?progress_courses",
    dataType: "json",
    data: {
      code_course: code_course,
      module_id: module_id,
    },
    success: function (result) {
      let courseProgress = result.course_progress;

      if (courseProgress === null || courseProgress === undefined) {
        $("#course-progress").html("<strong>0.0%</strong>");
      } else {
        $("#course-progress").html("<strong>" + courseProgress + "%</strong>");
      }
    },
  });
}

function reproducirAudioImagen() {
  var audioActual = null;
  let rutaActual = "";
  var elementosInline = document.querySelectorAll(".inline-3");

  elementosInline.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      let rutaAudio = elemento.getAttribute("data-audio");

      if (audioActual !== null) {
        audioActual.pause();
      }

      let nuevoAudio = new Audio(rutaAudio);

      if (rutaAudio === rutaActual) {
        nuevoAudio.pause();
      } else {
        nuevoAudio.play();
        audioActual = nuevoAudio;
        rutaActual = rutaAudio;
      }

      $("#prev, #next").on("click", function () {
        nuevoAudio.pause();
      });
    });
  });
}

let videoInterval;
let loopVideoControlled = false;

function verificarLoopVideo() {
  clearInterval(videoInterval);

  videoInterval = setInterval(function () {
    var backgroundVideo = document.getElementById('background-video_sld9');
    if (backgroundVideo && backgroundVideo.paused && !loopVideoControlled) {
      backgroundVideo.play();
    }
  }, 100);
}

function detenerLoopVideo() {
  clearInterval(videoInterval);
  var backgroundVideo = document.getElementById('background-video_sld9');
  if (backgroundVideo && !backgroundVideo.paused) {
    backgroundVideo.pause();
  }
}

function pausarMultimedia() {
  var allMediaElements = document.querySelectorAll("audio, video");

  allMediaElements.forEach(function (mediaElement) {
    mediaElement.addEventListener("play", function () {
      allMediaElements.forEach(function (otherMediaElement) {
        if (otherMediaElement != mediaElement && !otherMediaElement.paused && !otherMediaElement.classList.contains('audioCarrusel')) {
          otherMediaElement.pause();
        }
      });

      // Si se est� reproduciendo otro elemento multimedia, controlar el video en loop
      if (mediaElement.id !== 'background-video_sld9') {
        loopVideoControlled = true;
        detenerLoopVideo();
      }
    });
  });

  // Funcionalidad que permite pausar los elementos multimedias que se est�n reproduciendo
  $("#prev, #next, button:not(.carousel-control-prev, .carousel-control-next)").on("click", function () {
    let allMediaElements = $("audio, video");
    // Pausar cada elemento multimedia
    allMediaElements.each(function () {
      if (!this.paused && !$(this).hasClass('audioCarrusel')) {
        this.pause();
      }
    });

    // Controlar el video en loop al hacer clic en prev, next o button
    loopVideoControlled = true;
    detenerLoopVideo();
  });
}

function playVideoInterval() {
  const videoBackground = document.querySelector(".video-background");
  const videoElement = document.createElement("video");
  videoElement.autoplay = true;
  videoElement.loop = true;

  const sourceElement = document.createElement("source");
  sourceElement.src = "assets/video/miningprocess.mp4";
  sourceElement.type = "video/mp4";

  videoElement.appendChild(sourceElement);
  videoBackground.appendChild(videoElement);
  videoElement.play();
}

function reiniciarActividadGrafico(el) {
  corret = 0;
  completion2 = 0.0;
  actualizarGrafico2();
  $(".actFin").hide();
  $(".btn-reintentar").hide();
  $(".itemQ").removeClass("hideT view");
  $(".itemQ").removeClass("view");

  $(el).parents(".itemQ").addClass("hideT");
  $(".actVorF .inc").html(1);

  let view = ".actVorF > div:nth-child(2)";
  $(view).addClass("view");

  let imgPaths = [
    "assets/img/copasst/copasst-1.png",
    "assets/img/copasst/copasst-2.png",
    "assets/img/copasst/copasst-3.png",
    "assets/img/copasst/copasst-4.png",
    "assets/img/copasst/copasst-5.png",
    "assets/img/copasst/copasst-6.png",
    "assets/img/copasst/numero-7.png",
  ];

  // Actualizar las im�genes una por una en el orden deseado
  $(".itemQ").each(function (index) {
    let imgID = "#img-copast-0" + (index + 1);
    $(imgID).attr("src", imgPaths[index]);
  });
}

let completion2 = 0.0;
const totalElements2 = 6; // N�mero total de elementos a arrastrar
const borderWidth2 = 15; // Ancho del borde

// actividad preguntas y validacion de botones verdadero y falso, boton de reiniciar
function actualizarGrafico2() {
  const canvas = document.getElementById("donutChart02");

  if (!canvas) {
    console.error("No se encontró el elemento canvas con ID 'donutChart02'");
    return;
  }

  const context = canvas.getContext("2d");
  const borderWidth2 = 10; // Ajusta el grosor del borde seg�n sea necesario

  context.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja el c�rculo amarillo en el borde
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80; // Radio del c�rculo
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + 2 * Math.PI;

  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.lineWidth = borderWidth2;
  context.strokeStyle = "white"; // Color del borde amarillo
  context.stroke();

  // Dibuja la parte que se va llenando en blanco
  const filledEndAngle = startAngle + 2 * Math.PI * (completion2 / 100);

  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, filledEndAngle);
  context.lineWidth = borderWidth2;
  context.strokeStyle = "yellow"; // Color de la parte llena en blanco
  context.stroke();

  // Muestra el porcentaje en el centro
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(completion2.toFixed(1) + "%", centerX, centerY);
}

// Actualiza el progreso y el gr�fico cuando se realiza una acci�n de arrastre correcta
function actualizarProgreso2(el) {
  if (completion2 < 100) {
    completion2 += 100 / totalElements2;
    if (completion2 > 100) {
      completion2 = 100;
    }
    actualizarGrafico2();
  }
}


let corret = 0;

function actVorF(el, res) {
  $(".actVorF button").attr("disabled", "disabled");
  //mostrar respuesta
  if (res == "correct") {
    $(el).parents(".itemQ").find("img").attr("src", "assets/img/true.jpg");
    corret = corret + 1;
    actualizarProgreso2();
  } else {
    $(el).parents(".itemQ").find("img").attr("src", "assets/img/false.jpg");
  }

  setTimeout(() => {
    $(el).parents(".itemQ").addClass("hideT");
    $(".actVorF .inc").html($(".hideT").length + 1);
    //mostrar la siguiente pregunta
    $(".itemQ").removeClass("view");
    let view = ".actVorF > div:nth-child(" + ($(".hideT").length + 2) + ")";
    $(view).addClass("view");
    // mostrar resultados finales
    if ($(".itemQ").length == $(".hideT").length) {
      $(".actVorF .inc").html($(".hideT").length);
      $(".actFin").show();
      $(".btn-reintentar").show();
      $(".actFin .p-res").css("font-size", "30px");
      $(".actFin .p-res").css("text-align", "center");
      $(".actFin h1").css("text-align", "center");
      $(".actFin button").css("text-align", "center");
      $(".actFin h1").html(corret + " de " + $(".itemQ").length);
      $("#next").removeAttr("disabled").removeAttr("style");
      localStorage.setItem("slider28", "ok");
    }
    $(".actVorF button").removeAttr("disabled");
  }, "1000");

  let correct = corret;
  let total = 7;
  let percentage_actividad = (correct / total) * 100;
  let activity_id = 4;

  getProgressActivity(userId, courseId, module_id, fullName, percentage_actividad, activity_id, correct, total);
  
}

const titles = document.querySelectorAll(".rulest h4");
const image = document.querySelector("#img_slide12");
const audio_slide_12 = new Audio();
let currentIndex = -1;
let prev = false;

function prevSlide() {
  currentIndex = (currentIndex - 1 + titles.length) % titles.length;
  updateSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % titles.length;
  updateSlide();
  prev = true;
}

function updateSlide() {
  // Remover el fondo resaltado de todos los t�tulos
  titles.forEach((title) => {
    title.style.backgroundColor = "transparent";
    title.style.border = "transparent";
    title.style.borderRadius = "10px";
    title.classList.remove("back-color-12-reglas-2");
    title.classList.add("back-color-12-reglas");
    title.querySelector("span").style.color = "var(--grey)";
  });

  // Resaltar el t�tulo actual
  titles[currentIndex].style.backgroundColor = "rgba(0, 122, 243, 0.20)";
  titles[currentIndex].style.backgroundColor = "var(--grey)";
  titles[currentIndex].querySelector("span").style.color = "var(--primary)";
  // console.log(titles[currentIndex]);
  titles[currentIndex].classList.remove("back-color-12-reglas");
  titles[currentIndex].classList.add("back-color-12-reglas-2");
  // Cambiar la imagen
  const newImageSrc = `assets/img/${titles[currentIndex]
    .getAttribute("data-title")
    .toLowerCase()}.webp`;
  image.src = newImageSrc;
  image.style.cursor = "pointer";
  // Detener la reproducci�n actual y reproducir el nuevo audio
  audio_slide_12.pause();
  audio_slide_12.src = `assets/audio/${titles[currentIndex]
    .getAttribute("data-title")
    .toLowerCase()}.mp3`;
  audio_slide_12.play();

  image.addEventListener("click", function () {
    if (audio_slide_12.paused) {
      audio_slide_12.play();
    } else {
      audio_slide_12.pause();
    }
  });

  $("#prev, #next").on("click", function () {
    audio_slide_12.pause();
  });

  //Subtitulo dinamico
  data_title_actual = titles[currentIndex]
    .getAttribute("data-title")
    .toLowerCase();

  $("#p-12-reglas").hide();

  /*var sub12Reglas = {
    'slide12_01': [
      'Pres�ntese a su turno de trabajo en buenas condiciones f�sicas y mentales.',
      'Reporte si alguien no se encuentra en condiciones para trabajar.',
      'Inicie su turno con calentamiento f�sico.'
    ],
    'slide12_02': [
      'Diligencie el ATS (An�lisis de Trabajo Seguro) previo a la realizaci�n de cada actividad.',
      'Garantice que trabajos de alto riesgo contengan el permiso de trabajo.',
      'Reporte condiciones de peligro presentes en su puesto de trabajo al supervisor.'
    ],
    'slide12_03': [
      'Solicite su dotaci�n y EPP a tiempo y en los horarios estipulados.',
      'Use la dotaci�n y los Elementos de Protecci�n Personal (EPP), de acuerdo a los riesgos de la actividad a ejecutar.',
      'Conserve en buen estado la dotaci�n y los EPP, reempl�celos cada que est�n deteriorados.'
    ],
    'slide12_04': [
      'Diligencie la inspecci�n preoperacional antes de operar cualquier veh�culo, m�quina, equipo o herramienta.',
      'Garantice las condiciones de aseo y limpieza en todos los lugares.',
      'Evite ingresar a zonas restringidas, selladas, abandonadas o con barreras.'
    ],
    'slide12_05': [
      'Cumpla con la condici�n �Metro avanzado, metro sostenido�.',
      'Ejecute el ABC Minero (ventile, riegue y desabombe).',
      'Verifique condiciones de techos y paredes antes de iniciar labores.'
    ],
  };*/

  $(".listadoreglas").empty();

  if (data_title_actual in sub12Reglas) {
    sub12Reglas[data_title_actual].forEach((regla) => {
      $(".listadoreglas").append(`<li>${regla}</li>`);
    });
  }
  $(".listadoreglas").show();
}

let completion = 0.0;
const totalElements = 6; // N�mero total de elementos a arrastrar
const borderWidth = 10; // Ancho del borde

function actualizarGrafico() {
  const canvas = document.getElementById("donutChart01");
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja el c�rculo amarillo en el borde
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80; // Radio del c�rculo
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + 2 * Math.PI;

  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.lineWidth = borderWidth;
  context.strokeStyle = "white"; // Color del borde amarillo
  context.stroke();

  // Dibuja la parte que se va llenando en blanco
  const filledEndAngle = startAngle + 2 * Math.PI * (completion / 100);

  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, filledEndAngle);
  context.lineWidth = borderWidth;
  context.strokeStyle = "yellow"; // Color de la parte llena en blanco
  context.stroke();

  // Muestra el porcentaje en el centro
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(completion.toFixed(1) + "%", centerX, centerY);
}

// Actualiza el progreso y el gr�fico cuando se realiza una acci�n de arrastre correcta
function actualizarProgreso() {
  if (completion < 100) {
    completion += 100 / totalElements;
    if (completion > 100) {
      completion = 100;
    }
    actualizarGrafico();
  }
}

function changeImage(element, newSrc) {
  const image = element.querySelector("img");
  image.src = newSrc;
}

function arrastrarElemento() {
  // Logica para la actividad (SLIDE 6)
  // item 1
  $("#drag1").draggable({
    revert: "invalid",
    snap: "#drop1",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop1")
    .droppable({
      accept: "#drag1",
    })
    .on("droppable:drop", function (e) {
      console.log("ENTRAA AQUII");
      $(this).addClass("corret");
    });

  // item 2
  $("#drag2").draggable({
    revert: "invalid",
    snap: "#drop2",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop2")
    .droppable({
      accept: "#drag2",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("corret");
    });

  // item 3
  $("#drag3").draggable({
    revert: "invalid",
    snap: "#drop3",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop3")
    .droppable({
      accept: "#drag3",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("corret");
    });

  // item 4
  $("#drag4").draggable({
    revert: "invalid",
    snap: "#drop4",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop4")
    .droppable({
      accept: "#drag4",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("corret");
    });

  // item 4
  $("#drag5").draggable({
    revert: "invalid",
    snap: "#drop5",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop5")
    .droppable({
      accept: "#drag5",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("corret");
    });

  // item 4
  $("#drag6").draggable({
    revert: "invalid",
    snap: "#drop4",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop6")
    .droppable({
      accept: "#drag6",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("corret");
    });
}

/*slide botones laterla */
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var producto = urlParams.get("color");
$("body").removeClass().addClass(producto);

/*logica actividad arrastrar*/
$(function () {
  $("#actOrderElement").sortable();
});

function actOrderElement() {
  for (var i = 1; i <= $("#actOrderElement li").length; i++) {
    if ($("#actOrderElement li:nth-child(" + i + ")").attr("value") == i) {
      $("#actOrderElement li:nth-child(" + i + ") img").addClass("correct");
      $("#actOrderElement li:nth-child(" + i + ") .ico").attr(
        "src",
        "../img/checkAct.png"
      );
    } else {
      $("#actOrderElement li:nth-child(" + i + ") img").addClass("incorrect");
      $("#actOrderElement li:nth-child(" + i + ") .ico").attr(
        "src",
        "../img/xmarkAct.png"
      );
    }
  }
}

/*Logica de actividad si es correcto o incorrecto*/
function actSelectImg(el, data) {
  $(el)
    .addClass(data)
    .find(".resAct")
    .attr("src", "assets/img/" + data + ".png");
  var textoDinamico = $(el).attr("data-texto");
  if (data == "checkAct") {
    $("#correctIncorrect").text(
      "¡ES CORRECTO!.  Este es un riesgo identificado de la " +
        textoDinamico +
        " a lo que la compañía podrá estar expuesta"
    );
    $(".correctIncorrect")
      .removeClass("incorrecto")
      .addClass("correcto")
      .show();
  } else {
    $("#correctIncorrect").text(
      "¡PIENSALO BIEN! Este NO es un riesgo. " + textoDinamico + ""
    );
    $(".correctIncorrect")
      .removeClass("correcto")
      .addClass("incorrecto")
      .show();
  }
}

//Para reiniciar las actividades de tipo seleccion multiple, arrastras e imagenes verdaderas o falsas
function reiniciarActividad(actividad = "",posicionesIniciales = "",tipo = 0,idActividad = 0) {
  if (tipo == 1) {
    actividad.find("li img").removeClass("correct incorrect");
    actividad.find("li .ico").removeAttr("src");

    var elementosOrdenados = posicionesIniciales.map(function (pos) {
      return actividad.find("li[value='" + pos + "']")[0];
    });

    actividad.empty().append(elementosOrdenados);
  }

  //Multiple Respuestas
  if (tipo == 2) {
    actividad = $("#actividad_h_0" + idActividad);
    if (idActividad == 1) {
      elements = [];
      results = [];
      correctCount = 0;
      actividad.find(".act").removeClass("act");
      actividad.find(".true").removeClass("true");
      actividad.find(".false").removeClass("false");
      $("#btn-valid").show();
      $("#respuesta").hide();
      $("#respuesta_mal").hide();
      $("#reiniciar").hide();
      $("#btn-valid").show();
    } else {
      elements = "elements" + idActividad;
      this[elements] = [];

      results = "results" + idActividad;
      this[results] = [];

      correctCount = "correctCount" + idActividad;
      this[correctCount] = 0;

      actividad.find(".act").removeClass("act");
      actividad.find(".true").removeClass("true");
      actividad.find(".false").removeClass("false");
      $("#btn-valid" + idActividad).show();
      $("#respuesta" + idActividad).hide();
      $("#respuesta_mal" + idActividad).hide();
      $("#reiniciar" + idActividad).hide();
      $("#btn-valid" + idActividad).show();
    }
  }

  //Seleccionar la imagen correcta
  if (tipo == 3) {
    $(".itemAct").removeClass("checkAct xmarkAct");
    $(".itemAct .resAct").attr("src", "");
    $(".correctIncorrect").hide();
  }

  //arrastrar imagen al cuadrado
  if (tipo == 4) {
    // Eliminar clases 'correct'
    actividad.find(".actividadBimg div").removeClass("correct");

    // Restablecer las im�genes draggables a su estado original
    actividad.find(".actividadBimg").each(function () {
      var $listOpcDragOriginal = $(this);
      var originalImages = $listOpcDragOriginal.data("originalImages");
      $listOpcDragOriginal.empty().append(originalImages);
    });

    // Restablecer las im�genes droppable a su estado original
    actividad.find(".actividadAimg").each(function () {
      var $listOpcDropOriginal = $(this);
      var originalImages = $listOpcDropOriginal.data("originalImages");
      $listOpcDropOriginal.empty().append(originalImages);
    });
    arrastrarElemento2();
  }
}

/*activida de arrastrr y soltar*/
// item 11
function arrastrarElemento2() {
  $("#drag11").draggable({
    revert: "invalid",
    snap: "#drop11",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop11")
    .droppable({
      accept: "#drag11",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });

  // item 22
  $("#drag22").draggable({
    revert: "invalid",
    snap: "#drop22",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop22")
    .droppable({
      accept: "#drag22",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });

  // item 33
  $("#drag33").draggable({
    revert: "invalid",
    snap: "#drop33",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop33")
    .droppable({
      accept: "#drag33",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });

  // item 44
  $("#drag44").draggable({
    revert: "invalid",
    snap: "#drop44",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop44")
    .droppable({
      accept: "#drag44",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });

  // item 55
  $("#drag55").draggable({
    revert: "invalid",
    snap: "#drop55",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop55")
    .droppable({
      accept: "#drag55",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });

  // item 66
  $("#drag66").draggable({
    revert: "invalid",
    snap: "#drop66",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop66")
    .droppable({
      accept: "#drag66",
    })
    .on("droppable:drop", function (e) {
      $(this).addClass("correct");
    });
}

function arrastrarElemento3() {
  var elementosSoltadosCorrectamente = 0;
  var totalElementos = 4; // Total de elementos a soltar correctamente

  // item 1
  $("#drag1_act_3").draggable({
    revert: "invalid",
    snap: "#drop1_act_3",
    snapMode: "corner",
    snapTolerance: "22",
  });
  $("#drop1_act_3")
    .droppable({
      accept: "#drag1_act_3",
    })
    .on("droppable:drop", function (e) {
      elementosSoltadosCorrectamente++;
      checkComplecion();
    });

  // item 3
  $("#drag3_act_3").draggable({
    revert: "invalid",
    snap: "#drop3_act_3",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop3_act_3")
    .droppable({
      accept: "#drag3_act_3",
    })
    .on("droppable:drop", function (e) {
      elementosSoltadosCorrectamente++;
      checkComplecion();
    });

  // item 5
  $("#drag5_act_3").draggable({
    revert: "invalid",
    snap: "#drop5_act_3",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop5_act_3")
    .droppable({
      accept: "#drag5_act_3",
    })
    .on("droppable:drop", function (e) {
      elementosSoltadosCorrectamente++;
      checkComplecion();
    });

  // item 4
  $("#drag6_act_3").draggable({
    revert: "invalid",
    snap: "#drop6_act_3",
    snapMode: "corner",
    snapTolerance: "1",
  });
  $("#drop6_act_3")
    .droppable({
      accept: "#drag6_act_3",
    })
    .on("droppable:drop", function (e) {
      elementosSoltadosCorrectamente++;
      checkComplecion();
    });

  function checkComplecion() {
    if (elementosSoltadosCorrectamente === totalElementos) {
      $(".ctActivityDragDropFny").show();
    }
  }
}

function cuatro_politicas() {
  $("#politicas").attr("src", "assets/img/4-politicas.png");
  $("#titulo_politicas").html("Políticas corporativas");
  $("#sub_titulo_politicas").html(
    "Presentamos las tres políticas que aplicamos en la operaci�n y que cuidan tu salud y tu vida cada día."
  );
  $("#audio_politicas").attr("src", "assets/audio/Tres-politicas.mp3");
  $(".politicas-seis-modal").hide();
  $(".politicas-cuatro-modal").attr("hidden", false);
}

function seis_politicas() {
  $("#politicas").attr("src", "assets/img/6politicas.png");
  $("#titulo_politicas").html("Seis políticas");
  $("#sub_titulo_politicas").html(
    "Presentamos las seis políticas que aplicamos en la operación y que cuidan tu salud y tu vida cada día."
  );

  $("#audio_politicas").attr("src", "assets/audio/6_politicas.mp3");
  $(".politicas-cuatro-modal").attr("hidden", true);
  $(".politicas-seis-modal").show();
}

function info_aliado() {
  $("#titulo").html("Segovia");
  $("#imagen-accidente").attr("src", "assets/img/aliado.png");
  $(".reporte_accidente_directo").hide();
  $(".reporte_accidente_aliado").attr("hidden", false);
}

function info_directo() {
  $("#titulo").html("Marmato");
  $("#imagen-accidente").attr("src", "assets/img/directo.png");
  $(".reporte_accidente_aliado").attr("hidden", true);
  $(".reporte_accidente_directo").show();
}

function uploadPhoto() {
  // Obtener el elemento canvas y su contexto
  let photoPreview = document.getElementById("firmaCanvas");

  // Obtener la imagen capturada como un objeto Blob
  photoPreview.toBlob(function (blob) {
    let course_code = $("#course_code").val();
    let module_id = $("#module_id").val();
    let unique_course_id = $("#unique_course_id").val();
    let emp_unique_id = $("#emp_unique_id").val();

    // Crear un objeto FormData
    let formData = new FormData();

    // Agregar la imagen Blob al FormData
    formData.append(emp_unique_id, blob, emp_unique_id + ".png");

    // Agregar otros datos al FormData
    formData.append("course_code", course_code);
    formData.append("module_id", module_id);
    formData.append("unique_course_id", unique_course_id);

    // Mostrar c�rculo de carga antes de enviar la solicitud
    $("#borrarFirmaBtn").hide();
    // Enviar la solicitud mediante AJAX con jQuery
    $.ajax({
      type: "POST",
      url: "../upload.php",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        $("#btn_enviar").text("Enviado");
        // Cambiar color del bot�n
        $("#btn_enviar").css("background-color", "--primary");
      },
      error: function () {},
    });
  }, "image/png");
}

/*Portada de Youtube*/
function playVideo() {
  var container = document.getElementById("videoContainer");
  container.innerHTML =
    '<iframe id="videoFrame" width="560" height="315" src="https://www.youtube.com/embed/06ougnJz1Ks" frameborder="0" allowfullscreen></iframe>';
}

function stopVideo() {
  var container = document.getElementById("videoContainer");
  container.innerHTML = ""; // Elimina el contenido del contenedor para detener el video
}

const options = [
  "motociclistas",
  "viales",
  "normatividad",
  "acciones",
  "accidentes",
  "Seguridad",
];

// const correctAnswers = {
//   drop1: "el�ctricos",
//   drop2: "cables",
//   drop3: "charcos",
//   drop4: "h�medos",
//   drop5: "provisionales",
//   drop6: "da�ados",
//   drop7: "protecci�n",
// };

const selects = document.querySelectorAll(".word-select");

function populateSelects() {
  selects.forEach((select) => {
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });
  });
}

function updateSelects() {
  const selectedValues = Array.from(selects).map((select) => select.value);
  selects.forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (option.value !== "" && !selectedValues.includes(option.value)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });
}

function resetSelects() {
  selects.forEach((select) => {
    select.value = "";
    Array.from(select.options).forEach((option) => {
      option.style.display = "block";
      select.classList.remove("incorrectAnswer");
      select.classList.remove("correctAnswer");
    });
    select.classList.remove("incorrectAnswerBorder");
    select.classList.remove("correctAnswerBorder");
  });

  $("#p_respuestas").attr("hidden", true);
  $("#p_resultado").attr("hidden", true);
  $(".btn-finalizar").attr("disabled", true);
}

//constantes para facilitar el guardado del progreso
var userId   = $('#userId').val();
var courseId = $('#unique_course_id').val();
var module_id = $('#module_id').val(); 
var fullName = $('#fullName').val();

function validateSelects() {
    // Define las respuestas correctas
    const correctAnswers = {
      drop2: "viales",
      drop6: "accidentes",
      drop1: "Seguridad",
      drop4: "normatividad",
      drop5: "acciones",
      drop3: "motociclistas",
    };

    let correctCount = 0;

    // Recorre cada select y verifica la respuesta
    for (let [key, value] of Object.entries(correctAnswers)) {
      const selectElement = document.getElementById(key);
      if (selectElement.value === value) {
        correctCount++;
        selectElement.classList.add("correctAnswerBorder");
      } else {
        selectElement.classList.add("incorrectAnswerBorder");
      }
    }

    // Muestra las respuestas correctas y el resultado porcentual
    const totalQuestions = Object.keys(correctAnswers).length;
    const percentage = (correctCount / totalQuestions) * 100;

    document.getElementById("respuestas_correctas").innerText = correctCount;
    document.getElementById("resultado").innerText = percentage.toFixed(2);

    document.getElementById("p_respuestas").hidden = false;
    document.getElementById("p_resultado").hidden = false;

    let correct = correctCount;
    let total = 6;
    let percentage_actividad = (correct / total) * 100;
    let activity_id = 1;

    getProgressActivity(userId, courseId, module_id, fullName, percentage_actividad, activity_id, correct, total);
    
  }

  populateSelects(); // Llama a esta funci�n al cargar la p�gina para llenar las opciones

  selects.forEach((select) => {
    select.addEventListener("change", updateSelects);


});

/*audios y video sdl9*/




/*actividad*/
document.addEventListener("DOMContentLoaded", function () {
  const audios = document.querySelectorAll(".track-element");

  audios.forEach((audio) => {
    audio.addEventListener("play", function () {
      const gifId = this.id.replace("audio", "gif");
      const gif = document.getElementById(gifId);

      if (gif) {
        // Cambiar la imagen est�tica por el GIF
        gif.src = gif.getAttribute("data-gif");
      }
    });

    audio.addEventListener("pause", function () {
      const gifId = this.id.replace("audio", "gif");
      const gif = document.getElementById(gifId);

      if (gif) {
        // Cambiar el GIF por la imagen est�tica
        gif.src = gif.getAttribute("data-static");
      }
    });

    audio.addEventListener("ended", function () {
      const gifId = this.id.replace("audio", "gif");
      const gif = document.getElementById(gifId);

      if (gif) {
        // Cambiar el GIF por la imagen est�tica cuando el audio termina
        gif.src = gif.getAttribute("data-static");
      }
    });
  });
});

/*detener audio para que reproduzca otro*/
document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll(".audio-control");

  audioElements.forEach((audio) => {
    audio.addEventListener("play", function () {
      // Pausar otros audios
      audioElements.forEach((otherAudio) => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
        }
      });
    });
  });
});

/*carrusel nuevo 10 slides*/
/*10 reglas de Oro*/
const repeat = false;
const noArrows = false;
const noBullets = false;

const container = document.querySelector(".slider-container");
var slide = document.querySelectorAll(".slider-single");
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
  if (noBullets) {
    return;
  }
  const bulletContainer = document.createElement("div");
  bulletContainer.classList.add("bullet-container");
  slide.forEach((elem, i) => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.id = `bullet-index-${i}`;
    bullet.addEventListener("click", () => {
      goToIndexSlide(i);
    });
    bulletContainer.appendChild(bullet);
    elem.classList.add("proactivede");
  });
  container.appendChild(bulletContainer);
}

function initArrows() {
  if (noArrows) {
    return;
  }
  const leftArrow = document.createElement("a");
  const iLeft = document.createElement("i");
  iLeft.classList.add("fa");
  iLeft.classList.add("fa-arrow-left");
  leftArrow.classList.add("slider-left");
  leftArrow.appendChild(iLeft);
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });
  const rightArrow = document.createElement("a");
  const iRight = document.createElement("i");
  iRight.classList.add("fa");
  iRight.classList.add("fa-arrow-right");
  rightArrow.classList.add("slider-right");
  rightArrow.appendChild(iRight);
  rightArrow.addEventListener("click", () => {
    slideRight();
  });
  container.appendChild(leftArrow);
  container.appendChild(rightArrow);
}

function slideInitial() {
  initBullets();
  initArrows();
  setTimeout(function () {
    slideRight();
  }, 500);
}

function updateBullet() {
  if (!noBullets) {
    document
      .querySelector(".bullet-container")
      .querySelectorAll(".bullet")
      .forEach((elem, i) => {
        elem.classList.remove("active");
        if (i === slideCurrent) {
          elem.classList.add("active");
        }
      });
  }
  checkRepeat();
}

function checkRepeat() {
  if (!repeat) {
    if (slideCurrent === slide.length - 1) {
      slide[0].classList.add("not-visible");
      slide[slide.length - 1].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-right").classList.add("not-visible");
        document.querySelector(".slider-left").classList.remove("not-visible");
      }
    } else if (slideCurrent === 0) {
      slide[slide.length - 1].classList.add("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.add("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    } else {
      slide[slide.length - 1].classList.remove("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.remove("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    }
  }
}

function slideRight() {
  if (slideCurrent < slideTotal) {
    slideCurrent++;
  } else {
    slideCurrent = 0;
  }

  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }

  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("preactivede")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("preactive")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });
  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");

  updateBullet();
}

function slideLeft() {
  if (slideCurrent > 0) {
    slideCurrent--;
  } else {
    slideCurrent = slideTotal;
  }

  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("proactive")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("proactivede")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });

  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");

  updateBullet();
}

function goToIndexSlide(index) {
  const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
    sliding();
  }
}

slideInitial();


/*slider12- juego del camino*/
var pBeforeWeb = 1;
var pBeforeMovil = 1;
var pAfter = 0;
var time = 500;
var cont = 0;
var isFirstClick = true; // Nueva variable para controlar el primer clic

function gameTable(el, e) {
  pAfter = e;
  cont = 0;
  let val;
  let pBefore;

  if (window.innerWidth <= 480) {
    pBefore = pBeforeMovil;
    val = pAfter - pBeforeMovil;
  } else {
    pBefore = pBeforeWeb;
    val = pAfter - pBeforeWeb;
  }

  $('.gameTable > div').removeClass('act');
  $(el).addClass('act');

  if (isFirstClick) {
    document.getElementById('sonidoCarro').play(); // Reproduce el sonido
    isFirstClick = false; // Marca que el primer clic ya ocurri�
  }

  if (val >= 0) {
    for (var i = pBefore; i <= pAfter; i++) {
      cont++;
      td01(i);
      if (i == (pAfter - 1) || i == 1) {
        modal(e);
      }
    }
  } else if (val < 0) {
    for (var i = pBefore; i >= pAfter; i--) {
      cont++;
      td01(i);
      if (i == (pAfter + 1) ) {
        modal(e);
      }
    }
  }

  if (window.innerWidth <= 480) {
    pBeforeMovil = e;
  } else {
    pBeforeWeb = e;
  }
}

function modal(e) {
  $('.modal').modal('hide');
  setTimeout(function() {
    let item = '#tb' + e;
    $(item).modal('show');
  }, 700 * cont);
}

function td01(e) {
  setTimeout(function() {
    if (window.innerWidth <= 480) {
      // Coordenadas para la versi�n m�vil
      switch(e) {
        case 1:
          $('#fichaGameMovil').css({'top': '-1%', 'left': '60%'});
          break;
        case 2:
          $('#fichaGameMovil').css({'top': '15%', 'left': '60%'});
          break;
        case 3:
          $('#fichaGameMovil').css({'top': '15%', 'left': '10%'});
          break;
        case 4:
          $('#fichaGameMovil').css({'top': '32%', 'left': '10%'});
          break;
        case 5:
          $('#fichaGameMovil').css({'top': '32%', 'left': '60%'});
          break;
        case 6:
          $('#fichaGameMovil').css({'top': '49%', 'left': '60%'});
          break;
        case 7:
          $('#fichaGameMovil').css({'top': '49%', 'left': '10%'});
          break;
        case 8:
          $('#fichaGameMovil').css({'top': '65%', 'left': '10%'});
          break;
        case 9:
          $('#fichaGameMovil').css({'top': '65%', 'left': '60%'});
          break;
        case 12:
          $('#fichaGameMovil').css({'top': '82%', 'left': '60%'});
          break;
      }
    } else {
      // Coordenadas para la versi�n de escritorio
      switch(e) {
        case 1:
          $('#fichaGame').css({'top': '68%', 'left': '5%'});
          break;
        case 2:
          $('#fichaGame').css({'top': '68%', 'left': '21%'});
          break;
        case 3:
          $('#fichaGame').css({'top': '35%', 'left': '21%'});
          break;
        case 4:
          $('#fichaGame').css({'top': '2%', 'left': '21%'});
          break;
        case 5:
          $('#fichaGame').css({'top': '2%', 'left': '38%'});
          break;
        case 6:
          $('#fichaGame').css({'top': '2%', 'left': '54%'});
          break;
        case 7:
          $('#fichaGame').css({'top': '35%', 'left': '54%'});
          break;
        case 8:
          $('#fichaGame').css({'top': '68%', 'left': '54%'});
          break;
        case 9:
          $('#fichaGame').css({'top': '68%', 'left': '71%'});
          break;
        case 10:
          $('#fichaGame').css({'top': '68%', 'left': '88%'});
          break;
        case 11:
          $('#fichaGame').css({'top': '35%', 'left': '88%'});
          break;
        case 12:
          $('#fichaGame').css({'top': '2%', 'left': '88%'});
          break;
      }
    }
  }, time * cont);
}



//index modals
$(document).on('show.bs.modal', '.modal', function() {
  const zIndex = 1040 + 10 * $('.modal:visible').length;
  $(this).css('z-index', zIndex);
  setTimeout(() => $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'));
});


//interactividad imagen carro
 document.querySelectorAll('.car-button').forEach(button => {
            button.addEventListener('click', function() {
                const text = this.getAttribute('data-text');
                const displayText = document.getElementById('display-text');
                displayText.textContent = text;
                document.getElementById('text-container').classList.add('active');
            });
        });


 // Evento que se dispara cuando el modal se cierra
 $('#slide_11_video').on('hidden.bs.modal', function () {
  // Detener el video reiniciando el src del iframe
  var iframe = document.getElementById('youtube-video');
  iframe.src = iframe.src;
});

//Slider15
function selectedButton(selectedButtonId) {
  const buttons = document.querySelectorAll('.btn-selected');
  buttons.forEach(btn => {
      if (btn.id === selectedButtonId) {
          btn.classList.add('active');
      } else {
          btn.classList.remove('active');
      }
  });
}


//Slider20
function mostrarSuperficie() {
  document.getElementById('superficie-container').style.display = 'block';
  document.getElementById('socavon-container').style.display = 'none';
  setActiveButton('btn-superficie');
}

function mostrarSocavon() {
  document.getElementById('superficie-container').style.display = 'none';
  document.getElementById('socavon-container').style.display = 'block';
  setActiveButton('btn-socavon');
}

function setActiveButton(activeButtonId) {
  const buttons = document.querySelectorAll('.btn-politicas');
  buttons.forEach(btn => {
      if (btn.id === activeButtonId) {
          btn.classList.add('active');
      } else {
          btn.classList.remove('active');
      }
  });
}