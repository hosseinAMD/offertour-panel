import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import comments from '../data/comments';
import moment from 'moment-jalaali';
import HeaderChip from "./HeaderChip";

const Comments = () => (
    <Paper elevation={1} className="comments-paper">
        <HeaderChip label='آخرین نظرات' icon='comment' color='#e65100'/>
    <List className="right-dir font-applied">
        {comments.map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={comment.name} src={comment.image}/>
                </ListItemAvatar>
                <ListItemText
                    classes={{primary:'font-applied right-dir'}}
                    primary={comment.comment}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" color="textPrimary">
                                {comment.author}
                            </Typography>
                            {moment(comment.createdAt).format('تاریخ jYYYY/jMM/jDD در ساعت HH:MM')}
                        </React.Fragment>
                    }
                />
            </ListItem>
        ))}
    </List>
    </Paper>
);

export default Comments;