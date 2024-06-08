package starter.stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.annotations.Steps;
import starter.actions.TreatmentsSteps;

public class TreatmentsStepsDefinitions {

    @Steps
    TreatmentsSteps treatmentsSteps;

    @When("I click on the Treatments icon")
    public void i_click_on_the_treatments_icon() {
        treatmentsSteps.clickOnTheTreatmentsIcon();
    }
    @Then("I should see a list of available treatments")
    public void i_should_see_a_list_of_available_treatments() {
        boolean isDisplayed = treatmentsSteps.isTreatmentsListDisplayed();
        assert isDisplayed : "The treatments list is not displayed";
    }
    @Then("the list should include the name, description, and price of each treatment")
    public void the_list_should_include_the_name_description_and_price_of_each_treatment() {
        boolean hasDetails = treatmentsSteps.isEachTreatmentDetailed();
        assert hasDetails : "The treatments list does not include the required details";
    }

}
