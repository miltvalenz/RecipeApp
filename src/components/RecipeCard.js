import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ title, calories, image, dietLabels, url }) => {
    return (
        <Card style={{ width: '18rem' }} className="card-view">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        dietLabels.length === 0 ? <p>No info provided</p> : dietLabels.map(label => (
                            <p>{label}</p>
                        ))
                    }
                </Card.Text>

                <Button variant="primary">
                    <Card.Link href={url} className="link">Go!</Card.Link>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;