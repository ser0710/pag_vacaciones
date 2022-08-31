var casa1 = [
    {
        nombre: "piso 1",
        imgRef: "img/piso11.jpg",
        img: ["img/piso11.jpg", "img/piso12.jpg", "img/piso13.jpg", "img/piso14.jpg", "img/piso15.jpg"],
        descrip: "Maravillosa casa en Bogota de 120m2, sala independiente y comedor, chimenea"
    },
    {
        nombre: "piso 2",
        imgRef: "img/piso16.jpg",
        img: ["img/piso16.jpg", "img/piso17.jpg", "img/piso18.jpg", "img/piso19.jpg", "img/piso20.jpg"],
        descrip: "3 habitaciones, 2 baños"
    }
]

var house = function(casa1){
    this.imgRef = ko.observable(casa1.imgRef);
    this.img = ko.observableArray(casa1.img);
    this.name = ko.observable(casa1.nombre);
    this.descrip = ko.observable(casa1.descrip);
}

var viewModel = function(){
    var self = this;
    this.datos = ko.observableArray([]);
    casa1.forEach(function(floor){
        self.datos.push(new house(floor));
    });
    this.currentfloor = ko.observable(this.datos()[0]);
    this.changeImgs = function(clicked){
        self.currentfloor(clicked);
    };
}

function prueba(clicked){
    document.getElementById("mainImg").src=clicked;
}

function volver(){
    window.location.href="index.html";
}



ko.applyBindings(new viewModel());


