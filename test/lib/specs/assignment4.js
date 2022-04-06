const hotelPage = require("../pageobjects/hotel");
const hotelSearchPage = require("../pageobjects/hotelSearch");
describe("Verify Hotel Room ", () => {
    it("Verify Room Availability", async () => {
        //hotelPage.OpenHotel()
        await hotelPage.OpenHotel();
        //await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed();
        await hotelPage.ClickHotelTag();
        await expect(hotelPage.destinationField).toBeDisplayed();
        await hotelPage.SelectInputDestination("Mumbai");
        await browser.pause(2000);
        await hotelPage.SelectCheckinDate("04/05/22");
        await browser.pause(2000);
        await hotelPage.SelectGuests();
        await browser.pause(2000);
        await hotelPage.SelectCheckOutDate("04/07/22");
        await browser.pause(2000);
        await hotelPage.ClickOnSearch();
        await hotelSearchPage.hotelStarRatingFilter.waitForClickable();
        await hotelSearchPage.hotelStarRatingFilter.click();
        await browser.pause(2000);
        //await expect(hotelSearchPage.hotelNamesList[0]).toHaveTextContaining("Mumbai")
        console.log("Star Rating :", await hotelSearchPage.hotelStarRating(1));
        //await expect(hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await browser.pause(5000);
    });
});
