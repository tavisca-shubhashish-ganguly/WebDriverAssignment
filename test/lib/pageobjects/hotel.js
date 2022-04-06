class Hotel {
    get hotelTab() {
        return $("ul.search__navigation li span#search-hotel-button");
    }
    get destinationField() {
        return $("input#inputDestination");
    }
    get firstDestination() {
        return $("section.search__container div.autosuggestListingHolder ul#ui-id-1 li:nth-child(1)");
    }
    get checkInDate() {
        return $("input#inputCheckInDate");
    }
    get checkOutDate() {
        return $("input#inputCheckOutDate");
    }
    get guestsButton() {
        return $("button#HotelGuestQtyButton");
    }
    get decreaseNoOfAdultsButton() {
        return $("div.pax-Hotel-Adults button:nth-child(1)");
    }
    get doneNoOfGuestsButton() {
        return $("div#passengerDropdown-actions-Hotel button:nth-child(2)");
    }
    get searchButton() {
        return $("button.js-hotel-search-submit-top");
    }
    OpenHotel() {
        browser.url("https://vacationsdirect.com/");
    }
    ClickHotelTag() {
        //this.hotelTab.waitForDisplayed()
        this.hotelTab.click();
    }
    SelectInputDestination(destination) {
        this.destinationField.waitForDisplayed();
        this.destinationField.setValue(destination);
        this.firstDestination.waitForDisplayed();
        this.firstDestination.click();
    }
    SelectCheckinDate(date) {
        this.checkInDate.waitForClickable();
        this.checkInDate.setValue(date);
        //browser.keys("\uE007"); 
        //driver.keys('Enter')
        //$("div.first tbody tr:nth-child(1) td:nth-child(4)").waitForDisplayed()
        //$("div.first tbody tr:nth-child(1) td:nth-child(4)").click()
        //$("tr td a.datepicker-state-active").waitForDisplayed()
        //$("tr td a.datepicker-state-active").click()
    }
    SelectCheckOutDate(date) {
        //this.checkOutDate.waitForClickable()
        this.checkOutDate.setValue(date);
        //browser.keys("\uE007"); 
        //$("div.first tbody tr:nth-child(1) td:nth-child(7)").waitForDisplayed()
        //$("div.first tbody tr:nth-child(1) td:nth-child(7)").click()
        //$("tr td a.datepicker-state-active").waitForDisplayed()
        //$("tr td a.datepicker-state-active").click()
    }
    SelectGuests() {
        this.guestsButton.waitForClickable();
        this.guestsButton.click();
        this.decreaseNoOfAdultsButton.waitForClickable();
        this.decreaseNoOfAdultsButton.click();
        //div.pax-Hotel-Adults span .getText()==1
        this.doneNoOfGuestsButton.waitForDisplayed();
        this.doneNoOfGuestsButton.click();
    }
    ClickOnSearch() {
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    }
}
module.exports = new Hotel();
