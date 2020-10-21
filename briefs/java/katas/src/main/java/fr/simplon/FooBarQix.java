package fr.simplon;

public class FooBarQix {

    public static void main(String[] args) {

    }

    public static boolean isDivisiblePer3(int number) {
        return number % 3 == 0;
    }

    public static boolean isDivisiblePer5(int number) {
        return number % 5 == 0;
    }

    public static boolean isDivisiblePer7(int number) {
        return number % 7 == 0;
    }

    public static String multipleOfThreeToFoo(int number) {
        return isDivisiblePer3(number) ? "Foo" : Integer.toString(number);
    }

    public static String multipleOfFiveToBar(int number) {
        return isDivisiblePer5(number) ? "Bar" : Integer.toString(number);
    }

    public static String multipleOfSevenToQix(int number) {
        return isDivisiblePer7(number) ? "Qix" : Integer.toString(number);
    }

    public static String threeToFoo(int number) {
        String num = Integer.toString(number);
        return num.contains("3") ? "Foo" : num;
    }

    public static String fiveToBar(int number) {
        String num = Integer.toString(number);
        return num.contains("5") ? "Bar" : num;
    }

    public static String sevenToQix(int number) {
        String num = Integer.toString(number);
        return num.contains("7") ? "Qix" : num;
    }

    public static String compute(int number) {

    }
}
