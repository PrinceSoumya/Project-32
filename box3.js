class Block3{
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      stroke (20);
      rect(0, 0, this.width, this.height);
      pop();
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -105){
        score++;
      }
    }
  };
  