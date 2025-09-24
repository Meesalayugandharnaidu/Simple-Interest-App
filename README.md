## It appears you have uploaded the complete source code for a simple interest calculator.
and are asking for the same content back.
I can describe what each of the files does and how they work together to create the calculator.

---

### `index.html`

This is the main **HTML** file that provides the structure of the webpage. It includes:
* A title: "SIMPLE INTEREST CALCULATOR".
* A `form` with three `input` fields for the **Amount**, **Years**, and **Interest Rate**.
* A `button` with the text "Click Me" to trigger the calculation.
* A `div` with the id `result` which is initially hidden. This `div` contains `<h2>` tags that will display the calculated values.
* It links to the **CSS** file (`style.css`) for styling and the **JavaScript** file (`index.js`) for functionality.

---

### `style.css`

This **CSS** file handles all the visual styling of the webpage. Key styling points include:
* A dark blue background and white text for the main heading (`h1`).
* The `form` is centered, has a dark background, and a subtle box shadow.
* The `input` fields and `button` are styled with a consistent look.
* The "Click Me" button (`#btn`) has a hover effect that changes its background color.
* The `#result` `div` is initially set to `height: 0` to hide it. The `.active` class is used to make it visible by setting its height to `250px`.
* The `h2` elements inside the `#result` `div` are initially transparent (`opacity: 0`) and have a transition effect to fade them in once the `.active` class is added.

---

### `index.js`

This **JavaScript** file contains the logic for the calculator. It does the following:
* It selects the button with the ID `btn` and adds an **event listener** to it for a `click` event.
* When the button is clicked, it first prevents the default form submission behavior (`e.preventDefault()`).
* It gets the values from the three input fields (Amount, Years, Interest Rate), converts them to numbers, and stores them in variables.
* It checks if the input values are **greater than zero**. If they are not, it displays an alert asking the user to fill out the fields.
* If the values are valid, it calls a function named `INTEREST` with the input values to calculate the simple interest.
* The `INTEREST` function uses the formula `(principal * years * rate) / 100` to calculate the simple interest and returns the result.
* Back in the event listener, it calculates the **total amount** by adding the principal and the calculated simple interest.
* It then adds the `.active` class to the `result` `div` to make it visible and populates the `<span>` elements with the input values and the calculated results.
* Finally, it clears the input fields, so they are ready for a new calculation.
