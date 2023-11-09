import React from 'react';
import BooksCollection from "../widgets/BooksCollection";
import {Container} from "@mui/material";
import SearchBlock from "../widgets/SearchBlock";

const Dashboard = () => {

    return (
        <Container>
            <SearchBlock/>
            <BooksCollection/>
        </Container>
    );
};

export default Dashboard;