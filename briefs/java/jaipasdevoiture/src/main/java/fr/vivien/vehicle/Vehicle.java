package fr.vivien.vehicle;

import java.util.ArrayList;

import fr.vivien.agency.Agency;
import fr.vivien.client.Client;

public class Vehicle {

    public static ArrayList<Vehicle> vehicles = new ArrayList<Vehicle>();

    public int id;

    public String type;

    public String name;

    public String brand;

    public Tank tank;

    public int price;

    public boolean isAvailable;

    public Agency agency;

    public Client client;

    public Vehicle(String name, String brand, Tank tank, int price) {
        this.name = name;
        this.brand = brand;
        this.tank = tank;
        this.price = price;
        this.isAvailable = true;
        this.id = Vehicle.vehicles.size();
        Vehicle.vehicles.add(this);
    }

    /**
     * Describes the vehicle
     */
    public String toString() {
        return String.format("Id: %d \nType: %s \nNom: %s \nMarque: %s \n%s \nPrix: %d€ \nAgence: %s \nDisponible: %s ",
                this.id, this.type, this.name, this.brand, this.tank.toString(), this.price, this.agency.name,
                this.isAvailable ? "oui" : "non");
    }

}