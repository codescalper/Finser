import { useTheme } from "@mui/material";

type Props = {}

const gridTemplate = `
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

function Dashboard({ }: Props) {
    const { palette } = useTheme();

    return (

        <div style={{ width: "100%", height: '100%', display: "grid", gap: '1.5rem', gridTemplateAreas: gridTemplate, gridTemplateColumns: "repeat(3,minmax(370px,1fr))", gridTemplateRows: 'repeat(10,minmax(60px, 1fr))' }}>
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
        </div>
    )
}

export default Dashboard