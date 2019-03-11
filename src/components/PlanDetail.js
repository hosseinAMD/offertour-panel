import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import numeral from 'numeral';

const PlanDetail = (props) => (
    <List>
        <ListItem button>
            <ListItemIcon><Icon>update</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}} primary={props.plan.duration}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>done</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`${props.plan.normalTour} تور معمولی`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>done_all</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`${props.plan.featuredTour} تور ویژه`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>note_add</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`تعداد تبلیغات ${props.plan.adsCount} عدد`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`قیمت: ${numeral(props.plan.price).format('0,0')} تومان`}/>
        </ListItem>
    </List>
);

export default PlanDetail;