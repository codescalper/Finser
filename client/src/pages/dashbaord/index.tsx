import { useMediaQuery } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";



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
    const {data} = useGetKpisQuery();
    console.log("data:",data);
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
                
            </div>
            <div style={{ gridArea: 'b', backgroundColor: '#2d2d34', borderRadius: '1rem', boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)' }}></div>
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
