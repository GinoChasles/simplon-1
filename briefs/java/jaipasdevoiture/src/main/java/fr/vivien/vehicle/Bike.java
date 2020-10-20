package fr.vivien.vehicle;

import java.util.ArrayList;

public class Bike extends Vehicle {

    public static ArrayList<Bike> vehicles = new ArrayList<Bike>();

    public Bike(String name, String brand, Tank tank, int price) {
        super(name, brand, tank, price);

        this.type = VehicleType.BIKE;

        Bike.vehicles.add(this);
    }

    public Bike(String name, String brand, int price) {
        super(name, brand, null, price);

        this.type = VehicleType.BIKE;
    }
}
