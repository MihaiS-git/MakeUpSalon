package starter.utils;

import org.junit.Assert;

public class MessageVerifier {
    public static void verifyMessage(String actualMessage, String expectedMessage) {
        Assert.assertEquals("Expected message did not match the actual message!", expectedMessage, actualMessage);
    }
}
