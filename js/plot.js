d3.csv('./js/small_plot.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
	mode: 'markers',
	marker: {
		size: 0.5,
		line: {
		color: 'rgba(184, 7, 7, 1)',
		width: 0.5},
		opacity: 1},
	type: 'scatter3d'
};
var data = [trace1];
var layout = {margin: {
	l: 40,
	r: 40,
	b: 10,
	t: 10
  }};
Plotly.newPlot('myDiv', data, layout);
});

