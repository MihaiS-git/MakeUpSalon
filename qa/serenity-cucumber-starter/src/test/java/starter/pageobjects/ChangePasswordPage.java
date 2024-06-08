package starter.pageobjects;

import org.openqa.selenium.By;

public class ChangePasswordPage {
    public static final By ACCOUNT_ICON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[1]/li[3]/a");
    public static final By CHANGE_PASSWORD_ICON =By.xpath("//*[@id=\"accordionAccount\"]/div[3]/h2/button/strong");
    public static final By NEW_PASSWORD_FIELD = By.id("newPassword");
    public static final By CONFIRM_PASSWORD_FIELD = By.id("confirmationPassword");
    public static final By CHANGE_PASSWORD_BUTTON = By.xpath("//*[@id=\"collapseThree\"]/div/form/div[3]/button");

}
