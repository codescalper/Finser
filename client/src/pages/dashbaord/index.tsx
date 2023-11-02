import { useMediaQuery, useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, LineChart, Legend, Bar, BarChart } from 'recharts';
import { useMemo } from "react";
import BoxHeader from "@/components/BoxHeader";



const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f" 
    "d h i"
    "g h i"
    "g h j"
`

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`

function Dashboard() {

    const {palette} = useTheme();
    const { data } = useGetKpisQuery();
    console.log(data)
    const revenueExpenses = useMemo(() => {
        return (
          data &&
          data[0].monthlyData.map(({ month, revenue, expenses }) => {
            return {
              name: month.substring(0, 3),
              revenue: revenue,
              expenses: expenses,
            };
          })
        );
      }, [data]);

      const revenueProfit = useMemo(() => {
        return (
          data &&
          data[0].monthlyData.map(({ month, revenue, expenses }) => {
            return {
              name: month.substring(0, 3),
              revenue: revenue,
              profit: (revenue - expenses).toFixed(2),
            };
          })
        );
      }, [data]);
      const revenue = useMemo(() => {
        return (
          data &&
          data[0].monthlyData.map(({ month, revenue }) => {
            return {
              name: month.substring(0, 3),
              revenue: revenue,
            };
          })
        );
      }, [data]);

    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    // instead of cluterring the div style section wrote the logic here 
    const gridStyles = isAboveMediumScreens ? {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
    }
        : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
        }
    return (
        <div style={{
            width: "100%", height: '100%', display: "grid", gap: '1.5rem', ...gridStyles
        }}>
            <div style={{ gridArea: 'a', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
            <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
              right: 25,
              left: -10,
              bottom: 60,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
           <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[8000, 23000]}
            />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true}  dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>   
            </div>
            <div style={{ gridArea: 'b', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={revenueProfit}
          margin={{
            top: 20,
              right: 0,
              left: -10,
              bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
           
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            style={{fontSize:"10px"}} 
            axisLine={{strokeWidth:"0"}} 
            domain={[8000,23000]} 
          />
          <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
          <Tooltip />
          <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
          <Line  yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
          <Line  yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
        </LineChart>
      </ResponsiveContainer>   
            </div>
            <div style={{ gridArea: 'c', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>

            <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>


            </div>
            <div style={{ gridArea: 'd', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Operational vs Non-Operational Expenses"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+3.7%"
        />
            </div>
            <div style={{ gridArea: 'e', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Campaigns and targets"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4.12%"
        />
            </div>
            <div style={{ gridArea: 'f', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Product prices vs Expenses"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4.12%"
        />
            </div>
            <div style={{ gridArea: 'g', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="List of Products"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="124 products"
        />
            </div>
            <div style={{ gridArea: 'h', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Recent orders"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="50 latest transactions"
        />
            </div>
            <div style={{ gridArea: 'i', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Expense breakdown by category"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
            </div>
            <div style={{ gridArea: 'j', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
            <BoxHeader
          title="Overall summary and explanation data for the year" // change this later
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+15%"
        />
            </div>
        </div >
    )
}

export default Dashboard;
