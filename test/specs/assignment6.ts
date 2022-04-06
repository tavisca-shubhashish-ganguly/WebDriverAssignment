import {Hotel} from "../pageobjects/hotel"
import { HotelSearch } from "../pageobjects/hotelSearch"
import {HotelDsl} from "../dsl/hoteldsl"
const logindata = require("../testData/hotelTest")
const hotelPage: Hotel = new Hotel()
const hotelSearchPage: HotelSearch = new HotelSearch()
const hoteldsl: HotelDsl = new HotelDsl()

describe("Feature 1", ()=>{
    it("Feature 1 Scenario smoke", ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        expect(languages[0].getText()).toHaveTextContaining("हिन्दी");
        expect(languages[1].getText()).toHaveTextContaining("বাংলা");
        expect(languages[2].getText()).toHaveTextContaining("తెలుగు");
        expect(languages[3].getText()).toHaveTextContaining("मराठी");
        expect(languages[4].getText()).toHaveTextContaining("தமிழ்");
        
        //verify buttons value
        let buttons = $$("div.FPdoLc input")
        expect(buttons[0].getValue()).toHaveTextContaining("Google Search")
        

    }),

    it("Feature 1 Scenario regression", ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        
        expect(languages[5].getText()).toHaveTextContaining("ગુજરાતી");
        expect(languages[6].getText()).toHaveTextContaining("ಕನ್ನಡ");
        expect(languages[7].getText()).toHaveTextContaining("മലയാളം");
        expect(languages[8].getText()).toHaveTextContaining("ਪੰਜਾਬੀ");
        //verify buttons value
        let buttons = $$("div.FPdoLc input")
        
        expect(buttons[1].getValue()).toHaveTextContaining("I'm Feeling Lucky")

    })
}),

describe("Feature 2", ()=>{
    it("Feature 2 Scenario smoke",async ()=>{
        await hotelPage.OpenHotel()
        await browser.pause(20000)
        await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Mumbai")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch() 
        await hotelSearchPage.VerifyHotelLocation("Mumbai")
        await hotelSearchPage.VerifyHotelLocationInResults("Mumbai")
        
        await browser.pause(20000) 

    }),

    it("Feature 2 Scenario regression ", async ()=>{

        await hotelPage.OpenHotel()
        await browser.pause(20000)
        await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await hotelPage.SelectInputDestination("Pune")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch() 
        await hotelSearchPage.VerifyHotelLocation("Pune")
        await hotelSearchPage.VerifyHotelLocationInResults("Pune")
        await hotelSearchPage.VerifyNoOfHotelsDisplayed(9)

    })
}),

describe("Feature 3", ()=>{
    it("Feature 3 Scenario smoke ",async ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        expect(languages[0].getText()).toHaveTextContaining("हिन्दी");
        expect(languages[1].getText()).toHaveTextContaining("বাংলা");
        expect(languages[2].getText()).toHaveTextContaining("తెలుగు");
        expect(languages[3].getText()).toHaveTextContaining("मराठी");
        

    }),

    it("Feature 3 Scenario regression citi",async ()=>{
        //hotelPage.OpenHotel()
        await hotelPage.OpenHotel()
        //await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Pune")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.hotelStarRatingFilter.waitForClickable() 
        await hotelSearchPage.hotelStarRatingFilter.click()
        await browser.pause(2000)
        //await expect(hotelSearchPage.hotelNamesList[0]).toHaveTextContaining("Mumbai")
        //console.log("Star Rating :", await hotelSearchPage.hotelStarRating(1))
        //const rating = await hotelSearchPage.hotelStarRating(1)
        await expect(await hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await hotelSearchPage.chooseFromButtonsList[0].click()
        //await expect(hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await browser.pause(5000)
        await expect(await hotelSearchPage.noOfhotelRoomsAvailable()).toBeGreaterThanOrEqual(0)
        await browser.pause(2000) 

    })
}),

describe("Feature 4", ()=>{
    it("Feature 4 Scenario smoke citi", async ()=>{
        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Brussels")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000) 

    }),

    it("Feature 4 Scenario regression citi dsl",async ()=>{
        await hoteldsl.OpenHotelHome()
        await hoteldsl.SearchHotel(logindata.destination,logindata.checkin,logindata.checkout)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex(logindata.text, logindata.index)
        await browser.pause(10000) 

    })
}),

