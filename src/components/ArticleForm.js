import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Icon from "@material-ui/core/Icon";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import baseUrl, {token} from "../config/config";
import Loading from "./Loading";


class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            image: '',
            tag: '',
            openSuccess: false,
            openLoading: false,
            openError: false,
            tags: []
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    imageChange = (e) => {
        const image = e.target.files[0];
        this.setState(() => ({image}));
    };

    addTag = () => {
        const tag = this.state.tag;
        let tags = this.state.tags;
        tags.push(tag);
        this.setState(() => ({tags, tag: ''}));
    };


    addArticle = () => {
        this.setState(() => ({openLoading: true}));
        let articleFields = new FormData();
        articleFields.append('Title', this.state.title);
        articleFields.append('Text', this.state.text);
        articleFields.append('Image', this.state.image);
        articleFields.append('TagsInput', `${JSON.stringify(this.state.tags)}`);
        axios.post(baseUrl + '/Admin/BlogPost', articleFields, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(res => {
            this.setState(() => ({openLoading:false,openSuccess: true}));
        }).catch(err => {
            this.setState(() => ({openLoading:false,openError: true}))
        });
    };

    handleClose = () => {
        this.setState(() => ({openLoading:false,openSuccess:false,openError:false}));
    };

    render() {
        return (
            <Paper elevation={1} className="article-form-paper right-dir">
                <div className="article-form-wrapper">
                    <TextField
                        id="title"
                        label="عنوان"
                        autoFocus={true}
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        FormHelperTextProps={{className: 'font-applied'}}
                        helperText='لطفا عنوانی مرتبط و گویا برای مقاله خود انتخاب کنید.'
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        margin="normal"
                    />
                    <TextField
                        id="text"
                        label="متن"
                        multiline
                        rows={8}
                        InputLabelProps={{className: 'input-labels'}}
                        InputProps={{className: 'font-applied'}}
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        margin="normal"
                    />
                    <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around'}}>
                        <div>
                            <TextField
                                id="tag"
                                label="برچسب"
                                InputLabelProps={{className: 'input-labels'}}
                                InputProps={{className: 'font-applied'}}
                                value={this.state.tag}
                                onChange={this.handleChange('tag')}
                                margin="normal"
                            />
                            <Icon fontSize="large" onClick={this.addTag}
                                  style={{color: 'blue', cursor: 'pointer'}}>add</Icon>
                        </div>
                        <FormControl>
                            <label style={{textAlign: 'right', margin: '5px'}} htmlFor="tour-image">تصویر مقاله</label>
                            <input id="tour-image" type="file" onChange={this.imageChange}/>
                        </FormControl>
                    </div>
                    <p>{this.state.tags.map((tag) => <span className="tag">{tag}</span>)}</p>
                    <Button onClick={this.addArticle} variant="contained" color="primary"
                            className="edit-button">ارسال</Button>
                </div>
                <Dialog
                    open={this.state.openError}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon style={{color: 'red'}}
                                                                                         fontSize="large">close_circle</Icon>{"خطا در بروزرسانی اطلاعات"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            خطا در ثبت اطلاعات
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.openSuccess}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied"> <Icon
                        style={{color: 'green'}}
                        fontSize="large">check_circle</Icon>{"انجام شد!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            با موفقیت انجام شد!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="font-applied" onClick={this.handleClose} color="primary" autoFocus>
                            بستن
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.openLoading}
                    onClose={this.handleClose}
                    className="right-dir font-applied"
                >
                    <DialogTitle id="alert-dialog-title" className="font-applied">{"در حال انجام عملیات!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Loading/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Paper>
        );
    }
}

export default ArticleForm;