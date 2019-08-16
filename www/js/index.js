/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
    
};

//Ejercicio 1

function temperatura()
{
    var farentheit = parseFloat(prompt("Ingresa la temperatura en grados Farenheit"));

    var resultado = ((farentheit - 32) * 5)/9;

    alert("El resultado en grados Celcius es: " + resultado.toFixed(2));
}

//Ejercicio 2

function sueldo()
{
    var Sueldo = parseFloat(prompt("Ingresa el sueldo"));

    var renta = Sueldo * 0.10;
    var AFP = Sueldo * 0.06;
    var ISSS = Sueldo * 0.03;

    var descuentoTotal = renta + AFP + ISSS;
    var SueldoNeto = Sueldo - descuentoTotal;

    alert("El descuento total es: $" + descuentoTotal.toFixed(2));
    alert("El sueldo Neto es: $" + SueldoNeto.toFixed(2));
}

//Ejercicio 3

function notaEstudiante()
{
    var Tareas = parseFloat(prompt("Ingrese la nota de las tareas")) * 0.20;
    var Portafolio = parseFloat(prompt("Ingrese la nota de el portafolio")) * 0.25;
    var Laboratorio = parseFloat(prompt("Ingrese la nota de el laboratorio")) * 0.25;
    var Examen = parseFloat(prompt("Ingrese la nota de el examen")) * 0.30;

    var total = Tareas + Portafolio + Laboratorio + Examen;

    alert(`La nota final: ${total.toFixed(2)}`);
}

//Ejercicio 4

function empresa()
{
    var primera = parseFloat(prompt("Inversión de la primera persona"));
    var segunda = parseFloat(prompt("Inversión de la segunda persona"));
    var tercera = parseFloat(prompt("Inversión de la tercera persona"));

    var cantidaTotal = primera + segunda + tercera;

    var porcentajePrimera = (primera * 100) / cantidaTotal;
    var porcentajeSegunda = (segunda * 100) / cantidaTotal;
    var porcentajeTercera = (tercera * 100) / cantidaTotal;

    alert(`El porcentaje que invirtió la Primera persona es: ${porcentajePrimera.toFixed(2)} %` );
    alert(`El porcentaje que invirtió la Segunda persona es: ${porcentajeSegunda.toFixed(2)} %` );
    alert(`El porcentaje que invirtió la Tercera persona es: ${porcentajeTercera.toFixed(2)} %` );

}

// ejercicio 5 

function area()
{
    var opcion = document.getElementById("Combo5").value;
    var perimetro = null;
    var area = null;
    switch(opcion)
    {
        case 'triangulo':
            var altura = parseFloat(prompt("Ingrese la altura del triangulo"));
            var base = parseFloat(prompt("Ingrese la base del triangulo"));

             perimetro = base * 3;
             area = (base * altura) / 2;

            alert(`El perímetro del triangulo es: ${perimetro.toFixed(2)}`);
            alert(`El area del triangulo es: ${area.toFixed(2)}`);

        break;

        case 'circulo':
            var radio = parseFloat(prompt("Ingrese el radio del circulo"));

             perimetro =  2 * Math.PI * radio;
             area = Math.PI * Math.pow(radio, 2);

            alert(`El perímetro del circulo es: ${perimetro.toFixed(2)}`);
            alert(`El area del circulo es: ${area.toFixed(2)}`);
        break;

        case 'rombo':
            var diagonalMenor = parseFloat(prompt("Ingrese la diagonal menor"));
            var diagonalMayor = parseFloat(prompt("Ingrese la diagonal mayor"));
            var lado = parseFloat(prompt("Ingrese un lado del Rombo"));

            perimetro = lado * 4;
            area = (diagonalMayor * diagonalMenor) / 2;

            alert(`El perímetro del Rombo es: ${perimetro.toFixed(2)}`);
            alert(`El area del Rombo es: ${area.toFixed(2)}`);                       

        break;

        case 'trapecio':
            var baseA = parseFloat(prompt("Ingrese la primera base"));
            var baseB = parseFloat(prompt("Ingrese la segunda base"));
            var altura = parseFloat(prompt("Ingrese la altura del trapecio"));
            
            var lado1 = parseFloat(prompt("Ingrese el lado 1"));
            var lado2 = parseFloat(prompt("Ingrese el lado 2"));
            var lado3 = parseFloat(prompt("Ingrese el lado 3"));
            var lado4 = parseFloat(prompt("Ingrese el lado 4"));

            perimetro = lado1 = lado2 = lado3 = lado4;
            area = ((baseA * baseB) / 2) * altura;
            alert(`El area del trapecio es: ${area.toFixed(2)}`);
            alert(`El perimetro del trapecio es: ${perimetro.toFixed(2)}`);

        break;

    }
}

