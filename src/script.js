// JavaScript function to handle button click
function _increaseCount() {
    // Get the <p> element by its id
    let countElement = document.getElementById("count")

    // Get the current count from the <p> text
    let currentCount = parseInt(countElement.innerText.replace("Count is ", ""))

    // Increment the count
    const newCount = currentCount + 1
    // Update the <p> text with the new count
    countElement.innerText = "Count is " + newCount
}
