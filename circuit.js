class Circuit{
    build(walls){
        let x1 = 50;
        let y1 = 100;
        let x2 = 50;
        let y2 = 600; 
        walls[0] = new Boundary(x1, y1, x2, y2);
        let x3 = 150;
        let y3 = 200;
        let x4 = 150;
        let y4 = 500; 
        walls[1] = new Boundary(x3, y3, x4, y4);
        let x5 = 50;
        let y5 = 100;
        let x6 = 250;
        let y6 = 100; 
        walls[2] = new Boundary(x5, y5, x6, y6);
        let x7 = 250;
        let y7 = 100;
        let x8 = 225;
        let y8 = 275; 
        walls[3] = new Boundary(x7, y7, x8, y8);
        let x9 = 150;
        let y9 = 400;
        let x10 = 350;
        let y10 = 275; 
        walls[4] = new Boundary(x9, y9, x10, y10);
        let x11 = 225;
        let y11 = 275;
        let x12 = 350;
        let y12 = 175; 
        walls[5] = new Boundary(x11, y11, x12, y12);
        return walls;
    }
}