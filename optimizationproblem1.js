
// Hacker Rank question I got from a font end interview

// Helens school has provided her with a budget for purchasing the math notebooks her students will need. Each store sells bundles at various prices, she can only purchase full bundles, 
// she wants to purchase as many notebooks as she can with her budget
// determine max number of books she can purchase with amount given

// For example helen has n = $50 and there are m = 2 stores. The first sells bundle sof 20 books for $12 each, 
// the second sells bundles of only 1 book for $2 each. She can buy 4 bundles of 20 for $48 leaving her with $2. 
// She can go to the second store and purchase 1 more book for $2 for a total of 81 notebooks

// Complete the function below, the function must return an integer that denotes the max number of books she can buy with n dollars

/** 
* budgetShopping has following params
* @param {int} [n], the number of dollars in her budghet
* @param {int} [bundleQuantities], integer array, number of books in a bundle at shop[i]
* @param {int} [bundleCosts], integer array, cost of a bundle of books at shop[i]
*/

// Sample input
/**  
* 50
* 2
* 20
* 19
* 2
* 24
* 20
*/
// Output = 40

// Explanation helen has n = $50 to purchase from m = 2 stores described by bundleQuantities = [20,19] and bundleCosts = [24,20]
// So she makes the purchases: One bundle of 20 books from shop 0 at a cost of $24 and has n = 50 - 24 = $26 left
// One bundle of 20 books from shop 0 at a cost of $34 and has 26 - 24 = $2 left 
// Helen cannot afford anymore books so return 20 + 20 = 40

// your answer

/** 
 * Complete the 'budgetShopping' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY bundleQuantities
 *  3. INTEGER_ARRAY bundleCosts
 */

function budgetShopping(n, bundleQuantities, bundleCosts) {
    // Write your code here

    // GOAL -> Return number of books she can buy with her budget

    /**
     * VARIABLES
     * n = budget
     * m = # of stores
     * bundleQuantites = [int1,int2] int1 = amount of books per bundle store1, int2 = amount from store2
     * bundleCOsts = [int1,int2] 1 = cost per bundle for store 1, 2 = cost for store 2 
     */


    // Brute force 
    bruteForce = (n, curCost, curAmount, bundleQuantites, bundleCosts) => {
        // The maximum amount of books we have starting with 0
        let maxAmount = curAmount;
        // Loop through the m amount of stories defined by bundleQuantities[i]
        for (let i = 0; i < bundleQuantites.length; i++) {
            if (curCost + bundleCosts[i] <= n) {
                // if the cost of the bundle is within the budget repeat the function over going through all the stores defined by bundleQuantities.length
                let amount = bruteForce(n, curCost + bundleCosts[i], curAmount + bundleQuantites[i], bundleQuantites, bundleCosts)
                if (maxAmount < amount) {
                    maxAmount = amount;
                }
            } 
        }
        return maxAmount;
    }

    // Run the brute force with the params
    bruteForce(n, 0, 0, bundleQuantities, bundleCosts);
}

// Test inputs as from the sample input
const bQ = [20, 19]
const bC = [24, 20]

budgetShopping(50, bQ, bC)
