google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['กระทรวง', 'งบประมาณ'],
        ['กระทรวงกลาโหม',27573600],
        ['กระทรวงการคลัง',1288000],
        ['กระทรวงการท่องเที่ยวและกีฬา',76251200],
        ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์',16902300],
        ['กระทรวงเกษตรและสหกรณ์',335195700],
        ['กระทรวงคมนาคม',1539891300],
        ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม',3659000],
        ['กระทรวงพาณิชย์',2649170],
        ['กระทรวงมหาดไทย',1034090100],
        ['กระทรวงยุติธรรม',61535300],
        ['กระทรวงแรงงาน',5216000],
        ['กระทรวงวัฒนธรรม',3500000],
        ['กระทรวงศึกษาธิการ',2070486580],
        ['กระทรวงสาธารณสุข',289723700],
    ]);

    var options = {
        title: 'งบประมาณแบ่งตามกระทรวง',
        pieHole: 0.0, 
        width: 900,
        height: 500
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('ministry_pie'));
    chart.draw(data, options);
}