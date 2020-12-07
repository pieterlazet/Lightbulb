class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a+= 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(car) {
        this.pos.set(car);
    }

    look(wall, car) {
        for (let ray of this.rays) {
            let closest = null;
            let record = Infinity;
            const pt = ray.cast(wall, car);
            if (pt) {
                const d = p5.Vector.dist(this.pos, pt);
                if (d < record){
                    record = d;
                    closest = pt;    
                }

            }

            

            // if (closest) {
            //     stroke(255, 100);
            //     line(this.pos.x, this.pos.y, closest.x, closest.y);
            // } 

            if (pt) {
                stroke(0, 100);
                // line(this.pos.x, this.pos.y, pt.x, pt.y);
            } 
            return pt;
        } 
    }

    show() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            // ray.show();
        }
    }
}