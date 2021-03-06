class Invader{
    constructor(x_,y_){
        this.pos=createVector(x_,y_);
        this.velocity=createVector(0,0);
        this.acceleration=createVector(0,0);
        this.width=50;
        this.height=40;
    }
    update(){
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration=createVector(0,0);
    }
    appleForce(force){
        this.acceleration.y=force;
    }
    show(){
        // stroke(255,0,0);
        // fill(255,0,0);
        image(invaderImage,this.pos.x,this.pos.y,this.width,this.height);
        // rect(this.pos.x,this.pos.y,this.width,this.height);
    }
}