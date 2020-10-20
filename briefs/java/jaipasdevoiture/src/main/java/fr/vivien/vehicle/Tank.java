package fr.vivien.vehicle;

public class Tank {

    public EnergyType energyType;

    public int energyLevel;
    public int lowEnergyLevel;
    public int energyCapacity;

    public Tank(EnergyType energyType, int energyCapacity, int lowEnergyLevel) {
        this.energyType = energyType;
        this.energyLevel = energyCapacity;
        this.energyCapacity = energyCapacity;
        this.lowEnergyLevel = lowEnergyLevel;
    }

    public boolean isLevelLow() {
        return this.energyLevel <= this.lowEnergyLevel;
    }

    public void fill() {
        this.energyLevel = this.energyCapacity;
    }

    public String toString() {
        return String.format("Energie: %s, Niveau actuel: %dL, Capacité: %dL, Niveau d'alerte: %dL", this.energyType,
                this.energyLevel, this.energyCapacity, this.lowEnergyLevel);
    }
}
