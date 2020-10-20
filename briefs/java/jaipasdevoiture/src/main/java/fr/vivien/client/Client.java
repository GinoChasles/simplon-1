package fr.vivien.client;

import java.util.ArrayList;

import fr.vivien.geolocation.Address;
import fr.vivien.vehicle.*;
import fr.vivien.agency.Agency;

public class Client {

    public static ArrayList<Client> clients = new ArrayList<Client>();
    /**
     * Tha id of the client
     */
    public int id;
    /**
     * The first name of the client
     */
    public String firstName;
    /**
     * The last name of the client
     */
    public String lastName;
    /**
     * The vehicle the client booked
     */
    public Vehicle vehicle;
    /**
     * The agency the client is registered in
     */
    public Agency agency;

    /**
     * The address of the client
     */
    public Address address;

    /**
     * Constructor
     * 
     * @param firstName The first name of the client
     * @param lastName  The last name of the client
     * @param agency    The agency the client is registered in
     */
    public Client(String firstName, String lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.id = Client.clients.size();

        clients.add(this);
    }

    public String toString() {
        return this.firstName + " " + this.lastName;
    }
}