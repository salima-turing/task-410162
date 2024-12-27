<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>
<!-- Dashboard Container -->
<div id="dashboard">
    <!-- Graphs will go here -->
    <div id="graph-container"></div>

    <!-- Filtering Components -->
    <div id="filter-container">
        <input type="date" id="start-date" placeholder="Start Date">
        <input type="date" id="end-date" placeholder="End Date">
        <select id="team-filter">
            <option value="all">All Teams</option>
            <option value="teamA">Team A</option>
            <option value="teamB">Team B</option>
        </select>
        <button id="apply-filter">Apply Filter</button>
    </div>
</div>

<!-- JavaScript Code -->
<script src="script.js"></script>
</body>
</html>
