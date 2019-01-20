function Slider(slider) {
    this.slider = slider;
    this.wraper = slider.querySelector(".wraper");
    this.wraper2 = slider.querySelector(".wraper2");
    this.mover = slider.querySelector(".mover");
    this.leftBtn = slider.querySelector(".arrow-left");
    this.rightBtn = slider.querySelector(".arrow-right");
    this.timer = null;
    this.active = 0;
    // this.addDottes();
    this.bindEvent();

}

// Slider.prototype.addDottes = function () {
//     this.num = this.slider.querySelectorAll(".slide").length;
//     for (let i=1; i<=this.num; i++){
//         var circ = document.createElement("div");
//         circ.className="circle";
//         circ.dataset.id=i;
//         this.wraper2.appendChild(circ);
//     }
//     this.wraper2.children[this.active].style.background="gray";
// };

Slider.prototype.bindEvent=function () {

    this.leftBtn.addEventListener("click",this.moveRight.bind(this));
    this.rightBtn.addEventListener("click",this.moveLeft.bind(this));
    // this.run();
};

Slider.prototype.moveRight = function () {
    if(this.timer!==null) return;
    let margin = -100;
    this.mover.prepend(this.mover.children[this.mover.children.length-1]);
    this.mover.style.marginLeft=margin+"%";
    this.timer = setInterval(function () {
        margin+=2;
        this.mover.style.marginLeft=margin+"%";
        if(margin>=0){
            clearInterval(this.timer);
            this.mover.style.marginLeft="";
            this.timer=null;
        }
    }.bind(this),25);
    this.wraper2.children[this.active].style.background="";
    this.active--;
    if (this.active < 0){this.active = this.num-1}
    this.wraper2.children[this.active].style.background="gray";
};
Slider.prototype.moveLeft = function () {
    if(this.timer!==null) return;
    let margin = 0;
    this.timer = setInterval(function () {
        margin-=2;
        this.mover.style.marginLeft=margin+"%";
        if(margin<= -100){
            clearInterval(this.timer);
            this.mover.style.marginLeft="";
            this.timer=null;
            this.mover.appendChild(this.mover.children[0]);
        }
    }.bind(this),25);
    this.wraper2.children[this.active].style.background="";
    this.active++;
    if (this.active > (this.num-1)){this.active = 0}
    this.wraper2.children[this.active].style.background="gray";
};

Slider.prototype.run=function () {
    this.timer=setInterval(function (){
        this.moveRight.bind(this);
    }.bind(this),10);
};

window.addEventListener("load",function () {
    let s = new Slider(document.getElementById("sl1"));
});