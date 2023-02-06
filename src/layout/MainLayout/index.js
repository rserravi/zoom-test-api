import { ThemeProvider } from '@mui/private-theming';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import BottomBar from '../../components/bottomBar';
import  TopBar  from '../../components/topBar';
import { themeOptions } from '../../themes/theme-light';

const MainLayout = () =>{

    return (
        <React.Fragment>
            <ThemeProvider theme={themeOptions}>
                <TopBar />
                    <Outlet />    
                <BottomBar />
            </ThemeProvider>
        </React.Fragment>
    )
}


export default MainLayout;