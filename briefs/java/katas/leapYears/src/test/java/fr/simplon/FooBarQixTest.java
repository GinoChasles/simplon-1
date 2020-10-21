package fr.simplon;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class FooBarQixTest {

    @Test
    public void testisDivisiblePer3() {
        assertTrue(FooBarQix.isDivisiblePer3(3));
        assertFalse(FooBarQix.isDivisiblePer3(4));
    }

    @Test
    public void testisDivisiblePer5() {
        assertTrue(FooBarQix.isDivisiblePer5(5));
        assertFalse(FooBarQix.isDivisiblePer5(6));
    }

    @Test
    public void testisDivisiblePer7() {
        assertTrue(FooBarQix.isDivisiblePer7(7));
        assertFalse(FooBarQix.isDivisiblePer7(8));
    }

    @Test
    public void testmultipleOfThreeToFoo() {
        assertEquals("Foo", FooBarQix.multipleOfThreeToFoo(3));
        assertEquals(1, Integer.parseInt(FooBarQix.multipleOfThreeToFoo(1)));
    }

    @Test
    public void testmultipleOfFiveToBar() {
        assertEquals("Bar", FooBarQix.multipleOfFiveToBar(5));
        assertEquals("8", FooBarQix.multipleOfFiveToBar(8));
    }

    @Test
    public void testmultipleOfSevenToQix() {
        assertEquals("Qix", FooBarQix.multipleOfSevenToQix(7));
        assertEquals("2", FooBarQix.multipleOfSevenToQix(2));
    }

    @Test
    public void testthreeToFoo() {
        assertEquals("Foo", FooBarQix.threeToFoo(3));
        assertEquals("2", FooBarQix.threeToFoo(2));
    }

    @Test
    public void testfiveToBar() {
        assertEquals("Bar", FooBarQix.fiveToBar(5));
        assertEquals("2", FooBarQix.fiveToBar(2));
    }

    @Test
    public void testsevenToQix() {
        assertEquals("Qix", FooBarQix.sevenToQix(7));
        assertEquals("2", FooBarQix.sevenToQix(2));
    }

}
