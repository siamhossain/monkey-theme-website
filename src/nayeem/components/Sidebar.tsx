import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button} from '@material-ui/core';
import MonkeyImage from "../../assets/image/monkey.png";
import TwitterLogo from "../../assets/image/twitter.png";
import DiscordLogo from "../../assets/image/discord.png";
import close_icon from "../../assets/image/ic_close.png";

export const sidebarStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& .sidebar": {
                width: 250,
                color: "#ffffff",
                background: "#000000 !important",
                padding: "35px 15px",
                position: "fixed",
                zIndex: 9999,
                top: 0,
                left: "-100%",
                bottom: 0,
                transition: "all 0.5s",

                "& .close-btn": {
                  border: "none",
                  backgroundColor: "#000000",
                  float: "right",
                  marginBottom: 100,
                    "& .close-btn-img": {
                        width: 25,
                        height: 25,
                    },
                },

                "& .menu-list": {
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    marginTop: 50,
                    "& .list-item": {
                        padding: "5px",
                        "& a": {
                            textDecoration: "none",
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: 'bold',
                            cursor: "pointer",

                            "&:hover": {
                                opacity: 0.8,
                                color: "#FF8F02",
                            },
                        },
                    },
                },
            },
        },
    }),
);


interface ISidebarProps {
    open?: boolean,
    onClose?(): any,
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
    const classes = sidebarStyles();

    return (
        <div className={classes.root}>
            <div className={"sidebar"} style={{left: props.open ? 0 : "-100%"}}>
                <button onClick={props.onClose} className={"close-btn"}><img src={close_icon} alt="" className={"close-btn-img"}/></button>
                <ul className={"menu-list"}>
                    <li onClick={props.onClose} className={"list-item"}><a href={"#welcome_section"}>Welcome</a></li>
                    <li onClick={props.onClose} className={"list-item"}><a href={"#preview_section"}>Preview</a></li>
                    <li onClick={props.onClose} className={"list-item"}><a href={"#road_map_section"}>Road Map</a></li>
                    <li onClick={props.onClose} className={"list-item"}><a href={"#team_section"}>Team</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
