// /* eslint-disable @typescript-eslint/no-unused-vars */
// import BoxHeader from "@/components/BoxHeader";
// import FlexBetween from "@/components/FlexBetween";
// import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
// import { Box, Typography, useTheme } from "@mui/material";
// import React, { useMemo } from "react";
// import {
//   Tooltip,
//   CartesianGrid,
//   LineChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ScatterChart,
//   Scatter,
//   ZAxis,
// } from "recharts";

// const pieData = [
//   { name: "Group A", value: 600 },
//   { name: "Group B", value: 400 },
// ];

// const Row2 = () => {
//   const { palette } = useTheme();
//   const pieColors = [palette.primary[800], palette.primary[300]];
//   const { data: operationalData } = useGetKpisQuery();
//   const { data: productData } = useGetProductsQuery();
//   const operationalExpenses = useMemo(() => {
//     return (
//       operationalData &&
//       operationalData[0].monthlyData.map(
//         ({ month, operationalExpenses, nonOperationalExpenses }) => {
//           return {
//             name: month.substring(0, 3),
//             "Operational Expenses": operationalExpenses,
//             "Non Operational Expenses": nonOperationalExpenses,
//           };
//         }
//       )
//     );
//   }, [operationalData]);

//   const productExpenseData = useMemo(() => {
//     return (
//       productData &&
//       productData.map(({ _id, price, expense }) => {
//         return {
//           id: _id,
//           price: price,
//           expense: expense,
//         };
//       })
//     );
//   }, [productData]);

//   return (
//     <>
//       <div
//         style={{
//           gridArea: "d",
//           backgroundColor: "#2d2d34",
//           borderRadius: "1rem",
//           boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
//         }}
//       >
//         <BoxHeader
//           title="Operational vs Non-Operational Expenses"
//           // subtitle="top line represents revenue, bottom line represents expenses"
//           sideText="+3.7%"
//         />
//       </div>
//       <div
//         style={{
//           gridArea: "e",
//           backgroundColor: "#2d2d34",
//           borderRadius: "1rem",
//           boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
//         }}
//       >
//         <BoxHeader
//           title="Campaigns and targets"
//           // subtitle="top line represents revenue, bottom line represents expenses"
//           sideText="+4.12%"
//         />
//       </div>
//       <div
//         style={{
//           gridArea: "f",
//           backgroundColor: "#2d2d34",
//           borderRadius: "1rem",
//           boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
//         }}
//       ></div>
//     </>
//   );
// };

// export default Row2;
