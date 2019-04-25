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
            <ListItemText classes={{primary: 'font-applied center-txt'}} primary={'۳۰ روز'}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>done</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`${props.plan.NormalTour} تور معمولی`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>done_all</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`${props.plan.FeaturedTour} تور ویژه`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`قیمت: ${numeral(props.plan.Price).format('0,0')} تومان`}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>done_all</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={props.plan.DiscountStatus ? 'با تخفیف' : 'بدون تخفیف'}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon><Icon>attach_money</Icon></ListItemIcon>
            <ListItemText classes={{primary: 'font-applied center-txt'}}
                          primary={`قیمت نهایی: ${numeral(props.plan.PriceAfterDiscount).format('0,0')} تومان`}/>
        </ListItem>
    </List>
);

export default PlanDetail;