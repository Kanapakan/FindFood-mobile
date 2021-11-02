import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import React, { useRef } from "react";
import {Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, Dimensions } from "react-native";

const Graph = () => {
    return(
        <View>
  <Text>Bezier Line Chart</Text>
  <PieChart
  data={[
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "tomato",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ]}
  width={Dimensions.get("window").width}
  height={220}
  chartConfig={{ backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false}}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
/>

<BarChart
  style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  data={{
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  }}
  width={Dimensions.get("window").width}
  height={220}
  yAxisLabel="$"
  chartConfig={{
  backgroundGradientFrom: "#A6A5A3",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#A6A5A3",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(0, 255, 0)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false}}
  verticalLabelRotation={30}
/>
</View>
    )
}

export default Graph;

