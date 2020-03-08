document.addEventListener('DOMContentLoaded',func);

function func(){
    const canvas = document.querySelector('#colaj');

    //potrivire canvas colaj in div-ul centru 
    function potrivireInContainer() {
        canvas.style.width='80%'; 
        canvas.style.height='80%';
        //returneaza latimea si inaltimea in pixeli
        canvas.height=canvas.offsetHeight;
        canvas.width=canvas.offsetWidth;
    }
    potrivireInContainer();

    const W=canvas.width;
    const H=canvas.height;
    const context=canvas.getContext('2d');
    

    //definere structura utilizata pentru a desena colajele
    function structura(x, y, latime,inaltime){
        this.x = x;
        this.y=y;
        this.latime=latime;
        this.inaltime=inaltime;
    }

    function desenareColaj(structuriVector){
        
        context.strokeStyle='#DACBA1';   
        context.lineWidth=15;
        for(var i=0;i<structuriVector.length;i++){
            
            context.strokeRect(structuriVector[i].x,
                structuriVector[i].y,
                structuriVector[i].latime ,
                structuriVector[i].inaltime );
                
                context.font = "20px niconne";
                context.fillStyle="#CDB982";
                context.textAlign="center";
                context.fillText("Drag & Drop your image",structuriVector[i].x+structuriVector[i].latime/2,
                structuriVector[i].y+structuriVector[i].inaltime/2);
        }
       
    }

    var vector1 =[]; //colaj din 4 poze 
    vector1.push(new structura(0,0,W/2,H/2));
    vector1.push(new structura(W/2,0,W/2,H/2));
    vector1.push(new structura(0,H/2,W/2,H/2));
    vector1.push(new structura(W/2,H/2,W/2,H/2));
    //desenareColaj(vector1);

    var vector2=[]; //colaj din 6 poze
    vector2.push(new structura(0,0,W/4,H/2));
    vector2.push(new structura(W/4,0,W/4,H/2));
    vector2.push(new structura(W/2,0,W/2,H/2));
    vector2.push(new structura(0,H/2,W/2,H/2));
    vector2.push(new structura(W/2,H/2,W/4,H/2));
    vector2.push(new structura(3*W/4,H/2,W/4,H/2));
    //desenareColaj(vector2);

    var vector3 =[]; //colaj din 4 poze
    vector3.push(new structura(0,0,W/2,H/3));
    vector3.push(new structura(W/2,0,W/2,2*H/3));
    vector3.push(new structura(0,H/3,W/2,2*H/3));
    vector3.push(new structura(W/2,2*H/3,W/2,H/3));
    //desenareColaj(vector3);

    var vector4 =[]; //colaj din 3 poze
    vector4.push(new structura(0,0,W/2,H/4));
    vector4.push(new structura(W/2,0,W/2,H/4));
    vector4.push(new structura(0,H/4,W,3*H/4));
    //desenareColaj(vector4);

    var vector5 =[]; //colaj din 4 poze
    vector5.push(new structura(0,0,W/3,H/4));
    vector5.push(new structura(W/3,0,W/3,H/4));
    vector5.push(new structura(2*W/3,0,W/3,H/4));
    vector5.push(new structura(0,H/4,W/2,3*H/4));
    vector5.push(new structura(W/2,H/4,W/2,3*H/4));
    //desenareColaj(vector5);

    var vector6 =[]; //colaj din 2 poze
    vector6.push(new structura(0,0,W,H/2));
    vector6.push(new structura(0,H/2,W,H/2));
    //desenareColaj(vector6);

    var vector7 =[]; //colaj din 2 poze
    vector7.push(new structura(0,0,W/2,H));
    vector7.push(new structura(W/2,0,W/2,H));
    //desenareColaj(vector7);

    var vector8 =[]; //colaj din 5 poze
    vector8.push(new structura(0,0,W/2,H/3));
    vector8.push(new structura(0,H/3,W/2,H/3));
    vector8.push(new structura(0,2*H/3,W/2,H/3));
    vector8.push(new structura(W/2,0,W/2,H/2));
    vector8.push(new structura(W/2,H/2,W/2,H/2));
    //desenareColaj(vector8);

    var vector9 =[];// colaj din 13
    vector9.push(new structura(0,0,W/4,H/4));
    vector9.push(new structura(W/4,0,W/4,H/4));
    vector9.push(new structura(W/2,0,W/4,H/4));
    vector9.push(new structura(3*W/4,0,W/4,H/4));
    vector9.push(new structura(0,H/4,W/4,H/4));
    vector9.push(new structura(0,H/2,W/4,H/4));
    vector9.push(new structura(0,3*H/4,W/4,H/4));
    vector9.push(new structura(W/4,3*H/4,W/4,H/4));
    vector9.push(new structura(W/2,3*H/4,W/4,H/4));
    vector9.push(new structura(3*W/4,3*H/4,W/4,H/4));
    vector9.push(new structura(3*W/4,H/4,W/4,H/4));
    vector9.push(new structura(3*W/4,H/2,W/4,H/4));
    vector9.push(new structura(W/4,H/4,W/2,H/2));
    //desenareColaj(vector9);

   var vector10 =[];// colaj din 10
   vector10.push(new structura(0,0,W/4,H/4));
   vector10.push(new structura(W/4,0,W/4,H/4));
   vector10.push(new structura(0,H/4,W/4,H/4));
   vector10.push(new structura(W/4,H/4,W/4,H/4));
   vector10.push(new structura(W/2,0,W/2,H/2));
   vector10.push(new structura(0,H/2,W/2,H/2));
   vector10.push(new structura(W/2,H/2,W/4,H/4));
   vector10.push(new structura(W/2,3*H/4,W/4,H/4));
   vector10.push(new structura(3*W/4,H/2,W/4,H/4));
   vector10.push(new structura(3*W/4,3*H/4,W/4,H/4));
   //desenareColaj(vector10);

   var vector11 =[];// colaj din 4
   vector11.push(new structura(0,0,3*W/4,3*H/4));
   vector11.push(new structura(0,3*H/4,3*W/4,H/4));
   vector11.push(new structura(3*W/4,0,W/4,3*H/4));
   vector11.push(new structura(3*W/4,3*H/4,W/4,H/4));
   //desenareColaj(vector11);

   var vector12 =[];// colaj din 6
   vector12.push(new structura(0,0,2*W/3,2*H/3));
   vector12.push(new structura(0,2*H/3,W/3,H/3));
   vector12.push(new structura(W/3,2*H/3,W/3,H/3));
   vector12.push(new structura(2*W/3,2*H/3,W/3,H/3));
   vector12.push(new structura(2*W/3,H/3,W/3,H/3));
   vector12.push(new structura(2*W/3,0,W/3,H/3));
   //desenareColaj(vector12);

   var vector13 =[];// colaj din 4
   vector13.push(new structura(0,0,2*W/3,H/3));
   vector13.push(new structura(0,H/3,2*W/3,H/3));
   vector13.push(new structura(0,2*H/3,2*W/3,H/3));
   vector13.push(new structura(2*W/3,0,W/3,H));
   //desenareColaj(vector13);

   var vector14 =[];// colaj din 3
   vector14.push(new structura(0,0,2*W/3,H/2));
   vector14.push(new structura(0,H/2,2*W/3,H/2));
   vector14.push(new structura(2*W/3,0,W/3,H));
   //desenareColaj(vector14);
    
   var vectorAll = [];
   vectorAll.push(vector1);
   vectorAll.push(vector2);
   vectorAll.push(vector3);
   vectorAll.push(vector4);
   vectorAll.push(vector5);
   vectorAll.push(vector6);
   vectorAll.push(vector7);
   vectorAll.push(vector8);
   vectorAll.push(vector9);
   vectorAll.push(vector10);
   vectorAll.push(vector11);
   vectorAll.push(vector12);
   vectorAll.push(vector13);
   vectorAll.push(vector14);

   var sablonActiv;  //sablonul ales de utilizator
   //schimbare canvas in functie de colajul ales
   const vectorSabloane = document.querySelectorAll('.imagini');
   for(var i=0;i<vectorSabloane.length;i++){

       vectorSabloane[i].addEventListener('click',function(){
       
           var idd =this.id;
           context.clearRect(0,0,W,H);  //stergere colaj vechi 
           desenareColaj(vectorAll[parseInt(idd)]);
           sablonActiv = vectorAll[parseInt(idd)]; //setare sablon ales de utilizator
            for(var j=0;j<sablonActiv.length;j++){
                vectorAreImagine[j] = false; 
            }
            var sound = document.querySelector('#buttonsound');
            sound.play();
       });
   }
   
  
    function desenareImagine(imagine, index){
        context.drawImage(imagine,
            sablonActiv[index].x,
            sablonActiv[index].y,
            sablonActiv[index].latime ,
            sablonActiv[index].inaltime );   
    }


   $.event.props.push("dataTransfer"); 

   $(document).ready(function(){
    var mouseX,mouseY;

    $(document).on('dragover', (e) => {
        e.preventDefault();  
    });  
    $(document).on('drop', (e) => {
        e.preventDefault();
        if(e.dataTransfer.files.length > 0){ 
            var fileReader = new FileReader(); 
            mouseX=e.clientX - canvas.getBoundingClientRect().left;
            mouseY=e.clientY - canvas.getBoundingClientRect().top;
            fileReader.onload= function(e){
                var len=sablonActiv.length;
                var indice;
                    for(var i = 0; i < len; i++){
                        if((mouseX >= sablonActiv[i].x)
                        && (mouseX <= sablonActiv[i].x + sablonActiv[i].latime)
                        && (mouseY >= sablonActiv[i].y)
                        && (mouseY <= sablonActiv[i].y + sablonActiv[i].inaltime)){
                            vectorAreImagine[i]=true; 
                            vectorImaginiDesenate[i]=$("<img></img>")
                            .attr("src",e.target.result)[0]; 
                            indice=i;
                            
                            $("<img></img>").attr("src",e.target.result).on('load',() => {
                                desenareImagine(vectorImaginiDesenate[indice],indice);
                            });
                            i = len;
                        }  
                    }
            };
           
            fileReader.readAsDataURL(e.dataTransfer.files[0]);   
        }
    });
   });

   var buttonSalveaza= document.querySelector('#btnSalveaza');
   buttonSalveaza.addEventListener('click', () => {
        var elemA = document.createElement('a');
        var dataurl = canvas.toDataURL('image/png');  
        elemA.setAttribute('href',dataurl);
        elemA.setAttribute('download','image.png');
        elemA.style.display='none'; 
        elemA.click(); 

      
        var sound = document.querySelector('#clicksound');
        sound.play();
   });
   

   var copieVectorData=[];  //vector folosit pentru a copia vectorul data initial daca se selecteaza efect dupa efect

   var canvasEditare = document.querySelector('#canvasEditare');
   var WEditare = canvasEditare.width;
   var HEditare=canvasEditare.height;
   var contextEditare = canvasEditare.getContext('2d');

   var pozitieImgDesenata ; 
   var popupElem = document.querySelector('.popup');
   var vectorAreImagine=[];
   var vectorImaginiDesenate= [];
   canvas.addEventListener('click', (e) => {
 
    mouseX=Math.round(e.clientX - canvas.getBoundingClientRect().left);
    mouseY=Math.round(e.clientY - canvas.getBoundingClientRect().top);
    len=sablonActiv.length;
                    for(var i = 0; i < len; i++){
                        if((mouseX >= sablonActiv[i].x)
                        && (mouseX <= sablonActiv[i].x + sablonActiv[i].latime)
                        && (mouseY >= sablonActiv[i].y)
                        && (mouseY <= sablonActiv[i].y + sablonActiv[i].inaltime)){
                           
                            if(vectorAreImagine[i] === true){
                                popupElem.style.display='block';  
                                pozitieImgDesenata=i;  
                                contextEditare.drawImage(vectorImaginiDesenate[i],0,0,  
                                    WEditare,HEditare);
                                copieVectorData = contextEditare.getImageData(0,0,WEditare,HEditare).data; 
                            }
                        }
                    }});

    var btnInchiderePopup= document.querySelector('#inchiderePopup');
    btnInchiderePopup.addEventListener('click',()=>{
        popupElem.style.display = 'none';
    });

var filtruFinal; 
function aplicareFiltruRosu(cont,wE,hE,xE,yE,vectorData){
    var vC = new Uint8ClampedArray(vectorData);
    for(var i = 0;i < wE * hE * 4; i += 4){
        vC[i] = 255;
    }
    cont.putImageData(new ImageData(vC,wE,hE),xE,yE);  
}

var btnFiltruRosu=document.querySelector('#filtruRosu');
btnFiltruRosu.addEventListener('click',()=>{
    aplicareFiltruRosu(contextEditare,WEditare,HEditare,0, 0, copieVectorData);
    filtruFinal=1;
});

function aplicareFiltruVerde(cont,wE,hE,xE,yE,vectorData){
    var vC = new Uint8ClampedArray(vectorData);
    for(var i =1;i <wE*hE*4;i+=4){
        vC[i]=255;
    }
    cont.putImageData(new ImageData(vC,wE,hE),xE,yE);
    
}
var btnFiltruVerde=document.querySelector('#filtruVerde');
btnFiltruVerde.addEventListener('click',()=>{
    aplicareFiltruVerde(contextEditare,WEditare,HEditare,0, 0, copieVectorData);
    filtruFinal=2;
});

function aplicareFiltruAlbastru(cont,wE,hE,xE,yE,vectorData){
    var vC = new Uint8ClampedArray(vectorData);
    for(var i = 2;i < wE * hE * 4; i += 4){
        vC[i] = 255;
    }
    cont.putImageData(new ImageData(vC,wE,hE),xE,yE);
}


var btnFiltruAlbastru=document.querySelector('#filtruAlbastru');
btnFiltruAlbastru.addEventListener('click',()=>{
    aplicareFiltruAlbastru(contextEditare,WEditare,HEditare,0, 0, copieVectorData);
    filtruFinal=3;
});

function aplicareFiltruGri(cont,wE,hE,xE,yE,vectorData){
    var vC = new Uint8ClampedArray(vectorData);
    for(var y=0;y< hE;y++){
        for(var x=0;x<wE;x++){
            var i= (y*4)*wE + x*4;
            var med = (vC[i]+vC[i+1]+vC[i+2])/3;
            vC[i]=med;
            vC[i+1]=med;
            vC[i+2]=med;
        }
    }
    cont.putImageData(new ImageData(vC,wE,hE),xE,yE);
}

var btnFiltruGri=document.querySelector('#filtruGri');
btnFiltruGri.addEventListener('click',()=>{
    aplicareFiltruGri(contextEditare,WEditare,HEditare,0, 0, copieVectorData);
    filtruFinal=4;
});


var btnSalveazaFiltru = document.querySelector('#btnSalveazaFiltru');
btnSalveazaFiltru.addEventListener('click', () => {

    switch (filtruFinal) {
        case 1:
                aplicareFiltruRosu(context,sablonActiv[pozitieImgDesenata].latime,
                    sablonActiv[pozitieImgDesenata].inaltime,
                    sablonActiv[pozitieImgDesenata].x,
                    sablonActiv[pozitieImgDesenata].y,
                    context.getImageData(sablonActiv[pozitieImgDesenata].x,
                        sablonActiv[pozitieImgDesenata].y,
                        sablonActiv[pozitieImgDesenata].latime,
                        sablonActiv[pozitieImgDesenata].inaltime).data);
            break;
            case 2:
                    aplicareFiltruVerde(context,sablonActiv[pozitieImgDesenata].latime,
                        sablonActiv[pozitieImgDesenata].inaltime,
                        sablonActiv[pozitieImgDesenata].x,
                        sablonActiv[pozitieImgDesenata].y,
                        context.getImageData(sablonActiv[pozitieImgDesenata].x,
                            sablonActiv[pozitieImgDesenata].y,
                            sablonActiv[pozitieImgDesenata].latime,
                            sablonActiv[pozitieImgDesenata].inaltime).data);
                break;
                case 3:
                        aplicareFiltruAlbastru(context,sablonActiv[pozitieImgDesenata].latime,
                            sablonActiv[pozitieImgDesenata].inaltime,
                            sablonActiv[pozitieImgDesenata].x,
                            sablonActiv[pozitieImgDesenata].y,
                            context.getImageData(sablonActiv[pozitieImgDesenata].x,
                                sablonActiv[pozitieImgDesenata].y,
                                sablonActiv[pozitieImgDesenata].latime,
                                sablonActiv[pozitieImgDesenata].inaltime).data);
                    break;
                    case 4:
                            aplicareFiltruGri(context,sablonActiv[pozitieImgDesenata].latime,
                                sablonActiv[pozitieImgDesenata].inaltime,
                                sablonActiv[pozitieImgDesenata].x,
                                sablonActiv[pozitieImgDesenata].y,
                                context.getImageData(sablonActiv[pozitieImgDesenata].x,
                                    sablonActiv[pozitieImgDesenata].y,
                                    sablonActiv[pozitieImgDesenata].latime,
                                    sablonActiv[pozitieImgDesenata].inaltime).data);
                        break;
    }
     popupElem.style.display = "none";  


     var soundedit = document.querySelector('#buttoneditsound');
     soundedit.play();

     
      var helpingCanvas = document.createElement("canvas");
      helpingCanvas.width = sablonActiv[pozitieImgDesenata].latime;
      helpingCanvas.height = sablonActiv[pozitieImgDesenata].inaltime;
      helpingCanvas.getContext("2d").drawImage(canvas,sablonActiv[pozitieImgDesenata].x,
                                             sablonActiv[pozitieImgDesenata].y,
                                             sablonActiv[pozitieImgDesenata].latime,
                                             sablonActiv[pozitieImgDesenata].inaltime,0,0,
                                             sablonActiv[pozitieImgDesenata].latime,
                                             sablonActiv[pozitieImgDesenata].inaltime);
     var imgNoua = document.createElement("img");  
     imgNoua.src = helpingCanvas.toDataURL();  
     vectorImaginiDesenate[pozitieImgDesenata] = imgNoua;  
});

//1.Model
const canvasAnim= document.querySelector('#canvasAnim');
const Hca=canvasAnim.height,Wca=canvasAnim.width;
const contextAnim=canvasAnim.getContext('2d');
let x=4,y=4, w=10,h=10, vx=4;

//2.Desenare
function desenare(){
    //stergere canvas
    contextAnim.fillStyle='antiquewhite';
    contextAnim.fillRect(0,0,Wca,Hca);

     //desenare cadru curent
    contextAnim.beginPath();
    contextAnim.arc(x, y, 3, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+20, y+12, 6, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+10, y+25, 5, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+5, y+40, 4, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+50, y+7, 6, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+60, y+25, 9, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+40, y+35, 5, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+80, y+10, 4, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+100, y+25, 7, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+120, y+35, 3, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+140, y+40, 5, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+130, y+10, 6, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+160, y+10, 3, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+170, y+30, 7, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+190, y+40, 5, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+210, y+5, 3, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+200, y+20, 7, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+230, y+35, 8, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+240, y+5, 5, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+260, y+20, 7, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();

    contextAnim.beginPath();
    contextAnim.arc(x+270, y+35, 4, 0, 2 * Math.PI);
    contextAnim.stroke();
    contextAnim.fillStyle='#CDB982';
    contextAnim.fill();
    
    requestAnimationFrame(desenare);
}
desenare();

//3.Actualizare
function actualizare() {
    x = x + vx;
    if (x< 0) {
        x = 0;
        vx = Math.abs(vx);
    } else if (x + w> Wca) {
        x = Wca - w;
        vx = -Math.abs(vx);
    }
}
setInterval(actualizare,10);

}
