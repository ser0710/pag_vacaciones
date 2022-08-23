
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


