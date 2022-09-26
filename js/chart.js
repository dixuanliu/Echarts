import * as echarts from "echarts";
export function chart(main) {

	let selectDom = main;
	let myCharts = echarts.init(selectDom,null,{renderer:'svg'});
	let option = {
		title: {},
		tooltip: {},
		legend: {
			orient: "vertical",
			x: "left",
			data: ["A", "B", "C", "D"],
		},
		series: [
			{
				name: "ttt",
				type: "pie",
				radius: ["50%", "70%"],
				avoidLabelOverlap:false,
				label: {
					show: false,
					position: "center",
					emphasis: {
						show: true,
						fontSize: "30",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: [
					{ value: 5, name: "A" },
					{ value: 30, name: "B" },
					{ value: 4, name: "C" },
					{ value: 30, name: "D" },
				],
			},
		],
	};
	myCharts.setOption(option);
}
