package fr.manulep.entrainement;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.swing.text.DateFormatter;

public class Series2 {

	private Series2() {
		throw new IllegalStateException("Test class");
	}

	public static List<String> selectElementsFromListStartingWithA(List<String> elements) {
		ArrayList<String> el2 = new ArrayList<String>();

		elements.forEach(el -> {
			if (el.startsWith("a")) {
				el2.add(el);
			}
		});

		return el2;
	}

	public static List<String> sortByLastLetter(List<String> names) {
		ArrayList<String> names2 = new ArrayList<String>();
		ArrayList<String> names3 = new ArrayList<String>();

		names.forEach(name -> {
			ArrayList<String> li = new ArrayList<String>(Arrays.asList(name.split("")));
			Collections.reverse(li);
			names2.add(String.join("", li));
		});

		Collections.sort(names2);

		names2.forEach(name -> {
			ArrayList<String> li = new ArrayList<String>(Arrays.asList(name.split("")));
			Collections.reverse(li);
			names3.add(String.join("", li));
		});

		return names3;
	}

	public static String exportWordsWithoutALetter(List<String> names, char letter) {
		ArrayList<String> al = new ArrayList<String>();
		String[] arr;

		for (String name : names) {
			if (name != null) {
				if (!Pattern.compile(letter + "+", Pattern.CASE_INSENSITIVE).matcher(name).find()) {
					al.add(name);
				}
			}
		}

		arr = new String[al.size()];

		al.toArray(arr);

		return String.join(", ", arr);
	}

	public static String getAllLetters(List<String> words) {
		ArrayList<String> letters = new ArrayList<String>();

		words.forEach(word -> {
			for (String letter : word.split("")) {
				if (!letters.contains(letter)) {
					letters.add(letter);
				}
			}
		});

		Collections.sort(letters);

		return String.join("", letters);
	}

	public static List<String> getElementsLowerThanNumber(List<String> elements, int maxi) {
		ArrayList<String> al = new ArrayList<String>();

		elements.forEach(el -> {
			int i = Integer.parseInt(el);
			if (i < maxi && !al.contains(el)) {
				al.add(el);
			}
		});

		Collections.sort(al);

		return al;
	}

	public static List<Integer> exportPeerElements(List<Integer> elements) {
		ArrayList<Integer> al = new ArrayList<Integer>();

		elements.forEach(el -> {
			if (el % 2 == 0)
				al.add(el);
		});
		return al;
	}

	public static List<Integer> exportSortPeerElements(List<Integer> elements) {
		ArrayList<Integer> al = new ArrayList<Integer>(Series2.exportPeerElements(elements));
		ArrayList<Integer> al2 = new ArrayList<Integer>();

		Collections.sort(al);

		al.forEach(e -> {
			if (!al2.contains(e)) {
				al2.add(e);
			}
		});
		return al2;
	}

	public static List<Integer> allElementsExceptFirstAndLast(List<Integer> elements) {
		ArrayList<Integer> al = new ArrayList<Integer>();
		int size = elements.size();

		for (int i = 1; i < size; i++) {
			if (i != size - 1) {
				al.add(elements.get(i));
			}
		}
		return al;
	}

	public static List<Integer> reverseOrder(List<Integer> elements) {
		Collections.reverse(elements);
		return elements;
	}

	public static List<Integer> swapFirstandLastElement(List<Integer> elements) {

		int first = elements.get(0), lastIndex = elements.size() - 1, last = elements.get(lastIndex);

		elements.set(0, last);
		elements.set(lastIndex, first);

		return elements;
	}

	public static String longestWord(String text) {
		String longest = new String();

		for (String el : text.replaceAll("[\\W]", " ").split(" ")) {
			if (longest.length() == 0) {
				longest = el;
			} else if (el.length() > longest.length()) {
				longest = el;
			}
		}
		return longest;
	}

	public static int numberOfPalindromeWord(String text) {

		Matcher m = Pattern.compile("\'.*\'").matcher(text);

		int len, i, j, numPal = 0;

		boolean isPal;

		String[] split;

		if (m.find()) {
			split = m.group().replaceAll("[\s$&+:;=?@#|%']", "").toLowerCase().split(",");

			for (String w : split) {
				j = w.length();
				len = (int) Math.floor(j / 2);
				isPal = true;

				for (i = 0; i < len; i++) {
					if (w.charAt(i) != w.charAt(j - 1)) {
						isPal = false;
						break;
					}
					j--;
				}

				if (isPal) {
					numPal++;
				}
			}
		}

		return numPal;
	}

	public static String getAllLetters(String[] array) {
		return null;
	}

	public static String titleize(String title) {
		Matcher m = Pattern.compile("^the|lion|witch|wardrobe").matcher(title);

		String str = new String(), newStr = new String();

		int index = 0;

		while (m.find()) {
			str = m.group().substring(0, 1).toUpperCase() + m.group().substring(1);

			newStr += title.substring(index, m.start()) + str;

			index = m.end();
		}
		return newStr.replace(". and", ". And");
	}

	public static List<String> findAnagrams(String name) {
		return null;
	}

	public static int roundUp(float number) {
		return (int) Math.round(number);
	}

	public static int findLastDayOfMonth(int month, int year) {
		return YearMonth.of(year, month).lengthOfMonth();
	}

	public static int factorial(int number) {
		int j = 1;
		for (int i = 1; i <= number; i++) {
			j *= i;
		}
		return j;
	}

	public static int convertToCelsius(int temperature) {
		return (int) (Math.ceil((temperature - 32) * (5.0 / 9.0)));
	}

	public static boolean isPeerSum(final int... numbers) {
		int total = 0;
		for (int num : numbers) {
			total += num;
		}
		return total % 2 == 0;
	}

	public static boolean isRightTriangle(int side1, int side2, int side3) {
		int max, s1, s2;
		max = Math.max(side1, side2);
		s1 = Math.min(side1, side2);
		s2 = Math.min(max, side3);
		max = Math.max(max, side3);

		return Math.pow(max, 2) == Math.pow(s1, 2) + Math.pow(s2, 2);

	}

	public static boolean isOrder(int... number) {
		boolean isO = true, o;
		for (int i = 0; i < number.length - 1; i++) {
			o = number[0] > number[1] ? number[i] < number[i + 1] : number[i] > number[i + 1];
			if (o) {
				isO = false;
				break;
			}
		}
		return isO;
	}

	public static Float intToFloat(int number) {
		return number * 1f;
	}

	public static Integer floatToInt(float number) {
		return (int) number;
	}

	public static String dateToString(LocalDate date, String format) {
		return date.format(DateTimeFormatter.ofPattern(format));
	}

}
