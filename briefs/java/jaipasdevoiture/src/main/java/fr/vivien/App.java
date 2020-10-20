package fr.vivien;

import fr.vivien.app.ConsoleApp;

import fr.vivien.database.*;

public final class App {

    /**
     * Entry point of the program
     * 
     * @param args The arguments of the program.
     */

    public static void main(String[] args) {

        Database.generate();

        ConsoleApp app = new ConsoleApp();
        app.start();
    }
}
