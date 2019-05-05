import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import enmoment from "moment";
import moment from 'moment-jalaali';
import PlanStars from "./PlanStars";
import StatusRenderer from "./StatusRenderer";
import Button from "@material-ui/core/Button";


const PostCommentItem = (props) => {
    const PostageDateTime = enmoment(Number(props.comment.PostageDateTime)).format('YYYY/MM/DD');
    const status = props.comment.Status;
    const id = props.comment.Id;
    return (
        <TableRow>
            <TableCell align="center">{props.index + 1}</TableCell>
            <TableCell align="center">{props.comment.CommentText}</TableCell>
            <TableCell align="center">{moment(PostageDateTime).format('jDD jMMMM jYYYY')}</TableCell>
            <TableCell align="center">{<PlanStars star={props.comment.PointOFPost}/>}</TableCell>
            <TableCell align="center"><StatusRenderer status={props.comment.Status}/></TableCell>
            <TableCell align="center"><Button onClick={() => props.handleAccept(status, id)}
                                              variant="contained"
                                              color={props.comment.Status ? 'secondary' : 'primary'}
                                              className="font-applied">{props.comment.Status ? 'غیرفعال' : 'فعال'}</Button></TableCell>
        </TableRow>
    );
};

export default PostCommentItem;