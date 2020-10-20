package fr.vivien.app;

import fr.vivien.agency.Agency;
import fr.vivien.client.Client;
import fr.vivien.vehicle.*;

public class VehicleMenu extends Menu {

    public VehicleMenu(ConsoleApp app) {
        super(app);

        this.actions = new String[] { "Afficher un véhicule", "Créer un véhicule", "Mettre à jour un véhicule",
                "Voir les véhicules disponibles", "Faire le plein des véhicules", "Réserver un véhicule",
                "Revenir au menu principal" };
    }

    /**
     * 
     */
    public void display() {
        System.out.println("");

        this.displayActions();

        int action = Integer.parseInt(this.scanner.nextLine());

        switch (action) {
            case 1:
                this.read();
                break;
            case 2:
                this.create();
                break;
            case 3:
                this.update();
                break;
            case 4:
                this.readAvailable(false);
                break;
            case 5:
                this.readLowLevel();
                break;
            case 6:
                this.checkin();
                break;
            case 7:
                this.app.indexMenu.display();
                break;
            default:
                this.app.indexMenu.display();
                break;
        }
    }

    public void checkin() {
        this.readAvailable(true);

        System.out.print("\nIndiquez l'index du véhicule à consulter : ");

        int index;
        do {
            index = Integer.parseInt(scanner.nextLine());

            System.out.println("Le choix n'est pas valide");
        } while (Vehicle.vehicles.get(index) == null);

        Vehicle vehicle = Vehicle.vehicles.get(index);

        System.out.println("\n=== Profil du véhicule ===\n");
        System.out.println(vehicle + "\n");

        System.out.print("Selectionnez le client : ");

        this.app.clientMenu.read(true);

        Client client;

        do {
            index = Integer.parseInt(scanner.nextLine());

            if (Client.clients.get(index) == null)
                System.out.print("Le choix n'est pas valide : ");
        } while (Client.clients.get(index) == null);

        client = Client.clients.get(index);

        System.out.println("0 - Enregister");
        System.out.println("1 - Recommencer");
        System.out.println("2 - Annuler");

        System.out.print("\nQuel est votre choix? : ");

        switch (Integer.parseInt(scanner.nextLine())) {
            case 0:
                vehicle.agency.checkin(vehicle, client);
                break;
            case 1:
                this.checkin();
                break;
            case 2:
                this.app.indexMenu.display();
                break;
            default:
                System.out.println("Blip bloup?!");
                this.app.indexMenu.display();
                break;
        }

        this.display();
    }

    /**
     * 
     */
    public void read() {

        this.readAll();

        System.out.print("\nIndiquez l'index du véhicule à consulter : ");

        int index;
        do {
            index = Integer.parseInt(scanner.nextLine());

            System.out.println("Le choix n'est pas valide");
        } while (Vehicle.vehicles.get(index) == null);

        app.currentVehicle = Vehicle.vehicles.get(index);

        System.out.println("\n=== Profil du véhicule ===\n");
        System.out.println(app.currentVehicle + "\n");

        this.display();
    }

    /**
     * 
     */
    public void readLowLevel() {
        int j = 0;

        System.out.println("\n=== Liste des véhicules nécessitant un plein ====\n");

        for (Agency agency : Agency.agencies) {
            int i = 0;

            System.out.println("\n=== " + agency.name + " ====\n");

            for (Vehicle v : agency.vehicles) {
                if (v.tank.isLevelLow()) {
                    System.out.println(v.id + " - " + v.name + " - " + v.tank.energyLevel + "/" + v.tank.energyCapacity
                            + " litres");
                    i++;
                    j++;
                }
            }

            if (i == 0) {
                System.out.println("Aucun");
            }
        }

        if (j != 0) {
            System.out.print("\nDemander le plein des réservoirs? (1 - Oui / 2 - Non) : ");

            switch (Integer.parseInt(this.scanner.nextLine())) {
                case 1:
                    Vehicle.vehicles.forEach(v -> {
                        if (v.tank.isLevelLow()) {
                            v.tank.fill();
                        }
                    });
                    System.out.println("\nLes agences ont été contactées\n");
                    break;
                case 2:
                    System.out.println("\nTant pis!\n");
                    break;
                default:
                    System.out.println("Blip bloup?!");
                    break;
            }

        }
        System.out.println("");

        this.display();
    }

    /**
     * Prints in the console every vehicle per Agency
     */
    public void readAll() {
        System.out.println("\n=== Liste des véhicultes ===");

        Agency.agencies.forEach(agency -> {

            System.out.println(String.format("\n=== %s ===\n", agency.name));

            agency.vehicles.forEach(vehicle -> {
                System.out.println(vehicle.id + " : " + vehicle.name);
            });
        });
    }

    /**
     * displays all available vehicles
     */
    public void readAvailable(boolean isCheckin) {

        System.out.println("\n=== Profil des véhicules disponibles ===\n");

        Agency.agencies.forEach(agency -> {

            System.out.println(String.format("\n=== %s ===\n", agency.name));

            agency.vehicles.forEach(vehicle -> {
                if (vehicle.isAvailable) {
                    System.out.println(vehicle.id + " : " + vehicle.name);
                }
            });
        });

        if (!isCheckin) {
            display();
        }
    }

    public void create() {

        System.out.println("\n=== Création d'un véhicule ===\n");

        Vehicle vehicle;
        System.out.print("Quel est le nom du véhicule? : ");
        String name = this.scanner.nextLine();
        System.out.print("Quel est la marque du véhicule? : ");
        String brand = this.scanner.nextLine();
        System.out.print("Quel est la capacité du réservoir du véhicule? : ");
        int energyCapacity = Integer.parseInt(this.scanner.nextLine());
        System.out.print("Quel est le niveau d'alerte du réservoir du véhicule? : ");
        int energyLowLevel = Integer.parseInt(this.scanner.nextLine());
        System.out.print("Quel est le prix du véhicule? : ");
        int price = Integer.parseInt(this.scanner.nextLine());
        System.out.print("A quelle agence attriburer le véhicule? : \n");

        this.app.agencyMenu.readAll();

        System.out.print("\nQuel est votre choix? : ");

        Agency agency = this.app.agencyMenu.checkAgency();

        vehicle = new Car(name, brand, new Tank(EnergyType.FUEL, energyCapacity, energyLowLevel), price);

        agency.addVehicle(vehicle);

        System.out.println("\n" + vehicle.toString() + "\n");

        System.out.println("0 - Enregister");
        System.out.println("1 - Recommencer");
        System.out.println("2 - Annuler");

        System.out.print("\nQuel est votre choix? : ");

        switch (Integer.parseInt(scanner.nextLine())) {
            case 0:
                System.out.println("Enregistré! :)");
                break;
            case 1:
                agency.removeVehicle(vehicle);
                vehicle = null;
                this.create();
                break;
            case 2:
                this.app.indexMenu.display();
                break;
            default:
                System.out.println("Blip bloup?!");
                this.app.indexMenu.display();
                break;
        }

        this.display();
    }

    public void update() {
        System.out.println("\n=== Mise à jour d'un véhicule ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }

    public void delete() {
        System.out.println("\n=== Suppression d'un véhicule ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }
}
