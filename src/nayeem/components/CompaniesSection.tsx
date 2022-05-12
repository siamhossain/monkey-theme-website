import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Company1 from '../../assets/image/companies/One.jpeg';
import Company2 from '../../assets/image/companies/Two.jpeg';
import Company3 from '../../assets/image/companies/Three.jpeg';
import Company4 from '../../assets/image/companies/Four.jpeg';
import Company5 from '../../assets/image/companies/Five.jpeg';

export const companiesSectionStyles = makeStyles((theme) =>
    createStyles({
        root: {
            textAlign: "center",
            padding: "35px",

            "& *": {
                fontFamily: "ExoRegular !important",
            },


            "& .container": {


                [theme.breakpoints.down('md')]: {
                    width: "100%",
                    display: "block",
                },

                "& .title": {
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    marginBottom: 30,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 32,
                    },
                },

                "& .companies": {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",

                    [theme.breakpoints.down('sm')]: {
                        justifyContent: "center",
                    },

                    "& .company img": {
                        width: 180,
                        marginBottom: 15,
                    }
                },
            }
        },
    }),
);

const CompaniesSection = () => {
    const classes = companiesSectionStyles();

    return (
        <div className={classes.root}>
            <div className={"container"}>
                <div className={"title"}>As Seen On</div>

                <div className={"companies"}>
                    <div className={"company"}>
                        <img src={Company2}  alt={""}/>
                    </div>

                    <div className={"company"}>
                        <a href='https://nftcalendar.io/event/casino-monkey-gold/'><img src={Company1}  alt={""}/></a>
                    </div>

                    <div className={"company"}>
                        <img src={Company4}  alt={""}/>
                    </div>

                    <div className={"company"}>
                        <img src={Company5}  alt={""}/>
                    </div>

                    <div className={"company"}>
                        <img src={Company3}  alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesSection;
