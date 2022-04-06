import {Hotel} from "../pageobjects/hotel"
import { HotelSearch } from "../pageobjects/hotelSearch"
const hotelPage: Hotel = new Hotel()
const hotelSearchPage: HotelSearch = new HotelSearch()

describe("Verify Hotel ",()=>{
    it("Verify Filter",async ()=>{
        //hotelPage.OpenHotel()
        await hotelPage.OpenHotel()
        //await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Mumbai")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/05/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        //await browser.pause(20000) 
        await hotelSearchPage.hotelStarRatingFilter.waitForClickable() 
        await hotelSearchPage.hotelStarRatingFilter.click()
        await hotelSearchPage.VerifyStarFilter()
        await browser.pause(2000) 
        await hotelSearchPage.hotelNameFilter.click()
        await hotelSearchPage.VerifyNameFilter()
        await browser.pause(15000) 

    })

})