import { Card, CardContent, CardMedia, Typography, Box, CardHeader, List, ListItem } from '@mui/material';
import { useEffect, useRef } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const DisplayMon = ({ mon }) => {
    const artworkUrl = mon?.sprites?.other?.['official-artwork']?.front_default;
    const type = mon?.types?.map(t => t.type.name) || [];
    const audioRef = useRef(null);

    useEffect(() => {
        if (!mon) return; 
        audioRef.current = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${mon.id}.ogg`);
    }, [mon]);

    const playCry = () => {
        if (audioRef.current) audioRef.current.play();
    };

    const typeColors = {
        normal: '#A8A878',
        fire: '#c43d25',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#F0B6BC',
    };


    const setBackground = (types) => {
        const [type1, type2] = types;
        const color1 = typeColors[type1] || '#ccc';
        const color2 = typeColors[type2] || color1;

        if (types.length === 1) {
            return color1;
        } else {
            return `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`;
        }
    };

    const background = setBackground(type);
  
  

    if (!mon) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <>
            <Card sx={{ 
                    maxWidth: 345, 
                    margin: 'auto', 
                    boxShadow: 3, 
                    marginTop: '2%',
                    border: '8px solid gold',
                    borderRadius: '10px',
                    backgroundColor: '#0034a3',
                }}>
                <CardHeader 
                    title={`${mon.name} #${mon.id}`}
                    action={
                        <VolumeUpIcon sx={{color: 'whitesmoke', cursor: 'pointer'}} onClick={playCry} />
                    }
                    sx={{ 
                        textTransform: 'capitalize', 
                        color: 'whitesmoke', 
                        paddingBottom: 0,
                        marginBottom: 0, 
                        backgroundColor: '#0034a3',
                    }} 
                />
                <Box sx={{ border: '1px solid #ccc', borderRadius: 1, mx: 3, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={artworkUrl}
                        alt={`${mon.name} artwork`}
                        sx={{
                        objectFit: 'contain',
                        background: background,
                        borderRadius: 1,
                        }}
                    />
                </Box>
                <CardContent sx={{mb: 8}}>
                    <List sx={{color: 'whitesmoke'}}>
                        {/* height from API is in decimeters, convert to meters, to feet and inches */}
                        <ListItem>
                        Height: {(() => {
                                const totalInches = mon.height * 3.937;
                                const feet = Math.floor(totalInches / 12);
                                const inches = Math.round(totalInches % 12);
                                return `${feet}' ${inches}"`;
                            })()
                        }
                        </ListItem>
                        {/* weight from API is in hectograms, so we convert this to kg to pounds */}
                        <ListItem>
                            Weight: {(mon.weight * 0.1 * 2.20462).toFixed(1)} lbs.
                        </ListItem>
                    </List>
                {/* {type.map((t, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary">
                        Type: {t}
                    </Typography>
                ))} */}
                </CardContent>
            </Card>
        </>
    );
};

export default DisplayMon;