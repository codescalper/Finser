import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { tokens } from '@/theme';
type Props = {}

function AppBar(props: Props) {
    const { palette } = useTheme();
    const [selected, setSelected] = useState('Dashbaord'); //Default value is Dashbaord
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem', padding: '0.5rem 0rem', color: palette.grey[300] }} >
            {/* Left side */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <CandlestickChartIcon sx={{ fontSize: '28px' }} />
                <Typography variant='h4' fontSize='16px'>
                    FinServ
                </Typography>
            </div>

            {/* Right Side */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ "&:hover": { color: tokens.primary[100] } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Dashboard
                    </Link>


                </Box>
                <Box sx={{ "&:hover": { color: tokens.primary[100] } }}>
                    <Link
                        to="/predictions"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color: selected === "predictions" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Predictions
                    </Link>
                </Box>
            </div>
        </ div >
    )
}

export default AppBar