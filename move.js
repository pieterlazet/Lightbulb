class Move {
    disX(pt, car) {
        lenX = pt.x - car.x;
        return lenX;
    }

    disY(pt, car) {
        lenY = pt.y - car.y;
        return lenY;
    }

    move(disX, disY, car) {
        disY = disY;
        if (disX < 20) {
            car.x = car.x - 100;
            return car;
        }else {
            car.x += 1;
            return car;
        }
    }
}