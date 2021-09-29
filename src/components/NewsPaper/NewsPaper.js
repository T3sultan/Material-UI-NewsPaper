import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import News from '../News/News';


const NewsPaper = () => {
    const [articales, setArticales] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4e64c6fd22a84305a67cbf634f6f2879')
            .then(res => res.json())
            .then(data => setArticales(data.articles));

    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articales.map(articale => <Grid item xs={2} sm={4} md={4}>
                        <News
                            articale={articale}
                        >

                        </News>

                    </Grid>)
                }
            </Grid>

        </Box>
    );

};

export default NewsPaper;