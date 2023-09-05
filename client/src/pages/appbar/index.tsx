import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
type Props = {}

function AppBar({ }: Props) {
    const { palette } = useTheme();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem', padding: '0.5rem 0rem', color: palette.grey[300] }} >
            Hello
        </ div >
    )
}

export default AppBar