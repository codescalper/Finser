import { useMediaQuery, useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
          <XAxis dataKey="name" tickLine={false} style={{fontSize:"10px"}} axisLine={{strokeWidth:"0"}} domain={[8000,23000]} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true}  dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>   
            </div>
            <div style={{ gridArea: 'b', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}>
           
            </div>
            <div style={{ gridArea: 'c', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'd', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'e', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'f', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'g', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'h', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'i', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
            <div style={{ gridArea: 'j', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
        </div >
    )
}

export default Dashboard;
