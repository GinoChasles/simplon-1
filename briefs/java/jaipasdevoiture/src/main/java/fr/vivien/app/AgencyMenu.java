package fr.vivien.app;

import fr.vivien.agency.Agency;

public class AgencyMenu extends Menu {

    public AgencyMenu(ConsoleApp app) {
        super(app);

        this.actions = new String[] { "Afficher une agence", "Créer une agence", "Mettre à jour une agence",
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
    public void read() {

        this.readAll();

        System.out.print("\nIndiquez l'index de l'agence à consulter : ");

        Agency agency = checkAgency();

        System.out.println("\n=== Profil de l'agence ===\n");
        System.out.println(agency + "\n");

        this.display();
    }

    public Agency checkAgency() {
        Agency agency;
        do {
            int choice = Integer.parseInt(scanner.nextLine());
            if (choice < Agency.agencies.size()) {
                agency = Agency.agencies.get(choice);
            } else {
                agency = null;
            }

            if (agency == null)
                System.out.print("Le choix n'est pas valide : ");
        } while (agency == null);

        return agency;
    }

    /**
     * Prints in the console every vehicle per Agency
     */
    public void readAll() {
        System.out.println("\n=== Liste des agences ===");

        Agency.agencies.forEach(agency -> {
            System.out.println(String.format("\n%d - %s", agency.id, agency.name));
        });
    }

    public void create() {
        System.out.println("\n=== Création d'une agence ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }

    public void update() {
        System.out.println("\n=== Mise à jour d'une agence ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }

    public void delete() {
        System.out.println("\n=== Suppression d'une agence ===\n");
        System.out.println("Pas de bras, pas de chocolat!");

        this.display();
    }
}
