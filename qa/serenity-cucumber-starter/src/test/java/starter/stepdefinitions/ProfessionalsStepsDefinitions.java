package starter.stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.annotations.Steps;
import starter.actions.ProfessionalsSteps;

public class ProfessionalsStepsDefinitions {

    @Steps
    ProfessionalsSteps professionalsSteps;

    @When("I click on the Professionals icon")
    public void i_click_on_the_professionals_icon() {
        professionalsSteps.clickOnProfessionalsIcon();
    }
    @Then("I see a list of available professionals")
    public void i_see_a_list_of_available_professionals() {
        boolean isDisplayed = professionalsSteps.isProfessionalsListDisplayed();
        assert isDisplayed : "The professionals list is not displayed";
    }
    @Then("the list should include the name, mobile phone and treatments")
    public void the_list_should_include_the_name_mobile_phone_and_treatments() {
        boolean hasDetails = professionalsSteps.isEachProfessionalDetailed();
        assert hasDetails : "The professionals list does not include the required details";
    }

}
