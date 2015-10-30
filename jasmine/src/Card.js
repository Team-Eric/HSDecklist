var dustCost = function(rarity) {
    switch (rarity) {
        case "Common":
            return 40;
        case "Rare":
            return 100;
        case "Epic":
            return 400;
        case "Legendary":
            return 1600;
        default:
            break;
    }
};

var numCards = function(cType)
{
	switch(cType)
	{
		case "Legendary":
			return '*';
		default:
			return '2';
			break;
	}
}