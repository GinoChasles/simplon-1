package fr.vivien.vehicle;

import java.util.ArrayList;

public class Car extends Vehicle {
    public static ArrayList<Car> vehicles = new ArrayList<Car>();

    public Car(String name, String brand, Tank tank, int price) {
        super(name, brand, tank, price);
        this.type = VehicleType.CAR;

        Car.vehicles.add(this);
    }
}
