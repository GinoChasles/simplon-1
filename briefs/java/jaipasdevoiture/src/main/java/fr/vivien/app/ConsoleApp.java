package fr.vivien.app;

import fr.vivien.vehicle.Vehicle;

public class ConsoleApp {
    public Vehicle currentVehicle;

    public Menu currentMenu;

    public IndexMenu indexMenu;
    public VehicleMenu vehicleMenu;
    public AgencyMenu agencyMenu;
    public ClientMenu clientMenu;

    public ConsoleApp() {
        this.vehicleMenu = new VehicleMenu(this);
        this.agencyMenu = new AgencyMenu(this);
        this.clientMenu = new ClientMenu(this);
        this.indexMenu = new IndexMenu(this);
    }

    public void start() {
        this.indexMenu.display();
    }

}
