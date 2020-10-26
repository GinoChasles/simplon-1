package fr.simplon;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

/**
 * InnerNumbersInWords
 */
public class NumbersInWords {

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
            put("11", "eleven");
            put("12", "twelve");
            put("13", "thirteen");
            put("14", "fourteen");
            put("15", "fifteen");
            put("16", "sixteen");
            put("17", "seventeen");
            put("18", "eighteen");
            put("19", "nineteen");
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

    public static HashMap<Integer, String> numPosTranslator = new HashMap<Integer, String>() {
        {
            put(0, "");
            put(1, "thousand");
            put(2, "million");
            put(3, "billion");
        }
    };

    public static void main(String[] args) {

    }

    public static ArrayList<String> extract(String number) {
        ArrayList<String> splited = new ArrayList<String>(Arrays.asList(number.replaceAll("[.,\s]", "").split("")));

        String sequenceOf3 = "";
        ArrayList<String> numArray = new ArrayList<String>();

        int i = 0;

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

    public static String translateUnity(String number) {
        return numTranslator.get(number);
    }

    public static String translateDecade(String number) {
        return numTranslator.get(Integer.toString(Integer.parseInt(number) * 10));
    }

    public static String translateHundreds(String number) {
        return translateUnity(number) + " hundred";
    }

    public static String translateBlockOf3(String number) {
        String[] splited = number.split("");
        ArrayList<String> translated = new ArrayList<String>();

        for (int i = 0; i < splited.length; i++) {
            switch (i) {
                case 0:
                    translated.add(translateHundreds(splited[i]));
                    break;
                case 1:
                    translated.add(translateDecade(splited[i]));
                    break;
                case 2:
                    translated.add(translateUnity(splited[i]));
                    break;
            }
        }
        return String.join(" ", translated.toArray(new String[translated.size()]));
    }

    public static String getPowerOfThousand(int index) {
        return numPosTranslator.get(index);
    }

    public static String translate(String number) {
        ArrayList<String> extracted = extract(number);
        ArrayList<String> translated = new ArrayList<String>();

        int i = 0;

        for (String sequence : extracted) {
            translated.add(0, translateBlockOf3(sequence) + " " + getPowerOfThousand(i));
            i++;
        }

        return String.join(" ", translated.toArray(new String[translated.size()])).trim();
    }
}