import './ViewStoryRoute.css'
import {useContext} from "react";
import {StoryContext} from "../Context/stories-context"
import { Redirect, useParams } from "react-router";
import {Link} from 'react-router-dom';
import CreateStoryRoute from '../Components/CreateStoryRoute'

interface RouteParams {
  num: string;
}

function ViewStoryRoute(){
  const storyIndex = parseInt(useParams<RouteParams>().num)
  const {stories} = useContext(StoryContext);
  const story = stories[storyIndex];
    const prevStoryIndex = storyIndex - 1;
    const nextStoryIndex = storyIndex + 1;
    if (!story) {
        return <Redirect to="/stories" />;
    }
    return (
        <div className="ViewStoryRoute">
            <CreateStoryRoute story={story} />
            <p>
                {prevStoryIndex >= 0 && (
                    <Link to={`/stories/${prevStoryIndex}`}>Previous Story</Link>
                )}
                {nextStoryIndex < stories.length && (
                    <Link to={`/stories/${nextStoryIndex}`}>Next Story</Link>
                )}
            </p>
        </div>
    )
}

export default ViewStoryRoute;