import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Icon from "@material-ui/core/Icon";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";

class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            image: '',
            tag: '',
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
                    <Button variant="contained" color="primary"
                            className="edit-button">ارسال</Button>
                </div>
            </Paper>
        );
    }
}

export default ArticleForm;