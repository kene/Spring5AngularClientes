
//const clicks = rxjs.fromEvent(document, 'click'); // arreglo de eventos clicks 

//let contador = 0;

// clicks.subscribe( click => {
//     console.log(contador, click);
//     contador++;

//     if(contador === 5){
//         //acciones
//         console.log("Llegamos a cinco");
//     }
// });


// const miObservable = rxjs.Observable.create(observer => {
//     observer.next('Hola');
//     observer.next('Mundo');
// });


//miObservable.subscribe(val => {
//    console.log('Valor del primer observable: ', val);
//});

// const button = document.querySelector('button');
// rxjs.fromEvent(button, 'click').subscribe(() => {
//     miObservable.subscribe( val => {
//         console.log('Valor de primer observable: ', val);
//     })
// });


// const promise = new Promise((resolve, reject) => {

//     //fetch('https://api-mi-liga.now.sh/api/jugadores') // if promise process everything goo will be resolve
//     fetch('http://httpstat.us/500')
//         .then(data => data.json())
//         .then(jugadores => {
//             console.log('Promesa resuelta');
//             resolve(jugadores);
//         })
//         .catch(error => { // in case the promise catch error or can't resolve send a error and reject it 
//             console.log('Promesa rechazada');
//             reject(error);
//         })
// });


// const myObservable = rxjs.from(promise);


// myObservable
//     .subscribe(
//         resultados => { // handle the results of the promise
//             console.log('resultados', resultados);
//         },
//         error => { // handle the error of the promise
//             console.log('ERROR'); 
//             throw error;
//         }
// );


/* const button = document.querySelector('button');

button.disabled = true;

const timer = rxjs.timer(3000);

timer
.subscribe(done => {
        button.disabled = false;
        console.log('El boton se ha habilitado nuevamente');
    },
    error => { }, // handle errors
    () => {
        console.log('Termino la suscripcion');
    }  // handle qhen the finished the subscribe 
    ); */


/* const boton = document.querySelector('button');

boton.disabled = true;

const intervalo = rxjs.interval(2000);

const data = intervalo.subscribe( i => {
    boton.disabled = boton.disabled ? false : true;
    console.log(i);
});

rxjs.fromEvent(boton, 'click')
    .subscribe( () => {
        console.log('onClick: ', 'Se ha pulsado el boton')
        data.unsubscribe();
}); */
 


/* const miObservable = rxjs.of('Hola Mundo', ['Dato 1', 123], 23,
    true, { fav: 'start-selected' });

miObservable.subscribe( valor =>{
    console.log(valor);
}); */


/* const numeros = rxjs.from([10, 100, 1000]);

numeros
.pipe( 
rxjs.operators.map(numero => {
    console.log('Antes:', numero);
    return numero + 5;
}))
.subscribe(dato => {
    console.log('Despues:', dato);
}); */


/* const promesa = new Promise((resolve, reject) => {
    fetch('https://api-mi-liga.now.sh/api/jugadores')
    .then(data => resolve(data.json()))
    .catch(error => {
        reject(error);
    }) 
});

const obsvPromise = rxjs.from(promesa);

obsvPromise
.pipe( 
rxjs.operators.tap(jugadores => console.log(`Tienes ${jugadores.length} jugadores`)),
rxjs.operators.map(
    jugadores => {
        console.log('Antes de la suscripcion:', jugadores);
        let estado = jugadores.every(jugador => jugador.edad >= 30);
        jugadores = jugadores.filter(jugador => jugador.edad >= 30);
        return { estado, jugadores };
}),
rxjs.operators.tap(data => console.log(`Tienes ${data.jugadores.length} jugadores probados`) )
)
.subscribe(
        data => {
            console.log('Despues de la suscripcion ', data);
            if(data.estado){
                console.log('Equipo Aceptado');
            }else{
                console.log('Equipo Rechazado   ');
            }
        },
        error => {
            console.log(error);
        }
); */


