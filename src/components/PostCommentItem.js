import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import enmoment from "moment";
import moment from 'moment-jalaali';
import PlanStars from "./PlanStars";


const PostCommentItem = (props) => {
    const PostageDateTime = enmoment(Number(props.comment.PostageDateTime)).format('YYYY/MM/DD');
    return (
        <TableRow>
            <TableCell align="center">{props.index + 1}</TableCell>
            <TableCell align="center">{props.comment.CommentText}</TableCell>
            <TableCell align="center">{moment(PostageDateTime).format('jDD jMMMM jYYYY')}</TableCell>
            <TableCell align="center">{<PlanStars star={props.comment.PointOFPost}/>}</TableCell>
            <TableCell align="center">{props.comment.Status}</TableCell>
            <TableCell align="center">sss</TableCell>
        </TableRow>
    );
};

export default PostCommentItem;