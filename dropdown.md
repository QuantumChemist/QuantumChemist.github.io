---
layout: dropdown
---

## Drop down table


<h1>Editable Table</h1>

<table id="editable-table">
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <!-- Table data will be populated here based on user input -->
    </tbody>
</table>

<button id="add-row-button">Add Row</button>
<button id="download-button">Download Table Data</button>

<script>
    const editableTable = document.getElementById('editable-table').getElementsByTagName('tbody')[0];
    const addRowButton = document.getElementById('add-row-button');
    const downloadButton = document.getElementById('download-button');

    function addRow() {
        const row = document.createElement('tr');
        for (let i = 0; i < 3; i++) {
            const cell = document.createElement('td');
            cell.contentEditable = true;
            row.appendChild(cell);
        }
        editableTable.appendChild(row);
    }

    function downloadTable() {
        const rows = Array.from(editableTable.getElementsByTagName('tr'));
        const data = rows.map(row => Array.from(row.getElementsByTagName('td')).map(td => td.innerText));
        const csvContent = data.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

    addRowButton.addEventListener('click', addRow);
    downloadButton.addEventListener('click', downloadTable);
</script>


[back](./tools)
