// order and clear button init
document.getElementById("orderbutton").addEventListener("click", presentTotal);
document.getElementById("clearbutton").addEventListener("click", clearAll);

// subtotal init
var subtotal = document.getElementById("subtotal");
subtotal.innerHTML = 0;

// burger values and buttons init
const burgerPrice = 8;
var burgerCount = document.getElementById("burger-count");
burgerCount.innerHTML = 0;
document.getElementById("burger-minus").addEventListener("click", changeCount);
document.getElementById("burger-plus").addEventListener("click", changeCount);

// brisket values and buttons init
const brisketPrice = 12;
var brisketCount = document.getElementById("brisket-count");
brisketCount.innerHTML = 0;
document.getElementById("brisket-minus").addEventListener("click", changeCount);
document.getElementById("brisket-plus").addEventListener("click", changeCount);

// ribs values and buttons init
const ribsPrice = 10;
var ribsCount = document.getElementById("ribs-count");
ribsCount.innerHTML = 0;
document.getElementById("ribs-minus").addEventListener("click", changeCount);
document.getElementById("ribs-plus").addEventListener("click", changeCount);

// sausage values and buttons init
const sausagePrice = 10;
var sausageCount = document.getElementById("sausage-count");
sausageCount.innerHTML = 0;
document.getElementById("sausage-minus").addEventListener("click", changeCount);
document.getElementById("sausage-plus").addEventListener("click", changeCount);


function presentTotal()
{
    cTotal = parseInt(subtotal.innerHTML);
    if (cTotal > 0) {
        var subtotalMessage = "";
        var foodCounts = {
            "burger": parseInt(burgerCount.innerHTML),
            "brisket": parseInt(brisketCount.innerHTML),
            "rib": parseInt(ribsCount.innerHTML),
            "sausage": parseInt(sausageCount.innerHTML)
        }

        for (item in foodCounts) {
            if (foodCounts[item] == 1) {
                subtotalMessage += foodCounts[item] + " " + item + " ";
            } else if (foodCounts[item] > 1) {
                subtotalMessage += foodCounts[item] + " " + item + "s ";
            }
            
        }
        
        subtotalMessage = "We have received your order.\n" + subtotalMessage + "are on the way!";
        alert(subtotalMessage);
    } else {
        alert("No items added to cart yet!");
    }
}

function clearAll() {
    subtotal.innerHTML = 0;
    burgerCount.innerHTML = 0;
    brisketCount.innerHTML = 0;
    ribsCount.innerHTML = 0;
    sausageCount.innerHTML = 0;
}

function changeSubtotal(sign, itemPrice)
{
    var newVal = parseInt(subtotal.innerHTML) + sign * itemPrice;
    subtotal.innerHTML = newVal;
}

function changeCount()
{
    const id = this.id;
    var dashIdx = id.indexOf("-");
    const item = id.substring(0,dashIdx);
    const action = id.substring(dashIdx+1);
    var change = 0;
    var newVal;
    var orders;

    if (action === "minus") {
        change = -1;
    } else {
        change = 1;
    }


    switch (item) {
        case "burger":
            orders = parseInt(burgerCount.innerHTML);
            if ((change == -1 && orders > 0) || change == 1) {
                newVal = orders + change;
                burgerCount.innerHTML = newVal;
                changeSubtotal(change, burgerPrice);
            }
            break;

        case "brisket":
            orders = parseInt(brisketCount.innerHTML); 
            if ((change == -1 && orders > 0) || change == 1) {
                newVal = orders + change;
                brisketCount.innerHTML = newVal;
                changeSubtotal(change, brisketPrice);
            }
            break;
        
        case "ribs":
            orders = parseInt(ribsCount.innerHTML);
            if ((change == -1 && orders > 0) || change == 1) {
                newVal = orders + change;
                ribsCount.innerHTML = newVal;
                changeSubtotal(change, ribsPrice);
            }
            break;

        case "sausage":
            orders = parseInt(sausageCount.innerHTML);
            if ((change == -1 && orders > 0) || change == 1) {
                newVal = orders + change;
                sausageCount.innerHTML = newVal;
                changeSubtotal(change, sausagePrice);
            }
            break;
    }

}