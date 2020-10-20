package fr.vivien.app;

import fr.vivien.client.Client;

public class ClientMenu extends Menu {

    public ClientMenu(ConsoleApp app) {
        super(app);

        this.actions = new String[] { "Afficher un client", "Créer une client", "Mettre à jour un client",
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
                this.read(false);
                break;
            case 2:
                this.create();
                break;
            case 3:
                this.update();
                break;
            case 4:
                this.app.indexMenu.display();
                break;
            default:
                this.app.indexMenu.display();
                break;
        }
    }

    /**
     * 
     */
    public void read(boolean isLocation) {

        this.readAll();

        if (!isLocation) {
            System.out.print("\nIndiquez l'index de le client à consulter : ");

            Client client;

            do {
                client = Client.clients.get(Integer.parseInt(scanner.nextLine()));

                if (client == null)
                    System.out.println("Le choix n'est pas valide");
            } while (client == null);

            System.out.println("\n=== Profil du client ===\n");
            System.out.println(client + "\n");

            this.display();
        }
    }

    /**
     * Prints in the console every vehicle per Client
     */
    public void readAll() {
        System.out.println("\n=== Liste des clients ===");

        Client.clients.forEach(client -> {

            System.out.println(String.format("%d - %s", client.id, client.firstName + " " + client.lastName));
        });
    }

    public void create() {
        System.out.println("\n=== Création d'un client ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }

    public void update() {
        System.out.println("\n=== Mise à jour d'un client ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }

    public void delete() {
        System.out.println("\n=== Suppression d'un client ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }
}
