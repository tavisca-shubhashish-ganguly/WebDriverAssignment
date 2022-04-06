class HotelSearch {
    get hotelLocation() {
        return $("div.wayfinder-info");
    }
    get hotelNameFilter() {
        return $("button#HotelName");
    }
    get hotelNamesList() {
        return $$("a.hotel-name");
    }
    async hotelStarRating(i) {
        var hotels = await $$("dd.fi-star-rating");
        var star = await hotels[i - 1].$$("svg.hotel-results-star-rating-selected").length;
        return star;
    }
    get hotelStarRatingFilter() {
        return $("button#StarRating");
    }
    get addressLines() {
        return $$("dd.address-line");
    }
    VerifyHotelLocation(location) {
        expect(this.hotelLocation).toHaveTextContaining(location);
    }
    VerifyNoOfHotelsDisplayed(noOfhotels) {
        expect(this.addressLines).toHaveLength(noOfhotels);
    }
    VerifyHotelLocationInResults(location) {
        this.addressLines.forEach(function (value) {
            expect(value).toHaveTextContaining(location);
        });
    }
    async VerifyStarFilter() {
        var hotels = $$("dd.fi-star-rating");
        var prevStar;
        prevStar = await this.hotelStarRating(1);
        hotels.forEach(async (hotel) => {
            expect(hotel.$$("svg.hotel-results-star-rating-selected").length).toBeLessThanOrEqual(prevStar);
            prevStar = await hotel.$$("svg.hotel-results-star-rating-selected").length;
        });
    }
    async VerifyNameFilter() {
        var actualNames = this.hotelNamesList.map((hotelName) => { hotelName.getText(); });
        var copiedNames = (await actualNames).slice();
        expect(copiedNames).toEqual((await actualNames).sort());
    }
}
module.exports = new HotelSearch();
