package fr.simplon;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class FooBarQixTest {

    @Test
    public void testIsDivisiblePer3() {
        assertTrue(FooBarQix.isDivisiblePer3(3));
        assertFalse(FooBarQix.isDivisiblePer3(4));
    }

    @Test
    public void testIsDivisiblePer5() {
        assertTrue(FooBarQix.isDivisiblePer5(5));
        assertFalse(FooBarQix.isDivisiblePer5(6));
    }

    @Test
    public void testIsDivisiblePer7() {
        assertTrue(FooBarQix.isDivisiblePer7(7));
        assertFalse(FooBarQix.isDivisiblePer7(8));
    }

    @Test
    public void testMultipleOfThreeToFoo() {
        /*
         * assertEquals("Foo", FooBarQix.multipleOfThreeToFoo(3)); assertEquals(1,
         * Integer.parseInt(FooBarQix.multipleOfThreeToFoo(1)));
         */ }

    @Test
    public void testMultipleOfFiveToBar() {
        assertEquals("Bar", FooBarQix.multipleOfFiveToBar(5));
        assertEquals("8", FooBarQix.multipleOfFiveToBar(8));
    }

    @Test
    public void testMultipleOfSevenToQix() {
        assertEquals("Qix", FooBarQix.multipleOfSevenToQix(7));
        assertEquals("2", FooBarQix.multipleOfSevenToQix(2));
    }

    @Test
    public void testThreeToFoo() {
        assertEquals("Foo", FooBarQix.threeToFoo(3));
        assertEquals("2", FooBarQix.threeToFoo(2));
    }

    @Test
    public void testFiveToBar() {
        assertEquals("Bar", FooBarQix.fiveToBar(5));
        assertEquals("2", FooBarQix.fiveToBar(2));
    }

    @Test
    public void testSevenToQix() {
        assertEquals("Qix", FooBarQix.sevenToQix(7));
        assertEquals("2", FooBarQix.sevenToQix(2));
    }

    @Test
    public void testZeroToStar() {
        assertEquals("*", FooBarQix.sevenToQix(0));
        assertEquals("2", FooBarQix.sevenToQix(2));
    }

}
