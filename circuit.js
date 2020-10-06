class Circuit{
    build(){
        let x1 = 150;
        let y1 = 150;
        let x2 = 150;
        let y2 = 550; 
        let wall = new Boundary(x1, y1, x2, y2);
        return wall;
    }
}