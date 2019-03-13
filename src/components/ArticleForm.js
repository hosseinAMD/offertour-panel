import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ArticleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            text:''
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        return(
            <Paper elevation={1} className="article-form-paper right-dir">
                <h3 className="font-applied">ارسال سفرنامه</h3>
                <TextField
                    id="title"
                    label="عنوان"
                    InputLabelProps={{className: 'input-labels'}}
                    InputProps={{className: 'font-applied'}}
                    FormHelperTextProps={{className: 'font-applied'}}
                    helperText='لطفا عنوانی مرتبط و گویا برای مقاله خود انتخاب کنید.'
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                />
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.text}
                    congif={{
                        alignment:'right'
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState(() => ({text:data}))
                    } }
                />
                <div dangerouslySetInnerHTML={{__html:this.state.text}}></div>
            </Paper>
        );
    }
}

export default ArticleForm;