//Ejercicio 6 

function calculadora()
{
    var opcion = document.getElementById("Combo6").value;    

    switch (opcion)
    {
        case 'Suma':
            var numero = parseFloat(prompt("Ingrese un numero"));
            var numero2 = parseFloat(prompt("Ingrese otro numero"));

            alert(`El resultado de la ${opcion} es ${numero + numero2}`);                                    
 
        break;

        case 'Resta':
            var numero = parseFloat(prompt("Ingrese un numero"));
            var numero2 = parseFloat(prompt("Ingrese otro numero"));
    
            alert(`El resultado de la ${opcion} es ${numero - numero2}`);

        break;

        case 'Multiplicacion':
            var numero = parseFloat(prompt("Ingrese un numero"));
            var numero2 = parseFloat(prompt("Ingrese otro numero"));
    
            alert(`El resultado de la ${opcion} es ${numero * numero2}`);

        break;

        case 'Division':
            var numero = parseFloat(prompt("Ingrese un numero"));
            var numero2 = parseFloat(prompt("Ingrese otro numero"));
        
            alert(`El resultado de la ${opcion} es ${numero / numero2}`);
        break;

        case 'Modulo':
                var numero = parseFloat(prompt("Ingrese un numero"));
                var modulo = parseFloat(prompt("Ingrese el valor de modulo"));
                alert(`El resultado de la ${opcion} es ${numero % modulo}`);            
        break;

        case 'Potencia':
                var numero = parseFloat(prompt("Ingrese un numero"));
                var potencia = parseInt(prompt("Ingrese la potencia"));                
                
                alert(`El resultado de la ${opcion} es ${Math.pow(numero, potencia)}`);
        break;

        case 'Raiz':
            var numero = parseFloat(prompt("Ingrese un numero"));

            alert(`El resultado de la ${opcion} es ${Math.sqrt(numero)}`);
        break;

    }
}

// Ejercicio 7

 function boleto()
    {
        var Kilometros = parseFloat(prompt("Ingresar la distancia en km"))
        var Dias = parseFloat(prompt("Ingresar el tiempo en dias"))

        var Precio = Kilometros = 0.15;

        if(Dias > 10 && Kilometros > 300)
        {
            var Descuento =  Precio = 0.30;
            Precio -= Descuento;
        }
        alert("El precio del boleto es: " + Precio.toFixed(2));
    }

// Ejercicio 8

function salarioEmpleado()
{
    var Salario = parseFloat(prompt("Ingresar salario"));
    var incremento = 0;
    if(Salario < 300)
    {
        incremento = Salario = 0.12;
        Salario += incremento;
        }else if (Salario >= 300 && Salario <= 500){
            incremento = salario * 0.08;
            salario += incremento;
            }else if (Salario > 500 && Salario <= 800){
                incremento = Salario * 0.07;
                Salario += incremento;
    }else if(Salario > 800){
         incremento = Salario * 0.06;
        Salario += incremento;
    }
    alert("El salario nuevo del empleado es: " + Salario.toFixed(2));

}

// Ejercicio 9

function triangulo()
{
    var Lado1 = parseFloat(prompt("Ingresar lado 1"))

    var Lado2 = parseFloat(prompt("Ingresar lado 2"))

    var Lado3 = parseFloat(prompt("Ingresar lado 3"))

    if(Lado1 === Lado2 && Lado2 == Lado3 && Lado1 === Lado3)
    alert("Su triangulo es Equilatero")

        else if(Lado1 === Lado2 || Lado2 === Lado3 || Lado1 === Lado3)
        alert("Su triangulo es Isoceles")

        else if(Lado1 != Lado2 && Lado2 != Lado3 && Lado1 != Lado3)
        alert("Su trinagulo es Escaleno")
}

// Ejercicio 10

