import React, { useEffect } from 'react'
import {
    Menu,
    IconButton,
    MenuItem,
    Typography,
    AppBar,
    Toolbar,
} from '@material-ui/core/'
import MoreIcon from '@material-ui/icons/MoreVert'
import CartIcon from '../cart/CartIcon'
import useStyles from './Style'
import { NavLink, Link } from 'react-router-dom'
import { getFirestore } from '../../firebase'

// const categories = [
//     { name: 'Notebooks', id: 'notebooks' },
//     { name: 'Audio', id: 'audio' },
//     { name: 'Smartwatches', id: 'smartwatches' },
// ]

const Navbar = () => {
    const classes = useStyles()

    // conectando categories con firebase:

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('categories')
        itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results')
                } else {
                    querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                }
            })
            .catch((error) => {
                console.log('Error searching categories', error)
            })
    }, [])

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link
                className={classes.categoriaMobile}
                to="/categories/notebooks"
            >
                <MenuItem>Notebooks</MenuItem>
            </Link>
            <Link className={classes.categoriaMobile} to="/categories/audio">
                <MenuItem>Audio</MenuItem>
            </Link>
            <Link
                className={classes.categoriaMobile}
                to="/categories/smartwatches"
            >
                <MenuItem>Smartwatches</MenuItem>
            </Link>
        </Menu>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/">
                            <img
                                className={classes.title}
                                src="data:image/png;base64,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"
                                alt="imagen-logo"
                            />
                        </NavLink>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link className={classes.categoria} to="/">
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/notebooks"
                        >
                            <MenuItem>Hamburguesas</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/audio"
                        >
                            <MenuItem>Combos</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/smartwatches"
                        >
                            <MenuItem>Bebidas</MenuItem>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                    <NavLink to="/cart">
                        <CartIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
}

export default Navbar
