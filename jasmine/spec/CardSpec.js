describe('Card', function() {
    describe('dust cost', function() {
        var dust;

        it('returns 40 if the card is Common', function() {
            dust = dustCost('Common');
            expect(dust).toEqual(40);
        });
        it('returns 100 if the card is Rare', function() {
            dust = dustCost('Rare');
            expect(dust).toEqual(100);
        });
        it('returns 400 if the card is Epic', function() {
            dust = dustCost('Epic');
            expect(dust).toEqual(400);
        });
        it('returns 1600 if the card is Legendary', function() {
            dust = dustCost('Legendary');
            expect(dust).toEqual(1600);
        })
    });
});