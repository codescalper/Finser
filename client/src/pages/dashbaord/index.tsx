import { useMediaQuery, useTheme } from "@mui/material";

type Props = {}

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

function Dashboard({ }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    const { palette } = useTheme();

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
            <div style={{ gridArea: 'a', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'b', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'c', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'd', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'e', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'f', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'g', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'h', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'i', backgroundColor: "#fff" }}></div>
            <div style={{ gridArea: 'j', backgroundColor: "#fff" }}></div>
        </div >
    )
}

export default Dashboard;