/* const promesa = new Promise((resolve, reject) => {
    fetch('https://api-mi-liga.now.sh/api/jugadores')
    .then(data => resolve(data.json()))
    .catch(error => {
        reject(error);
    }) 
});

const obsvPromise = rxjs.from(promesa);

obsvPromise
.pipe( 
rxjs.operators.filter(
    jugadores => {
        return jugadores.length > 10
})
)
.subscribe(
        jugadores => {
            console.log('------>' ,jugadores);
        },
        error => {
            console.log(error);
        },
        () => { console.log('Fin') }
);

const miObservable = rxjs.of('Hola Mundo', ['Dato 1', 123], 23, 1992, {fav: 'star_selected'} );

miObservable.pipe( rxjs.operators.filter(
    value => {
        return !isNaN(value);    
    })
).subscribe(
    val => console.log('Final', val)
); */



/* const miObservable = rxjs.of('Hola Mundo', ['Dato 1', 123], 23, 1992, {fav: 'star_selected'} );

miObservable.pipe(
    rxjs.operators.first()
).subscribe(data => console.log('Primero: ', data));


miObservable.pipe(
    rxjs.operators.last()
).subscribe(data => console.log('Ultimo: ', data)); */


/* throttle().subscribe(valor => {
    print('#t-output', valor);
});

debounce().subscribe(valor => {
    print('#d-output', valor);
});

function throttle(){
    var tInput = document.querySelector('#t-field');
    const thObservable = rxjs.fromEvent(tInput, 'input');
    return thObservable.pipe(
        rxjs.operators.throttleTime(2000),
        rxjs.operators.map(data =>{
            return data.target.value;
        })
    );
}
// 

const print = (elemento, valor) =>{
    if(!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(elemento).appendChild(etiqueta);
}

function debounce(){
    var dInput = document.querySelector('#d-field');
    const deObservable = rxjs.fromEvent(dInput, 'input');
    return deObservable.pipe(
        rxjs.operators.debounceTime(1000),
        rxjs.operators.map(data =>{
            return data.target.value;
        })
    )
} */


/* const miObsevable = rxjs.fromEvent(document, 'mousemove');
const  notificador = rxjs.timer(2000);

miObsevable
    .pipe(
        rxjs.operators.takeUntil(notificador),
        rxjs.operators.finalize(() =>  console.log('Fin')),
    ).subscribe( data =>  console.log(data)); */


/*     const miObservable = rxjs.of('Hola Mundo', ['Dato 1', 123], 23, 1992, {fav: 'star_selected'} );
    miObservable.pipe(
        rxjs.operators.takeWhile(value => {
            if(value != 23){
                return value;
            }
        }),
        rxjs.operators.finalize(() =>  console.log('Condicion cumplida') )
    ).subscribe(
        data => {
            console.log(data);
        });
 */

/*  TODO: Checar y corregir el funcionamiento
 var tInput = document.querySelector('#b-field');
 var bObservable = rxjs.fromEvent(tInput, 'input');

 bObservable.pipe(
rxjs.operators.map( data => data.target.value ),
rxjs.operators.bufferTime(1000)
 )
 .subscribe(valor => {
     if(valor.length === 0){
         valor = 'Sin dato..';
     }
    print('#b-ouput', valor);
 });

 const print = (el, valor) => {
     if(!valor) return;
     var etiqueta = document.createElement('pre');
     etiqueta.innerHTML = valor;
     document.querySelector(el).appendChild(etiqueta);
 } */

/*  var tInput = document.querySelector('#b-field');
 var bObservable = rxjs.fromEvent(tInput, 'input');

bObservable.pipe(
rxjs.operators.map( data => data.target.value ),
rxjs.operators.bufferCount(2)
 )
 .subscribe(valor => {
     if(valor.length === 0){
         valor = 'Sin dato..';
     }
    print('#b-ouput', valor);
 });

 const print = (el, valor) => {
    if(!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(el).appendChild(etiqueta);
} */


const observablePaises = rxjs.of('Peru', 'Venezuela', 'Mexico', 'Colombia');
const observableComida = rxjs.of('Ceviche', 'Arepa', 'Tacos', 'Bandeja Paisa');

const miObservable = rxjs.zip( observablePaises, observableComida);

miObservable.subscribe(
    arrayDatos => {
        console.log(arrayDatos);
    });