describe("Feature 5", ()=>{
    it("Feature 5 Scenario smoke", ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        expect(languages[0].getText()).toHaveTextContaining("हिन्दी");
        expect(languages[1].getText()).toHaveTextContaining("বাংলা");
        expect(languages[2].getText()).toHaveTextContaining("తెలుగు");
        expect(languages[3].getText()).toHaveTextContaining("मराठी");
        expect(languages[4].getText()).toHaveTextContaining("தமிழ்");
        

    }),

    it("Feature 5 Scenario regression citi", ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        
        expect(languages[5].getText()).toHaveTextContaining("ગુજરાતી");
        expect(languages[6].getText()).toHaveTextContaining("ಕನ್ನಡ");
        expect(languages[7].getText()).toHaveTextContaining("മലയാളം");
        expect(languages[8].getText()).toHaveTextContaining("ਪੰਜਾਬੀ");

    })
})

describe("Feature 6", ()=>{
    it("Feature 6 Scenario smoke", async ()=>{
        await hotelPage.OpenHotel()
        await browser.pause(20000)
        await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Mumbai")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/06/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch() 
        await hotelSearchPage.VerifyHotelLocation("Mumbai")
        await hotelSearchPage.VerifyHotelLocationInResults("Mumbai")
        
        await browser.pause(20000)

    }),

    it("Feature 6 Scenario regression",async ()=>{
        await hotelPage.OpenHotel()
        await browser.pause(20000)
        await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await hotelPage.SelectInputDestination("Pune")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/06/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch() 
        await hotelSearchPage.VerifyHotelLocation("Pune")
        await hotelSearchPage.VerifyHotelLocationInResults("Pune")
        await hotelSearchPage.VerifyNoOfHotelsDisplayed(9)

    })
}),

describe("Feature 7", ()=>{
    it("Feature 7 Scenario smoke", async()=>{
        await hotelPage.OpenHotel()
        //await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Mumbai")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.hotelStarRatingFilter.waitForClickable() 
        await hotelSearchPage.hotelStarRatingFilter.click()
        await browser.pause(2000)
        //await expect(hotelSearchPage.hotelNamesList[0]).toHaveTextContaining("Mumbai")
        //console.log("Star Rating :", await hotelSearchPage.hotelStarRating(1))
        //const rating = await hotelSearchPage.hotelStarRating(1)
        await expect(await hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await hotelSearchPage.chooseFromButtonsList[0].click()
        //await expect(hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await browser.pause(5000)
        await expect(await hotelSearchPage.noOfhotelRoomsAvailable()).toBeGreaterThanOrEqual(0)
        await browser.pause(2000) 

    }),

    it("Feature 7 Scenario regression", async ()=>{
        await hotelPage.OpenHotel()
        //await expect(browser).toHaveTitleContaining("Home")
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("pune")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.hotelStarRatingFilter.waitForClickable() 
        await hotelSearchPage.hotelStarRatingFilter.click()
        await browser.pause(2000)
        //await expect(hotelSearchPage.hotelNamesList[0]).toHaveTextContaining("Mumbai")
        //console.log("Star Rating :", await hotelSearchPage.hotelStarRating(1))
        //const rating = await hotelSearchPage.hotelStarRating(1)
        await expect(await hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await hotelSearchPage.chooseFromButtonsList[0].click()
        //await expect(hotelSearchPage.hotelStarRating(1)).toEqual(5)
        await browser.pause(5000)
        await expect(await hotelSearchPage.noOfhotelRoomsAvailable()).toBeGreaterThanOrEqual(0)
        await browser.pause(2000) 

    })
}),

describe("Feature 8", ()=>{
    it("Feature 8 Scenario smoke",async ()=>{
        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Brussels")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000)

    }),

    it("Feature 8 Scenario regression",async ()=>{
        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Paris")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000)

    })
}),

describe("Feature 9", ()=>{
    it("Feature 9 Scenario smoke citi", ()=>{
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")

    }),

    it("Feature 9 Scenario regression citi", ()=>{
        browser.url("https://vacationsdirect.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Home")

    })
}),

describe("Feature 10", ()=>{
    it("Feature 10 Scenario smoke citi",async ()=>{

        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Brussels")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000) 

    }),

    it("Feature 10 Scenario regression citi",async ()=>{

        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Paris")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/09/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000) 

    })
})

