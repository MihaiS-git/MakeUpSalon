package starter.actions;

import net.serenitybdd.core.steps.UIInteractionSteps;
import starter.pageobjects.ProfessionalsPage;

public class ProfessionalsSteps extends UIInteractionSteps {

    public void clickOnProfessionalsIcon() {
        find(ProfessionalsPage.PROFESSIONALS_ICON).click();
    }

    public boolean isProfessionalsListDisplayed() {
        return find(ProfessionalsPage.PROFESSIONAL_CARD).isDisplayed();
    }

    public boolean isEachProfessionalDetailed() {
        return findAll(ProfessionalsPage.PROFESSIONAL_CARD).stream().allMatch(card ->
                card.find(ProfessionalsPage.PROFESSIONAL_NAME).isDisplayed() &&
                        card.find(ProfessionalsPage.PROFESSIONAL_PHONE).isDisplayed() &&
                        card.find(ProfessionalsPage.PROFESSIONAL_TREATMENTS).isDisplayed());
    }
}
