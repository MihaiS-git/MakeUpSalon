package starter.actions;

import net.serenitybdd.annotations.Step;
import net.serenitybdd.core.steps.UIInteractionSteps;
import starter.pageobjects.TreatmentsPage;

public class TreatmentsSteps extends UIInteractionSteps {

    @Step("I click on the Treatments icon")
    public void clickOnTheTreatmentsIcon(){
        find(TreatmentsPage.TREATMENTS_ICON).click();
    }

    public boolean isTreatmentsListDisplayed() {
        return find(TreatmentsPage.TREATMENT_CARD).isDisplayed();
    }

    public boolean isEachTreatmentDetailed() {
        return findAll(TreatmentsPage.TREATMENT_CARD).stream().allMatch(item ->
                item.find(TreatmentsPage.TREATMENT_NAME).isDisplayed() &&
                        item.find(TreatmentsPage.TREATMENT_DESCRIPTION).isDisplayed() &&
                        item.find(TreatmentsPage.TREATMENT_PRICE).isDisplayed());
    }
}
