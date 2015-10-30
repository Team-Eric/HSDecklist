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