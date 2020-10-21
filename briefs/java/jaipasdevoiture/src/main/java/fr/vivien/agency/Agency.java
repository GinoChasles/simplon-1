package fr.vivien.agency;

import fr.vivien.geolocation.Address;
import fr.vivien.vehicle.*;
import fr.vivien.client.Client;

import java.util.ArrayList;

public class Agency {
    /**
     * All the agencies
     */
    public static ArrayList<Agency> agencies = new ArrayList<Agency>();
    /**
     * The id of the agency
     */
    public int id;
    /**
     * The name of the agency
     */
    public String name;
    /**
     * The address of the agency
     */
    public Address address;
    /**
     * All the vehicles of the agency
     */
    public ArrayList<Vehicle> vehicles;
    /**
     * All the clients of the agency
     */
    public ArrayList<Client> clients;

    /**
     * Constructor
     * 
     * @param name    The name of the agency
     * @param address The address of the agency
     */
    public Agency(String name, Address address) {
        this.name = name;
        this.id = Agency.agencies.size();
        this.setAddress(address);

        this.clients = new ArrayList<Client>();
        this.vehicles = new ArrayList<Vehicle>();

        Agency.agencies.add(this);
    }

    /**
     * Defines the agenciy address and adds the agency at the address
     * 
     * @param address
     */
    public void setAddress(Address address) {
        this.address = address;
        address.agency = this;
    }

    /**
     * Add a vehicle in the vehicles stock of the agency
     * 
     * @param vehicle The vehicle to add
     */
    public void addVehicle(Vehicle vehicle) {
        vehicle.agency = this;
        this.vehicles.add(vehicle);
    }

    /**
     * Remove a vehicle from the agency stock
     * 
     * @param vehicle The name of the vehicle to remove
     */
    public void removeVehicle(Vehicle vehicle) {
        this.vehicles.remove(vehicle);
    }

    /**
     * Add a client in the clients database of the agency
     * 
     * @param client The client to add
     */
    public void addClient(Client client) {
        this.clients.add(client);
    }

    /**
     * Remove a client from the agency database
     * 
     * @param client The client to remove
     */
    public void removeClient(Client client) {
        this.clients.remove(client);
    }

    /**
     * Make a vehicle unavailable and register it to the client
     * 
     * @param vehicle The vehicle we assign to the client
     * @param client  The client we assign the vehicle to
     */
    public boolean checkin(Vehicle vehicle, Client client) {
        if (!vehicle.isAvailable) {
            System.out.println("\nLa voiture n'est pas libre");
            return false;
        } else if (client.vehicle != null) {
            System.out.println("\nLe client loue déjà un véhhicule");
            return false;
        } else {
            client.vehicle = vehicle;
            vehicle.isAvailable = false;
            vehicle.client = client;
            return true;
        }
    }

    /**
     * Set the vehicle available again and remove it from the client
     * 
     * @param client The client we get the vehicle back
     */
    public boolean checkout(Client client) {
        if (client.vehicle != null) {
            client.vehicle.isAvailable = true;
            client.vehicle.client = null;
            client.vehicle = null;
            System.out.println("Le véhicule a bien été rendu");
            return true;
        } else {
            System.out.println("Le client n'a pas de véhicule à rendre");
            return false;
        }
    }

    /**
     * Returns a hashmap of the available vehicles in the agency
     * 
     * @return The available vehicles
     */
    public ArrayList<Vehicle> availableVehicles() {
        ArrayList<Vehicle> availableVehicles = new ArrayList<Vehicle>();

        this.vehicles.forEach(vehicle -> {
            if (vehicle.isAvailable) {
                availableVehicles.add(vehicle);
            }
        });

        return availableVehicles;
    }

    /**
     * Describes the agency
     */
    public String toString() {
        return String.format("Agence: %s \nAddresse: %s\nNombre de vehicules: %d\nNombre de clients : %d", this.name,
                this.address.toString(), this.vehicles.size(), this.clients.size());
    }
}