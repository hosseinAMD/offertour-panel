import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

class Playground extends React.Component {
    state = {
        code: '',
        isFetched: false
    };

    onCodeChange = (e) => {
        const code = e.target.value;
        this.setState(() => ({code}));
    };

    submitForm = (e) => {
        e.preventDefault();
        this.setState(() => ({isFetched: true}))
    };


    render() {
        return (
            <div>
                <input type="text" onChange={this.onCodeChange}/>
                <button onClick={this.submitForm}>get</button>
                {this.state.isFetched ? <Query
                    query={gql`
{
  country(code: "${this.state.code}") {
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
  }
}
                        `}
                >
                    {({loading, error, data}) => {
                        if (loading) return <p>Good things take time....</p>;
                        if (error) return <p>Something went wrong...</p>;
                        return <div>
                            <p>name: {data.country.name}</p>
                            <p>language: {data.country.languages[0].name}</p>
                        </div>
                    }}
                </Query> : <p>submit to show detail</p>}

            </div>
        );
    }
}

export default Playground;