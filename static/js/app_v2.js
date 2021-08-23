// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

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
let filterBuild = {};

// 3. Use this function to update the filters. 
function updateFilters() {
  console.log("updateFilter start")
    //let filterBuild = tableData

    // 4a. Save the element that was changed as a variable.
    console.log("changedElement")
    let changedElement = d3.select(this);
    console.log(changedElement);

    // 4b. Save the value that was changed as a variable.
    let changedValue = changedElement.property("value");
    console.log(changedValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let changedID = changedElement.attr("id");
    console.log(changedID);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue) {
      filterBuild[changedID] = changedValue;
      console.log("added filter criteria");
    }
    else {
      delete filterBuild[changedID]
      console.log("deleted filter criteria");
    };
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
    console.log("updateFilter end");
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
  };

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.

  function buildTable(filteredData) { 
    // First, clear out any existing data
    tbody.html("");

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values 
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  

  // 10. Finally, rebuild the table using the filtered data
  
  console.log("filterTable ended");
};
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters());

// Build the table when the page loads
buildTable(tableData);
