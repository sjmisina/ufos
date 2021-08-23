// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// Build the table when the page loads
buildTable(tableData);

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};

// 1. Create a variable to keep track of all the filters as an object.
filters = {}

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
};
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    filteredData = tableData
    console.log("reset table data")
    console.log("filterTable started");

    // 8. Set the filtered data to the tableData.
    if (datetime) {
        filteredData = filteredData.filter(row => row.datetime === datetime);
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    }

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    }

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    }
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
window.addEventListener('keyup',function(e){
    if (e.key === "Enter") {
        updateTable()}
});

// start filter by collecting all input on page, go to updateFilters
function updateTable() {
    d3.selectAll("input").on("change", updateFilters)
};