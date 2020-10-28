package fr.simplon;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

/**
 * InnerNumbersInWords
 */
public class NumbersInWords {

    /**
     * Représentation en lettres de chiffres
     */
    public static HashMap<String, String> numTranslator = new HashMap<String, String>() {
        {
            put("1", "one");
            put("2", "two");
            put("3", "three");
            put("4", "four");
            put("5", "five");
            put("6", "six");
            put("7", "seven");
            put("8", "eight");
            put("9", "nine");
            put("10", "ten");
            put("20", "twenty");
            put("30", "thirty");
            put("40", "fourty");
            put("50", "fifty");
            put("60", "sixty");
            put("70", "seventy");
            put("80", "eighty");
            put("90", "ninety");
        }
    };

    public static HashMap<String, String> elevenToNineteen = new HashMap<String, String>() {
        {
            put("ten one", "eleven");
            put("ten two", "twelve");
            put("ten three", "thirteen");
            put("ten four", "fourteen");
            put("ten five", "fifteen");
            put("ten six", "sixteen");
            put("ten seven", "seventeen");
            put("ten eight", "eighteen");
            put("ten nine", "nineteen");
        }
    };

    /**
     * Représentation des puissances de mille selon la positon dans l'index de
     * l'ArrayList du bloc de centaine
     */
    public static HashMap<Integer, String> numPosTranslator = new HashMap<Integer, String>() {
        {
            put(0, "");
            put(1, "thousand");
            put(2, "million");
            put(3, "billion");
        }
    };

    /**
     * Extrait chaque bloc de centaine dans un arrayList
     * 
     * @param number le nombre à extraire
     * @return un ArrayList de chaque bloc de centaines
     */
    public static ArrayList<String> extract(String number) {
        ArrayList<String> splited = new ArrayList<String>(Arrays.asList(number.replaceAll("[.,\s]", "").split("")));

        String sequenceOf3 = "";
        ArrayList<String> numArray = new ArrayList<String>();

        do {
            int index = splited.size() - 1;
            sequenceOf3 = splited.get(index) + sequenceOf3;
            splited.remove(index);

            if (sequenceOf3.length() == 3) {
                numArray.add(sequenceOf3);
                sequenceOf3 = "";
            }

        } while (splited.size() != 0);

        return numArray;
    }

    /**
     * Extrait la sequence de bloc de centaine en un ArrayList
     * 
     * @param number le bloc à extraire
     * @return un Array de chaque chiffre dnas le bloc de centaine
     */
    public static String[] extractSequence(String number) {
        String[] arr = new String[] { "0", "0", "0" };
        String[] splited = number.split("");

        int j = arr.length - 1;

        for (int i = splited.length; i > 0; i--) {
            arr[j] = splited[i - 1];
            j--;
        }

        return arr;
    }

    /**
     * Traduit une unité de chiffre en lettre
     * 
     * @param number le chiffre à traduire
     * @return la traduction du chiffre en lettre
     */
    public static String translateUnity(String number) {
        String res = numTranslator.get(number);
        return res != null ? res : "";
    }

    /**
     * Traduit une dizaine de chiffre en lettre
     * 
     * @param number le chiffre à traduire
     * @return la traduction du chiffre en lettre
     */
    public static String translateDecade(String number) {
        String res = numTranslator.get(Integer.toString(Integer.parseInt(number) * 10));
        return res != null ? res : "";
    }

    /**
     * Traduit une centaine de chiffre en lettre
     * 
     * @param number le chiffre à traduire
     * @return la traduction du chiffre en lettre
     */
    public static String translateHundreds(String number) {
        String res = translateUnity(number);
        return res != "" ? res + " hundred" : "";
    }

    /**
     * Traduit un bloc de centaine
     * 
     * @param number le bloc à traduire
     * @return la trduction du bloc
     */
    public static String translateBlockOf3(String number) {
        String[] splited = number.split("");
        ArrayList<String> translated = new ArrayList<String>();
        String hundreds = "", decade = "", unity = "";

        for (int i = 0; i < splited.length; i++) {
            switch (i) {
                case 0:
                    hundreds = translateHundreds(splited[i]);
                    break;
                case 1:
                    decade = translateDecade(splited[i]);
                    break;
                case 2:
                    unity = translateUnity(splited[i]);
                    break;
            }
        }
        translated.add(hundreds);

        if (decade != "0" && unity != "0") {
            translated.add("and");
        }

        translated.add(decade);
        translated.add(unity);

        return String.join(" ", translated.toArray(new String[translated.size()]));
    }

    /**
     * Traduit la puissance de 1000 en lettres
     * 
     * @param index l'index qui déterminera la puissance de 1000
     * @return la puissance de mille en lettres
     */
    public static String getPowerOfThousand(int index) {
        return numPosTranslator.get(index);
    }

    /**
     * Traduit les séquence incorrectes de type "ten one" en "eleven"
     * 
     * @param sequence la sequence où rempalcer les nuances de dizaine
     * @return la séquence corrigée
     */
    public static String replaceTenToNineteen(String sequence) {
        for (String k : elevenToNineteen.keySet()) {
            sequence = sequence.replaceAll(k, elevenToNineteen.get(k));
        }
        return sequence;
    }

    /**
     * Traduit un nombre en lettres
     * 
     * @param number le nombre à traduire
     * @return la traduction en lettres du chiffre
     */
    public static String translate(String number) {
        ArrayList<String> extracted = extract(number);
        ArrayList<String> translated = new ArrayList<String>();

        int i = 0;

        for (String sequence : extracted) {
            translated.add(0, translateBlockOf3(sequence) + " " + getPowerOfThousand(i));
            i++;
        }

        return replaceTenToNineteen(String.join(", ", translated.toArray(new String[translated.size()])).trim());
    }
}