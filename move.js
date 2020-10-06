class Move {
    disX(pt, carX) {
        lenX = pt.x - carX;
        return lenX;
    }

    disY(pt, carY) {
        lenY = pt.y - carY;
        return lenY;
    }

    move(disX, carX, disY, carY) {
        disY = disY;
        carY = carY;
        if (disX < 20) {
            carX = carX - 100;
            return carX;
        }else {
            carX += 1;
            return carX;
        }
    }
}