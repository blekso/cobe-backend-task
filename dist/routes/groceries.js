var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = express.Router();
function getGroceries() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const groceries = yield Grocery.find();
            return groceries;
        }
        catch (err) {
            console.error(err);
        }
    });
}
function addGrocery() {
    return __awaiter(this, void 0, void 0, function* () {
        const grocery = new Grocery({
            name: "Egg",
            quantity: 8,
            price: 9.99,
        });
        try {
            const result = yield grocery.save();
            return result;
        }
        catch (err) {
            return err;
        }
    });
}
//addGrocery();
function calculateNumberOfArticles(groceries) {
    let result = 0;
    groceries.forEach((g) => (result += g.quantity));
    return result;
}
function calculateTotalPrice(groceries) {
    let result = 0;
    groceries.forEach((g) => (result += g.price * calculateNumberOfArticles(groceries)));
    return result.toFixed(2);
}
function calculateTotalPriceWithTaxes(groceries) {
    let result = Number(calculateTotalPrice(groceries)) - Number(calculateTaxes(groceries));
    return result.toFixed(2);
}
function calculateTaxes(groceries) {
    let result = Number(calculateTotalPrice(groceries)) * 0.18;
    return result.toFixed(2);
}
router.get("/", (req, res) => {
    getGroceries()
        .then((groceries) => {
        res.send({
            numberOfArticles: calculateNumberOfArticles(groceries),
            taxes: calculateTaxes(groceries),
            totalPrice: calculateTotalPriceWithTaxes(groceries),
        });
    })
        .catch((err) => res.send(err));
});
module.exports = router;
//# sourceMappingURL=groceries.js.map