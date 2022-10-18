function app()
{
   let canvas = document.getElementById('lienzo');   

   /*Atributos del canvas*/
   canvas.setAttribute('width',500);
   canvas.setAttribute('height',500);
   /* Estilos al canvas*/
   canvas.style.border = "solid 2px black";
   canvas.style.backgroundColor ="#464857";
   /*Contexto del canvas*/
   const ctx = canvas.getContext("2d");

   /*objeto del juego del gato*/
   const gato =
   {
      regilla: function ()
      {
        var V1 = 100;
        var V2 = 500;

        ctx.strokeStyle = "black";

        for (var n = 0; n < 4; n++) 
        {
            ctx.setLineDash([5, 10]);

            ctx.beginPath();
            ctx.moveTo(0, V1);
            ctx.lineTo(500, V1);
            ctx.stroke(); 

            ctx.beginPath();
            ctx.moveTo(V1, 0);
            ctx.lineTo(V1,V2);
            ctx.stroke();

            V1 = V1 + 100;
        }

      },
      escenario: function ()
      {
        var trazo = 200;

        for (a = 0; a < 2; a++)
        {

            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.strokeStyle = "#f50c0c";
            ctx.lineWidth = 3;
            ctx.moveTo(400, trazo);
            ctx.lineTo(100, trazo);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "#f50c0c";
            ctx.lineWidth = 3;
            ctx.moveTo(trazo, 100);
            ctx.lineTo(trazo, 400);
            ctx.stroke();

            trazo = trazo + 100;

        }

      
      },

    seleccionar: function(e)
    {
    var x = e.offsetX;
    var y = e.offsetY;

    var coordenadas = document.getElementById("coordenada");
    coordenadas.style.border = "1px solid black";
    coordenadas.style.backgroundColor ="lightcyan";
    coordenadas.innerHTML =`${x}, ${y}`;
    
    },

    play:function(pintarRegilla = false)
    {
      if(pintarRegilla)
         this.regilla();
         this.escenario();
    }

   }
   canvas.addEventListener("mousemove",gato.seleccionar);
   gato.play(false);
}

window.onload = function() 
{
  app();
  
}


