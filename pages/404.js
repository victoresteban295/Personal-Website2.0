import Link from 'next/link'
import { LowPriority } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/material"

const Custom404 = () => {
    return (
        <Box
            id="page-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                id="custom404-page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: '700px',
                    mx: 1,
                }}
            >
                <Box
                    id="summary-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 1.5,
                        py: 2,
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            m: 0,
                            mb: 1,
                            p: 0,
                        }}
                    >
                        404 - Page Not Found
                    </Typography> 
                    <Typography
                        variant="body1"
                    >
                        The page you are looking for does not exist
                    </Typography>
                        <Link href='/' style={{textDecoration: 'none'}}>
                            <Button 
                                variant='contained' 
                                startIcon={<LowPriority />}
                                sx = {{
                                    color: '#252422',
                                    backgroundColor: '#ccc5b9',
                                    fontWeight: 'bold',
                                    my: 2,
                                    "&:hover": {
                                        backgroundColor: '#403d39'
                                    }
                                }}
                            >
                                Return To Home Page
                            </Button>
                        </Link>
                </Box> 
            </Box>

        </Box>
    )
}

export default Custom404
