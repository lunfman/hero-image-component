import React from "react";
import CardImageBadge from "./CardImageBadge";
import Badge from "./Badge";

export default function BadgeDemo (){
    return(
        <CardImageBadge>
            <Badge
                background="green"
                color="white"
                right="-5px"
            >
                eco
            </Badge>
            <img 
            src="https://images.unsplash.com/photo-1654553035219-3c40479fccea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            style={{'maxWidth': '300px'}}
            >
                
            </img>
        </CardImageBadge>
    )
}