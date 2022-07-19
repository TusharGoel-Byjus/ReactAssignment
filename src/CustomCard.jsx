import React from "react";
import {Card,CardHeader,CardBody,CardText} from "reactstrap";
 
//test 

function CustomCard(props){
    return (
        <div>
            <Card>
                <CardHeader style={{backgroundColor: "#ffc106"}}>Todo {props.id}</CardHeader>
                <CardBody> 
                    <CardText>User Id : {props.userId}</CardText>
                    <CardText>Completed: {props.completed ? "YES" : "NO"}</CardText>
                    <CardText>Title: {props.title}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


export default CustomCard;