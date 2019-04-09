import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';
import _ from 'lodash';

const comments = [];
for(let i = 0; i < 3; i++) {
  comments.push({
    id: i,
    authorName: faker.name.firstName(),
    commentBody: faker.lorem.paragraph(),
    timeAgo: faker.random.number(60),
    image: faker.image.avatar()
  });
}

const sortedComments = _.sortBy( comments, 'timeAgo' );

const App = () => {
  return (
    <div className="ui container comments">
      {sortedComments.map(item => (
        <ApprovalCard>
          <CommentDetail
            authorName={item.authorName}
            commentBody={item.commentBody}
            timeAgo={item.timeAgo + " minutes ago"}
            image={item.image}
            key={item.id}
          />
        </ApprovalCard>
      ))}       
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