function llanteria()
{
    var Llanta = parseFloat(prompt("Ingresar cantidad de llantas a comprar"))

    if (Llanta <=4)
        alert(`El total a pagar por las llantas es: ${Llanta * 150}`);

        else if (Llanta >=5 && Llanta <=10)
        alert(`El total a pagar por las llantas es: ${Llanta * 125}`);

        else if(Llanta > 10)
        alert(`El total a pagar por las llantas es: ${Llanta * 100}`);
}

// Ejercicio 11

function salarioTrabajadores()
{
    var categoria = parseFloat(prompt("Ingresar categoria de trabajo"))
    var horas = parseFloat(prompt("Ingresar la cantidad de horas extra"))  

    if(categoria === 1 || categoria === 2 || categoria === 3)
    {
        if(categoria === 1)
        alert(`El pago de las horas extra es: ${categoria * 40}`);

        else if(categoria === 2)
        alert(`El pago de las horas extra es: ${categoria * 50}`);

        else if(categoria === 3)
        alert(`El pago de las horas extra es: ${categoria * 85}`);
    }
}

// Ejercicio 12

function ParesImpares()
{
    var Condicion = 0;
    var Pares = 0;
    var Impares = 0;

    do{
        Condicion = parseInt(prompt("Ingresar un numero "));

        if(Condicion % 2 === 0)
            Pares += Condicion;

            else 
                Impares += Condicion;
    }
        while(Condicion !=0)

        alert(`La suma de los pares es: ${Pares}`);
        alert(`La suma de los impares es: ${Impares}`);
}

// Ejercicio 13

function Promedio()
{
    var nota = -1;
    var suma = 0;
    var contador = 0;
    do{
        nota = parseFloat(prompt("Ingrese notas (-1 para deterner el procedimiento)"));

        if(nota != -1)
        {
            suma += nota;
            contador ++;
        }
    }while(nota != -1) 
        alert(`El promedio de las notas es ':  ${(suma / contador).toFixed(2)}`);
}

// Ejercicio 14

function calificaciones()
    {
         var notas = new Array(5);
         var mayor = null;
         var menor = null;

         for(var i = 0; i<notas.length; i++)
         {
             notas[i] = parseFloat(prompt("Ingresar nota"));
            if(i === 0)
            {
                mayor = notas[i];
                menor = notas[i];
            }
            if(notas[i] > mayor)
                mayor = notas[i]

                if(notas[i] < menor)
                menor = notas[i];
         }
         alert(`La nota mayor es: ${mayor.toFixed(2)}`);
         alert(`La nota menor es: ${menor.toFixed(2)}`);
    }

// Ejercicio 15

function examenes()
{
    var Mejorar = 0;
    var Regular = 0;
    var Bueno = 0;
    var Muybueno = 0;
    var Excelente = 0;
    var Nota = -1;

    do{
        Nota = parseFloat(prompt("Ingresar la nota (-1 para salir)"));

            if(Nota != -1)
            {
                if(Nota <= 3.99)
                Mejorar++;

                else if (Nota >= 4.00 && Nota <= 5.99)
                Regular++;

                else if (Nota >= 6.00 && Nota <= 7.99)
                Bueno++;

                else if (Nota >=  8.00 && Nota <= 8.99)
                Muybueno++;

                else if (Nota >= 9.00 && Nota <= 10.00)
                Excelente++;
            }
        }while(Nota != -1)

        alert(`${Mejorar} Las notas fueron menor 3.99`);
        alert(`${Regular} Las notas fueron mayor o igual a 4 y menor que 5.99`);
        alert(`${Bueno} Las notas fueron mayor o igual a 6 y menor que 7.99`);
        alert(`${Muybueno} Las notas fueron mayor o igual a 7 y menor que 8.99`);
        alert(`${Excelente} Las notas fueron mayor o igual a 8 y menor que 9.99 `);
}

// Ejercicio 17

function elementos()
{
    var arreglo = new Array(10);
    var numero = null;
    var pares = 0;
    var impares = 0;
    var nulos = 0;

    for(var i = 0; i < arreglo.length; i++)
    {
        numero = parseInt(prompt("Ingrese un n�mero enetero"));
        
        if(numero % 2 === 0)
            pares ++;
        
        else if (numero === 0)
            nulos++;
            
        else
            impares++;   

    }

    alert(`La cantidad de numero pares es: ${pares}`);
    alert(`La cantidad de numero impares es: ${impares}`);
    alert(`La cantidad de numero nulos es: ${nulos}`);

}


app.initialize();