import { makeStyles } from '@mui/styles';
import SearchBar from '../components/searchBar';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        width: '80%',
        marginTop: '20px'
    },
    mangaCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ddd',
        padding: '10px',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    mangaImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        objectFit: 'cover'
    },
    mangaTitle: {
      fontSize: '5px',
      alignItems: 'center',
    }
}));

const Home = () => {
    const classes = useStyles();
    const mangas = [
        {
            title: 'Chainsaw Man',
            imageURL: 'https://www.bdnet.com/img/couvpage/35/9782820338358_cg.jpg'
        },
        {
            title: "l'Attaque des Titans",
            imageURL: 'https://m.media-amazon.com/images/I/81InD3fqZAL._SL1500_.jpg'
        }
    ];

    return (
        <div className={classes.container}>
            <SearchBar />
            <h1>Catalogue Manga</h1>
            <div className={classes.grid}>
                {mangas.map((manga, index) => (
                    <div key={index} className={classes.mangaCard}>
                        <img src={manga.imageURL} alt={manga.title} className={classes.mangaImage} />
                        <h2 className={classes.mangaTitle}>{manga.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
