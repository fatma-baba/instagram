import React from 'react'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import './header.css'

export const Header = () => {
    return (
        <div className="header">
            <FormControl>
                <Input
                placeholder="Search"
                id="search"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                />
            </FormControl>
            <div>
                <IconButton aria-label="delete">
                    <NotificationsNoneIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <MailOutlineIcon />
                </IconButton>
                <Button
                    className="add-button"
                    variant="contained"
                    color="secondary"
                    startIcon={<AddCircleIcon />}
                >
                    Add photo
                </Button>
            </div>
        </div>
    )
}

export default Header
