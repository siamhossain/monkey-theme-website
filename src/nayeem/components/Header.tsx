import React, {Fragment, useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button} from '@material-ui/core';
import MonkeyImage from "../../assets/image/monkey.png";
import TwitterLogo from "../../assets/image/twitter.png";
import DiscordLogo from "../../assets/image/discord.png";
import menu_icon from "../../assets/image/ic_menu.png";
import Sidebar from "./Sidebar";

export const headerStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "#000000",
            color: "#ffffff",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "15px",
            paddingBottom: "15px",

            [theme.breakpoints.down('sm')]: {
                paddingLeft: "5px",
                paddingRight: "5px",
            },


            "& .container": {
                padding: 5,

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                "& .reponsive-menu-icon": {
                    "& .menu-icon-img": {
                        width: 35,
                        height: 35,
                    },
                    display: "none",
                    [theme.breakpoints.down('sm')]: {
                       display: "inline-block", 
                    }

                },

                "& .logo-section": {
                    textAlign: "left",

                    "& .connect-btn": {
                        background: "#001fa5",
                        textTransform: "capitalize",
                        borderRadius: 8,
                        fontSize: 15,
                        fontWeight: "bold",
                        [theme.breakpoints.down('sm')]: {
                            background: "green",
                        }
                    },
                },

                "& .middle-section": {
                    [theme.breakpoints.down('sm')]: {
                        display: "none",
                    },
                    "& .nav": {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",

                        "& .item": {
                            margin: "0 15px 0 15px",

                            "& a": {
                                textDecoration: "none",
                                color: "#ffffff",
                                fontSize: 16,
                                fontWeight: 'bold',
                                cursor: "pointer",

                                "&:hover": {
                                    opacity: 0.8,
                                    color: "#FF8F02",
                                }
                            }
                        }
                    }
                },

                "& .right-menu-section": {
                    "& .menu": {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",

                        "& .social-link": {
                            [theme.breakpoints.down('sm')]: {
                                display: "none",
                            },
                        },

                        "& .item": {
                            margin: "0 5px 0 5px",

                            "& .menu-icon": {
                                width: 40,

                                "&:hover": {
                                    opacity: 0.8,
                                }
                            },

                            "& .monkey-image": {
                                width: 100,
                                marginLeft: 20,
                                [theme.breakpoints.down('sm')]: {
                                    width: 50,
                                    height: 50,
                                    marginLeft: 0,
                                },
                            },

                            "&:first-child": {
                                marginRight: 35,
                            }
                        }
                    },

                    "& .members-area-btn": {
                        background: "#f51b00",
                        textTransform: "uppercase",
                        fontSize: 15,
                        borderRadius: 8,
                        width: 150,
                        lineHeight: 1.2,
                        padding: "8px 50px !important",
                        display: "flex",
                        justifyContent: "center",
                        [theme.breakpoints.down('sm')]: {
                            padding: "8px 20px !important",
                            fontSize: 14,
                        },
                        [theme.breakpoints.down('xs')]: {
                            padding: "10px 10px !important",
                            fontSize: 12,
                        },
                    },
                },
            },
        },
    }),
);


interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = (props) => {
    const classes = headerStyles();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Fragment>
            <div className={classes.root}>
                <div className={"container"}>
                    <div className={"reponsive-menu-icon"} onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <img src={menu_icon} alt="menu-icon" className={"menu-icon-img"}/>
                    </div>
                    <div className={"logo-section"}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            className={"connect-btn"}
                            size={"small"}
                            href={"#welcome_section"}
                        >
                            MINT
                        </Button>
                    </div>

                    <div className={"middle-section"}>
                        <div className={"nav"}>
                            <div className={"item"}>
                                <a href={"#welcome_section"}>Welcome</a>
                            </div>
                            <div className={"item"}>
                                <a href={"#preview_section"}>Preview</a>
                            </div>
                            <div className={"item"}>
                                <a href={"#road_map_section"}>Road Map</a>
                            </div>
                            <div className={"item"}>
                                <a href={"#team_section"}>Team</a>
                            </div>
                        </div>
                    </div>

                    <div className={"right-menu-section"}>
                        <div className={"menu"}>
                            <div className={"item"}>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    className={"members-area-btn"}
                                    size={"small"}
                                >
                                    Members Area
                                </Button>
                            </div>

                            <div className={"item social-link"}>
                                <a href={"https://twitter.com/Casino_MG"}>
                                    <img src={TwitterLogo} className={"menu-icon"} />
                                </a>
                            </div>

                            <div className={"item social-link"}>
                                <a href={"http://discord.gg/M9YdhRn23U"}>
                                    <img src={DiscordLogo} className={"menu-icon"} />
                                </a>
                            </div>

                            <div className={"item"}>
                                <img src={MonkeyImage} className={"monkey-image"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
        </Fragment>
    );
};

export default Header;