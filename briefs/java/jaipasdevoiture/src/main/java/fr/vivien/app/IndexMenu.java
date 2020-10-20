package fr.vivien.app;

public class IndexMenu extends Menu {

    public IndexMenu(ConsoleApp app) {
        super(app);
        this.actions = new String[] { "Menu Vehicules", "Menu Clients", "Menu Agences", "Quitter" };

    }

    public void display() {
        System.out.println("\n=== Logiciel de gestion \"J'ai pas de voiture\" ===\n");

        this.displayActions();

        switch (Integer.parseInt(this.scanner.nextLine())) {
            case 1:
                this.app.vehicleMenu.display();
                break;
            case 2:
                this.app.clientMenu.display();
                break;
            case 3:
                this.app.agencyMenu.display();
                break;
            default:
                System.out.println("blip bloup?!");
                break;
        }
    }
}
