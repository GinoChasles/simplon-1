package fr.manulep.entrainement;

import java.util.ArrayList;
import java.util.regex.Pattern;

public class Series1 {

	private Series1() {
		throw new IllegalStateException("Test class");
	}

	public static String helloWorld(String name) {
		String hello = "Hello ";
		return hello += (name == null || name == "") ? "World" : name;
	}

	public static String[] removeNullElements(String[] array) {
		ArrayList<String> array2 = new ArrayList<String>();
		String[] array3;

		for (String val : array) {
			if (val != null) {
				array2.add(val);
			}
		}
		array3 = new String[array2.size()];

		return array2.toArray(array3);
	}

	public static int[] addElementToBeginning(int[] array, int element) {
		int[] array2 = new int[array.length + 1];

		array2[0] = element;

		for (int i = 0; i < array.length; i++) {
			array2[i + 1] = array[i];
		}

		return array2;
	}

	public static int[] allElementsExceptFirstThree(int[] array) {
		int len = array.length, i, j = 0;
		int[] array2;

		if (len >= 3) {
			array2 = new int[len - 3];

			for (i = 3; i < len; i++) {
				array2[j] = array[i];
				j++;
			}
		} else {
			array2 = new int[0];
		}

		return array2;
	}

	public static String getFirstHalf(String word) {
		int half = word.length() / 2;
		int sub = word.length() % 2 == 0 ? half : half + 1;
		return word.substring(0, sub);
	}

	public static String[] selectElementsStartingWithA(String[] array) {
		ArrayList<String> array2 = new ArrayList<String>();
		String[] array3;

		for (String val : array) {
			if (val.startsWith("a")) {
				array2.add(val);
			}
		}

		array3 = new String[array2.size()];

		return array2.toArray(array3);
	}

	public static String[] selectElementsStartingWithVowel(String[] array) {
		ArrayList<String> array2 = new ArrayList<String>();

		for (String val : array) {
			if (val != null) {
				if (val.matches("^[aeiouy]{1}.+")) {
					array2.add(val);
				}
			}
		}
		return array2.toArray(new String[array2.size()]);
	}

	public static String[] reverseOrderInArray(String[] array) {
		int len = array.length;
		String[] array2 = new String[len];
		for (int i = 0; i < len; i++) {
			array2[i] = array[len - 1 - i];
		}
		return array2;
	}

	public static int[] insertElementInTheMiddleOfAnArray(int[] array, int element) {
		int len = array.length, pos = (int) Math.floor(len / 2), j = 0;
		int[] array2 = new int[array.length + 1];

		if (len != 0) {
			for (int i = 0; i < len; i++) {
				if (i == pos) {
					array2[j] = element;
					j++;
				}
				array2[j] = array[i];
				j++;
			}
		} else {
			array2[0] = element;
		}
		return array2;
	}

	public static String shortestWord(String text) {
		String[] s = text.split(" ");
		String shortest = new String();

		for (String a : s) {
			if (shortest.equals(new String())) {
				shortest = a;
			} else {
				if (a.length() < shortest.length()) {
					shortest = a;
				}
			}
		}
		return shortest;
	}

	public static String removeCapitals(String text) {
		return text.replaceAll("[A-Z]", "");
	}

	public static long addingTwoNumbers(long number1, long number2) {
		return number1 + number2;
	}

	public static long addingThreeNumbers(long number1, long number2, long number3) {
		return number1 + number2 + number3;
	}

	public static long addingSeveralNumbers(final Integer... numbers) {
		int sum = 0;

		for (int n : numbers) {
			sum += n;
		}

		return sum;
	}

	public static float makeNegative(float number) {
		return number > 0 ? number * -1 : number;
	}

	public static boolean checkForSpecialCharacters(String string) {
		return Pattern.compile("[$&+,:;=?@#|%]").matcher(string).find();
	}

	public static boolean checkIfStringStartsWithConsonant(String word) {
		return Pattern.compile("^[^aeiouy].*", Pattern.CASE_INSENSITIVE).matcher(word).matches();
	}

	public static String getDomainName(String email) {
		return email.replaceAll("(^.*@|.com$)", "");
	}

	public static int[] letterPosition(String name) {
		String alphabet = "abcdefghijklmnopqrstuvwxyz";

		int[] indices = new int[name.length()];
		int i = 0;

		for (String letter : name.toLowerCase().split("")) {
			indices[i] = alphabet.indexOf(letter) + 1;
			i++;
		}
		return indices;
	}

	public static boolean isPeer(int number) {
		return number % 2 == 0;
	}

}
