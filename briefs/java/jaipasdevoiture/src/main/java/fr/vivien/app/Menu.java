package fr.vivien.app;

import java.util.Scanner;

public abstract class Menu implements MenuInterface {

    public Scanner scanner;

    public String[] actions;

    public ConsoleApp app;

    public Menu(ConsoleApp app) {
        this.app = app;
        this.scanner = new Scanner(System.in);
    }

    public void displayActions() {
        for (int i = 0; i < this.actions.length; i++) {
            System.out.println(String.format("%d : %s", i + 1, this.actions[i]));
        }
        System.out.print("\nQuel est votre choix? : ");
    }
}
