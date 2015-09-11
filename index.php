<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="js/jquery.js"></script>
    </head>

    <body onclick="">


    <div>
        <input type="button" onclick="mudar('c')" value="circulo">
        <input type="button" onclick="mudar('l')" value="linha">
    </div>
    <div id="grafo">
        <canvas id="ponto" width="600" height="600" style="" onclick=""></canvas>
        <canvas id="linha" width="300" height="300" style=""></canvas>
    </div>


    <script>
        function mudar(e){
            tipo = e;
        }


        var c = document.getElementById("ponto");
        var elemLeft = c.offsetLeft;
        var elemTop = c.offsetTop;
        ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 75, 15, 0, 2 * Math.PI);
        ctx.stroke();
        elements = [];
        elements.push({
            width: 8,
            height: 8,
            top: 75,
            left: 100
        });

        cnt = 0;
        px = 0;
        py = 0;
        $("#grafo").click(function(e){
            if(typeof tipo !== 'undefined') {
                if (tipo == 'l') {
                    //if( (e.pageX <= elements[0].left + elements[0].width && e.pageX >= elements[0].left) ) {
                    if (cnt == 1) {
                        console.log(px, py);
                        console.log(e.pageX, e.pageY);
                        var l = document.getElementById("ponto");
                        var ltx = l.getContext("2d");
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(e.pageX, e.pageY);
                        ctx.stroke();
                        cnt = 0;
                    } else {
                        px = e.pageX;
                        py = e.pageY;
                        cnt++;
                    }
                    //}
                } else {
                    if (tipo == 'c') {
                        console.log(tipo);
                        var c = document.getElementById("ponto");
                        var ctx = c.getContext("2d");
                        ctx.beginPath();
                        ctx.arc(e.pageX, e.pageY, 15, 0, 2 * Math.PI);
                        ctx.stroke();
                    }
                }
            }
        });
    function createObject{

        var object = {};


        object.criarAresta = function(){


        };
        return object;

    }
        // Add event listener for `click` events.
        /*
        cnt = 0;
        px = 0;
        py = 0;
        c.addEventListener('click', function(event) {
            var x = event.pageX - elemLeft,
                y = event.pageY - elemTop;
            elements.forEach(function(element) {
                if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
                    //alert('clicked an element');
                    if(cnt == 1) {
                        var l = document.getElementById("linha");
                        var ltx = l.getContext("2d");
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(x, y);
                        ctx.stroke();
                        cnt = 0;
                    }else{
                        px = x;
                        py = y;
                        cnt++;
                    }
                }
            });

        }, false);

        // Add element.
        elements.push({
            width: 150,
            height: 100,
            top: 20,
            left: 15
        });
        */

        /// OUTRO
        var c2 = document.getElementById("ponto");
        var elemLeft2 = c2.offsetLeft;
        var elemTop2 = c2.offsetTop;
        var ctx2 = c2.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(200, 150, 15, 0, 2 * Math.PI);
        ctx2.stroke();


        /*
        $("html").click(function(e){
            var c = document.getElementById("ponto");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(e.pageX, e.pageY, 15, 0, 2 * Math.PI);
            ctx.stroke();
        });
        */
        /*
        var l=document.getElementById("linha");
        var ltx=l.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(100,75);
        ctx.lineTo(200,150);
        ctx.stroke();
        */
    </script>
    </body>
</html>