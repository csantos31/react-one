var React = require('react');
var CreateReactClass = require('create-react-class');

var UserRepos = CreateReactClass({
    render: function(){
        var repos = this.props.repos.map(function(repo, key){
            return(
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name}
                            <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_href} className="btn btn-primary" role="button"> Repository</a>
                            <a href={repo.html_href + '/issues'} className="btn btn-default" role="button"> Issues</a>
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div>
                {repos}
            </div>
        );
    }
});

module.exports = UserRepos;