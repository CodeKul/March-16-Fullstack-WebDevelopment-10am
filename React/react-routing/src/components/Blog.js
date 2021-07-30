import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import BlogContent from './BlogContent';

export default function Blog({topics}) {

    const {url, path} = useRouteMatch();
    return (
        <div>
            <h1>Blog</h1>

            {topics.map((topic, id) => (

            <li>
                <Link to={`${url}/${topic.id}`}>{topic.topicName}</Link>
            </li>

            ))}

            <Route path={`${path}/:topicId`}>
                <BlogContent topics={topics}/>
            </Route>



        </div>
    )
}
