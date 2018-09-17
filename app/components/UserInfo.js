var React = require('react');
var CreateReactClass = require('create-react-class');

var UserRepos = require('./UserRepos');

var UserInfo = CreateReactClass({  
    getInitialState: function(){
        return{
            reposCount: 0,
        }
    },
    componentWillReceiveProps: function(props){
        this.setState({reposCount: props.repos.length});
    },
    render: function(){
        var Tela = () => {
            return <div/>;
        };

        if(this.props.user == null){
            console.log("empty");
        }else{
            Tela = () => {
                return(
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
                            <h2>{this.props.user.login}</h2>
                            <p>{this.props.user.name}</p>
                            <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                            <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View Details</a></p>
                        </div>
                        <div className="col-lg-8">
                            <h1>{this.state.reposCount} Repositórios</h1>
                            <UserRepos repos={this.props.repos}/>
                        </div>
                    </div>
                );
            }
        }
        return(
            <Tela/>
        );    
    }
});

module.exports = UserInfo;