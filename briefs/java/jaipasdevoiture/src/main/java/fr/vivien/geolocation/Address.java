package fr.vivien.geolocation;

import java.util.ArrayList;

import fr.vivien.agency.Agency;

/**
 * Address
 */
public class Address {
    /**
     * All the adresses
     */
    public static ArrayList<Address> addresses;
    /**
     * The street number of the address
     */
    public int streetNumber;
    /**
     * The street of the address
     */
    public String streetName;
    /**
     * The zipcode of the address
     */
    public String zipcode;
    /**
     * The city of the address
     */
    public String cityName;
    /**
     * The agency at this address
     */
    public Agency agency;

    public Address(int streetNumber, String streetName, String zipcode, String cityName) {
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.zipcode = zipcode;
        this.cityName = cityName;

        if (Address.addresses == null)
            Address.addresses = new ArrayList<Address>();

        Address.addresses.add(this);
    }

    public String toString() {
        return String.format("%d %s %s - %s", this.streetNumber, this.streetName, this.zipcode, this.cityName);
    }
}