google.charts.load('42', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['ปี', 'งบประมาณ'],
        ['2547',154274304],
        ['2548',197127420],
        ['2549',119795200],
        ['2550',888453273],
        ['2551',171653747],
        ['2552',284373928],
        ['2553',45610752],
        ['2554',150074623],
        ['2555',3391945005],
        ['2556',4344104088],
        ['2557',4534297900],
        ['2558',6842960900],
        ['2559',4889878800],
        ['2560',4124149900],
        ['2561',4619074600],
        ['2562',3997826900],
    ]);

    var options = {
        chart: {
            title: 'งบประมาณ',
            subtitle: 'ย้อนหลังปี พ.ศ.2547 - พ.ศ.2562'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Bar(document.getElementById('other_chart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}