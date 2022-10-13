class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle = angle;
    }
    display(){
        console.log(this.angle);
        if(keyIsDown(UP_ARROW)&& this.angle > -1.45){
           //this.angle = this.angle -0.02;
           this.angle -= 0.02;
        }
        if(keyIsDown(DOWN_ARROW) && this.angle < 0.35){
           //this.angle = this.angle -0.02;
           this.angle += 0.02;
        }
        fill(100);
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.w,this.h);
        pop();
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI);
    }
}