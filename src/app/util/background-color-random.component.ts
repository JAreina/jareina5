export class BackgroundColorRandomComponent {

  coloor: any={};

  constructor() {
        this.setBackgroundColor();
   }

   setBackgroundColor (){
            let i =0;
            let cont=0;
            let resultado:string;
            let opacity = new Number((Math.random()*1).toFixed(2));
            if(opacity ===0.00){
                        opacity = 0.5
            }
            //console.log(opacity)
            resultado= `rgba(${Math.floor(Math.random()*255)},
                                      255,
                                        ${Math.floor(Math.random()*255)},
                                        ${opacity}  `;
                                 this.coloor={'color': resultado};
         // console.log(this.coloor);
} 
}
