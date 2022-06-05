class Particle{
	
	//constructor called when creating an instance of this class
	// x & y are the location, r is the rate of decay, a alpha
	constructor(x,y,r,a){
		
		this.location = createVector(x,y) ; //spawn vector locations
		this.velocity = createVector(random(-5,5),random(-5,5)); //velcoity and direction of vectors spawn
		this.acceleration = createVector();
		this.alpha = this.palpha=a ;
		this.size=1; // size of the particle
		this.decay = r;
        this.angle =  map(
        noise(this.location.x * 0.05, this.location.y * 0.05),0,1,0,720); //Perlin noise command - borrowed over from my previous work
	
	}
	
  
      
    
	//update the velociy and location of particle
	update(p){
		
      this.acceleration.add(createVector((noise(cos(this.angle))*2-1), (noise(sin(this.angle)*2-1)))); //using code from Flow Field cos/sin to create dynamic flow
		this.location.add(this.velocity);
		this.alpha -= this.decay ;
		
	
		if(this.alpha<=this.palpha*0.25 && this.palpha>10) {
			p.push(new Particle(this.location.x, this.location.y, this.decay*0.3, this.palpha*0.4));
		}
	}
	
	//show the particles
	show(){
 
		noStroke() ;
     	c=img.get(this.location.x, this.location.y) //image pixel locations
		fill(c, 255, this.alpha) //fill/process image with particles
		ellipse(this.location.x, this.location.y, this.size); //make ellipses in x, y location + size
	}
	
} // end Particle class