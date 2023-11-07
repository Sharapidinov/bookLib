import React from 'react';
import BooksCollection from "../widgets/BooksCollection";
import {Container} from "@mui/material";

const Dashboard = () => {
    return (
        <Container>
            <BooksCollection/>
        </Container>
    );
};

export default Dashboard;