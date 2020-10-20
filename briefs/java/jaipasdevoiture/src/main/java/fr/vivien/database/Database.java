package fr.vivien.database;

import fr.vivien.agency.*;
import fr.vivien.client.Client;
import fr.vivien.geolocation.*;
import fr.vivien.vehicle.*;

public class Database {

    public static void generate() {
        Tank fuel40 = new Tank(EnergyType.FUEL, 40, 20);
        Tank fuel50 = new Tank(EnergyType.FUEL, 50, 25);
        Tank fuel60 = new Tank(EnergyType.FUEL, 60, 30);

        // Tank electric80 = new Tank(EnergyType.ELECTRIC, 80, 30);
        // Tank electric90 = new Tank(EnergyType.ELECTRIC, 90, 40);
        // Tank electric100 = new Tank(EnergyType.ELECTRIC, 100, 50);

        // Tank hydrogene10 = new Tank(EnergyType.HYDROGENE, 10, 5);
        // Tank hydrogene20 = new Tank(EnergyType.HYDROGENE, 20, 10);
        // Tank hydrogene30 = new Tank(EnergyType.HYDROGENE, 30, 15);

        Address brest = new Address(10, "Rue Jean-Jaurès", "29200", "Brest");
        Address rennes = new Address(2, "Rue de la Soif", "35000", "Rennes");
        Address nantes = new Address(53, "Rue du Calvaire", "44000", "nantes");

        Agency brestAgency = new Agency("JPDV Brest", brest);
        Agency rennesAgency = new Agency("JPDV Rennes", rennes);
        Agency nantesAgency = new Agency("JPDV Nantes", nantes);

        Client dica = new Client("Léonardo", "DiCaprio");
        Client brad = new Client("Brad", "Pitt");
        Client tommy = new Client("Tom", "Hanks");
        Client will = new Client("Will", "Smith");
        Client captain = new Client("Chris", "Evans");

        Client scarlett = new Client("Scralett", "Johansson");
        Client julia = new Client("Julia", "Roberts");
        Client angelina = new Client("Angelina", "Jolie");
        Client felicity = new Client("Felicity", "Huffman");
        Client josephine = new Client("Mimi", "Mattie");

        brestAgency.addClient(dica);
        brestAgency.addClient(scarlett);
        brestAgency.addClient(brad);
        brestAgency.addClient(angelina);

        nantesAgency.addClient(tommy);
        nantesAgency.addClient(julia);
        nantesAgency.addClient(tommy);

        rennesAgency.addClient(will);
        rennesAgency.addClient(captain);
        rennesAgency.addClient(felicity);
        rennesAgency.addClient(josephine);

        Car twingoVerte = new Car("Twingo verte", "Peugeot", fuel40, 69);
        twingoVerte.tank.energyLevel = 5;

        Car twingoRose = new Car("Twingo rose", "Peugeot", fuel40, 69);
        twingoRose.tank.energyLevel = 5;

        Car mercoNoire = new Car("Mercedes noire", "Mercedes", fuel60, 129);
        mercoNoire.tank.energyLevel = 10;

        Car mercoBlanche = new Car("Mercedes blanche", "Mercedes", fuel60, 129);

        Car mercoArcEnCiel = new Car("Mercedes Arc-en-ciel", "Mercedes", fuel60, 129);
        mercoArcEnCiel.tank.energyLevel = 10;

        Car fiatPandaRouillée = new Car("Fiat Panda rouillée", "Fiat", fuel50, 29);
        Car fiatPandaSansToit = new Car("Fiat Pands sans toit", "Fiat", fuel50, 19);
        fiatPandaSansToit.tank.energyLevel = 2;
        Car fiatPandaSansRoue = new Car("Fiat Panda sans roue", "Fiat", fuel50, 9);

        brestAgency.addVehicle(fiatPandaRouillée);
        brestAgency.addVehicle(mercoNoire);
        brestAgency.addVehicle(fiatPandaSansRoue);

        rennesAgency.addVehicle(mercoBlanche);
        rennesAgency.addVehicle(twingoVerte);

        nantesAgency.addVehicle(fiatPandaSansToit);
        nantesAgency.addVehicle(mercoArcEnCiel);
        nantesAgency.addVehicle(twingoRose);

        brestAgency.checkin(fiatPandaRouillée, dica);
        nantesAgency.checkin(mercoArcEnCiel, felicity);
        rennesAgency.checkin(twingoVerte, scarlett);
    }

}
